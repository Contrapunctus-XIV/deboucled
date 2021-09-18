// ==UserScript==
// @name        Déboucled
// @namespace   deboucledjvcom
// @description Censure les topics eclatax et vous sort de la boucle
// @include     http://www.jeuxvideo.com/forums/*
// @include     https://www.jeuxvideo.com/forums/*
// @include     http://m.jeuxvideo.com/forums/*
// @version     1.0
// @author      Randomax
// @grant       GM_getValue
// @grant       GM_setValue
// @grant       GM_addStyle
// @todo        "Reversed/Highlight option" : highlight elements of interest
// @todo        "Hiding mode option" : show blacklisted elements in red (not hidden)
// @todo        "Zap mode" : select author/word directly in the main page to blacklist
// ==/UserScript==


let subjectBlacklistArray = [];
let authorBlacklistArray = [];
let topicIdBlacklistMap = new Map();
let subjectsBlacklistReg = makeRegex(subjectBlacklistArray, true);
let authorsBlacklistReg = makeRegex(authorBlacklistArray, false);
let hiddenTopics = 0;
const topicByPage = 25;
const entitySubject = 'subject';
const entityAuthor = 'author';
const entityTopicId = 'topicid';
const storage_init = 'deboucled_init';
const storage_blacklistedTopicIds = 'deboucled_blacklistedTopicIds';
const storage_blacklistedSubjects = 'deboucled_blacklistedSubjects';
const storage_blacklistedAuthors = 'deboucled_blacklistedAuthors';


function initStorage() {
    if (GM_getValue(storage_init, false)) {
        loadFromStorage();
        return false;
    }
    else {
        saveToStorage();
        GM_setValue(storage_init, true);
        return true;
    }
}

function loadFromStorage() {
    topicIdBlacklistMap = new Map([...topicIdBlacklistMap, ...JSON.parse(GM_getValue(storage_blacklistedTopicIds))]);
    subjectBlacklistArray = [...new Set(subjectBlacklistArray.concat(JSON.parse(GM_getValue(storage_blacklistedSubjects))))];
    authorBlacklistArray = [...new Set(authorBlacklistArray.concat(JSON.parse(GM_getValue(storage_blacklistedAuthors))))];

    subjectsBlacklistReg = makeRegex(subjectBlacklistArray, true);
    authorsBlacklistReg = makeRegex(authorBlacklistArray, false);

    saveToStorage();
}

function saveToStorage() {
    GM_setValue(storage_blacklistedTopicIds, JSON.stringify([...topicIdBlacklistMap]));
    GM_setValue(storage_blacklistedSubjects, JSON.stringify([...new Set(subjectBlacklistArray)]));
    GM_setValue(storage_blacklistedAuthors, JSON.stringify([...new Set(authorBlacklistArray)]));

    subjectsBlacklistReg = makeRegex(subjectBlacklistArray, true);
    authorsBlacklistReg = makeRegex(authorBlacklistArray, false);
}

function makeRegex(array, withBoundaries) {
    let map = withBoundaries ? array.map((e) => `\\b${escapeRegExp(e)}\\b`) : array.map((e) => escapeRegExp(e));
    let regex = map.join('|');
    return new RegExp(regex, 'gi');
}

function escapeRegExp(str) {
    return str.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}

function getAllTopics(doc) {
    let allTopics = doc.querySelectorAll('.topic-list.topic-list-admin > li:not(.dfp__atf)');
    return [...allTopics];
}

function addTopicIdBlacklist(topicId, topicSubject, refreshTopicList) {
    if (!topicIdBlacklistMap.has(topicId)) {
        topicIdBlacklistMap.set(topicId, topicSubject);
        saveToStorage();
        if (refreshTopicList) {
            let topic = document.querySelector('[data-id="' + topicId + '"]');
            if (topic === undefined) return;
            removeTopic(topic);
            updateTopicsHeader();
        }
    }
}

function removeTopicIdBlacklist(topicId) {
    if (topicIdBlacklistMap.has(topicId)) {
        topicIdBlacklistMap.delete(topicId);
        saveToStorage();
    }
}

function addEntityBlacklist(array, key) {
    if (array.indexOf(key) === -1) {
        array.push(key);
        saveToStorage();
    }
}

function removeEntityBlacklist(array, key) {
    let index = array.indexOf(key);
    if (index > -1) {
        array.splice(index, 1);
        saveToStorage();
    }
}

async function fillTopics(topics) {
    let actualTopics = topics.length - hiddenTopics - 1;
    let pageBrowse = 1;
    let domParser = new DOMParser();

    while (actualTopics < topicByPage && pageBrowse <= 10) {
        pageBrowse++;
        await getPageContent(pageBrowse).then((res) => {
            let nextDoc = domParser.parseFromString(res, "text/html");
            let nextPageTopics = getAllTopics(nextDoc);

            nextPageTopics.slice(1).forEach(function (topic) {
                if (isTopicBlacklisted(topic)) {
                    hiddenTopics++;
                    return;
                }
                if (actualTopics < topicByPage && !topicExists(topics, topic)) {
                    addTopic(topic);
                    actualTopics++;
                }
            });
        });
    }
}

function updateTopicsHeader() {
    let subjectHeader = document.querySelector('.topic-head > span:nth-child(1)');
    subjectHeader.textContent = `SUJET (${hiddenTopics} ignorés)`;

    let lastMessageHeader = document.querySelector('.topic-head > span:nth-child(4)');
    lastMessageHeader.style.width = '5.3rem';
}

function removeTopic(element) {
    //element.getElementsByClassName("lien-jv topic-title")[0].style.color = "white";
    //element.style.backgroundColor = "red";
    element.style.display = "none";
    hiddenTopics++;
}

function addTopic(element) {
    if (element.getElementsByClassName("xXx text-user topic-author").length === 0) // jvcare
    {
        let topicAuthorSpan = element.children[1];
        let author = topicAuthorSpan.textContent.trim();
        topicAuthorSpan.outerHTML = `<a href="https://www.jeuxvideo.com/profil/${author.toLowerCase()}?mode=infos" target="_blank" class="xXx text-user topic-author">${author}</a>`;

        let topicDateSpan = element.children[3];
        let topicUrl = element.children[0].lastElementChild.getAttribute('href').trim();
        let topicDate = topicDateSpan.firstElementChild.textContent.trim();
        topicDateSpan.innerHTML = `<a href="${topicUrl}" class="xXx lien-jv">${topicDate}</a>`;
    }
    document.getElementsByClassName("topic-list topic-list-admin")[0].appendChild(element);
}

function topicExists(topics, element) {
    /*
    * Le temps de charger la page certains sujets peuvent se retrouver à la page précédente.
    * Cela peut provoquer des doublons à l'affichage.
    */
    let topicId = element.getAttribute("data-id");
    if (topicId === null) return false;
    return topics.some((elem) => elem.getAttribute("data-id") == topicId);
}

function isTopicBlacklisted(element) {
    if (!element.hasAttribute('data-id')) return true;

    let topicId = element.getAttribute('data-id');
    if (topicIdBlacklistMap.has(topicId)) return true;

    if (subjectBlacklistArray.length > 0) {
        let titleTag = element.getElementsByClassName("lien-jv topic-title");
        if (titleTag != undefined && titleTag.length > 0) {
            let title = titleTag[0].textContent;
            if (title.match(subjectsBlacklistReg)) return true;
        }
    }

    if (authorBlacklistArray.length > 0) {
        let authorTag = element.getElementsByClassName("topic-author");
        if (authorTag != undefined && authorTag.length > 0) {
            let author = authorTag[0].textContent.trim();
            if (author.match(authorsBlacklistReg)) {
                return true;
            }
        }
    }
    return false;
}

async function getPageContent(page) {
    let urlRegex = /(\/forums\/0-[0-9]+-0-1-0-)([0-9]+)(-0-.*)/i;
    let currentPath = window.location.pathname;
    var currentPageId = parseInt(urlRegex.exec(currentPath)[2]);

    let nextPageId = currentPageId + ((page - 1) * topicByPage);
    let nextPageUrl = currentPath.replace(urlRegex, `$1${nextPageId}$3`);

    const response = await fetch(nextPageUrl);
    return await response.text();
}

function addIgnoreButtons() {
    const forbiddenSvg = '<svg><symbol id="forbiddenlogo"><g><ellipse opacity="0.7" stroke-width="20" stroke="red" ry="70" rx="70" cy="80" cx="80" fill="none" /><line opacity="0.7" stroke="red" y2="37.39011" x2="122.60989" y1="122.60989" x1="37.39011" stroke-width="20" fill="none" /></g></symbol></svg>';
    document.querySelector('.topic-list.topic-list-admin').innerHTML += forbiddenSvg;

    let topics = getAllTopics(document);

    let header = topics[0];
    let spanHead = document.createElement("span");
    spanHead.setAttribute("class", "topic-count");
    spanHead.setAttribute("style", "width:1.75rem");
    header.appendChild(spanHead);

    topics.slice(1).forEach(function (topic) {
        let span = document.createElement("span");
        span.setAttribute("class", "topic-count");
        let topicId = topic.getAttribute('data-id');
        let topicSubject = topic.querySelector('span:nth-child(1) > a:nth-child(2)').textContent.trim();
        let anchor = document.createElement("a");
        anchor.setAttribute("href", "#");
        anchor.onclick = function () { addTopicIdBlacklist(topicId, topicSubject, true); refreshTopicIdKeys(); };
        anchor.innerHTML = '<svg viewBox="2 2 160 160" width="13"><use href="#forbiddenlogo"/></svg>';
        span.appendChild(anchor)
        topic.appendChild(span);
    });
}

function buildSettingPage() {
    let globalCss = '.deboucled-input{border:1px solid #d6d6d6;border-radius:3px;height:28px;}.deboucled-add-button{margin:0 0 1px 5px;background-color:#0050a6 !important;height:28px}.key:first-letter{text-transform:capitalize}.key{padding: 5px 5px 20px 0px; margin: 0px 5px 5px 0px;}#deboucled-subjectList{margin-top:14px}.deboucled-subject-button-delete-key,.deboucled-author-button-delete-key,.deboucled-topicid-button-delete-key,.deboucled-button-delete-sticker{color:#777;font:14px/100% arial,sans-serif;text-decoration:none;text-shadow:0 1px 0 #fff;top:5px;background:0 0;border:none;padding-top:1px;margin:0;cursor:pointer}body,input{font:12px/16px sans-serif}input[type=text]{border:1px solid #d2d2d2;padding:3px;margin-left:-2px}.deboucled-bloc{background-color:#eee;border-radius:0;color:#333;padding:15px 10px 20px 10px;width:auto}.deboucled-bloc-header{font-weight:700;color:#fff;background-color:#035ebf;border-radius:0;margin:0 0 0 0;padding:5px 12px;width:auto}#deboucled-show-exemple:hover{background:#515254;}#deboucled-exemple,#deboucled-exemple2{display:none;padding-top:7px}#deboucled-exemple.show,#deboucled-exemple2.show{display:block}';
    GM_addStyle(globalCss);

    let bgView = document.createElement('div');
    bgView.setAttribute("id", "deboucled-bg-view");
    bgView.setAttribute("style", "width:100%;height:100%;z-index:999998;background:transparent;overflow-y: auto;position:fixed");
    bgView.innerHTML = '<div></div>';
    document.body.prepend(bgView);
    document.getElementById('deboucled-bg-view').style.display = 'none';

    let deboucledHtml = "";
    deboucledHtml += '<div class="deboucled-bloc-header">BLACKLIST SUJETS</div>';
    deboucledHtml += '<div class="deboucled-bloc">';
    deboucledHtml += `<input type="text" id="deboucled-${entitySubject}-input-key" class="deboucled-input" placeholder="Mot-clé" >`;
    deboucledHtml += `<span id="deboucled-${entitySubject}-input-button" class="btn btn-actu-new-list-forum deboucled-add-button">Ajouter</span>`;
    deboucledHtml += '<br>';
    deboucledHtml += `<div id="deboucled-${entitySubject}List" style="margin-top:10px;"></div>`;
    deboucledHtml += '</div>';
    deboucledHtml += '<div class="deboucled-bloc-header">BLACKLIST AUTEURS</div>';
    deboucledHtml += '<div class="deboucled-bloc">';
    deboucledHtml += `<input type="text" id="deboucled-${entityAuthor}-input-key" class="deboucled-input" placeholder="Pseudo" >`;
    deboucledHtml += `<span id="deboucled-${entityAuthor}-input-button" class="btn btn-actu-new-list-forum deboucled-add-button">Ajouter</span>`;
    deboucledHtml += '<br>';
    deboucledHtml += `<div id="deboucled-${entityAuthor}List" style="margin-top:10px;"></div>`;
    deboucledHtml += '</div>';
    deboucledHtml += '<div class="deboucled-bloc-header">BLACKLIST TOPICS</div>';
    deboucledHtml += '<div class="deboucled-bloc">';
    deboucledHtml += `<input type="text" id="deboucled-${entityTopicId}-input-key" class="deboucled-input" placeholder="TopicId" >`;
    deboucledHtml += `<span id="deboucled-${entityTopicId}-input-button" class="btn btn-actu-new-list-forum deboucled-add-button">Ajouter</span>`;
    deboucledHtml += '<br>';
    deboucledHtml += `<div id="deboucled-${entityTopicId}List" style="margin-top:10px;"></div>`;
    deboucledHtml += '</div>';

    let deboucledView = document.createElement('div');
    deboucledView.setAttribute("id", "deboucled-view");
    deboucledView.setAttribute("style", "width:60%;margin-left:20%;top:110px;max-height:calc(100vh - 150px);overflow-y:auto;position:fixed;z-index:999999;background:transparent;border-style:solid;border-color:dimgray;border-radius:4px;border-width:thin;");
    deboucledView.innerHTML = deboucledHtml;
    document.body.prepend(deboucledView);
    document.getElementById('deboucled-view').style.display = 'none';

    buildSettingEntities();
}

function buildSettingEntities() {
    createAddEntityEvent(entitySubject, /^[ A-zÀ-ú0-9_@./#&+-\?\*]*$/i, function (key) { addEntityBlacklist(subjectBlacklistArray, key); refreshSubjectKeys(); });
    createAddEntityEvent(entityAuthor, /^[A-zÀ-ú0-9-_\[\]]*$/i, function (key) { addEntityBlacklist(authorBlacklistArray, key); refreshAuthorKeys(); });
    createAddEntityEvent(entityTopicId, /^[0-9]+$/i, function (key) { addTopicIdBlacklist(key, key, false); refreshTopicIdKeys(); });

    refreshSubjectKeys();
    refreshAuthorKeys();
    refreshTopicIdKeys();
}

function refreshSubjectKeys() {
    writeEntityKeys(entitySubject, subjectBlacklistArray, function (node) { removeEntityBlacklist(subjectBlacklistArray, node.innerHTML.replace(/<[^>]*>/g, '')); refreshSubjectKeys(); });
}

function refreshAuthorKeys() {
    writeEntityKeys(entityAuthor, authorBlacklistArray, function (node) { removeEntityBlacklist(authorBlacklistArray, node.innerHTML.replace(/<[^>]*>/g, '')); refreshAuthorKeys(); });
}

function refreshTopicIdKeys() {
    writeEntityKeys(entityTopicId, topicIdBlacklistMap, function (node) { removeTopicIdBlacklist(node.getAttribute('id').replace(/<[^>]*>/g, '')); refreshTopicIdKeys(); });
}

function createAddEntityEvent(entity, keyRegex, addCallback) {
    document.getElementById(`deboucled-${entity}-input-key`).addEventListener('keydown', function (event) {
        if (event.key != "Enter") return;
        let key = document.getElementById(`deboucled-${entity}-input-key`).value;
        if (key == "" || !key.match(keyRegex)) return;
        addCallback(key);
        document.getElementById(`deboucled-${entity}-input-key`).value = "";
    });

    document.getElementById(`deboucled-${entity}-input-button`).addEventListener('click', function (e) {
        let key = document.getElementById(`deboucled-${entity}-input-key`).value;
        if (key == "" || !key.match(keyRegex)) return;
        addCallback(key);
        document.getElementById(`deboucled-${entity}-input-key`).value = "";
        removeCallback(this.parentNode);
    });
}

function writeEntityKeys(entity, array, removeCallback) {
    let html = '<ul style="margin:0;margin-left:-2px;padding:0;list-style:none;">';
    array.forEach(function (value, key) {
        html += `<li class="key" id="${key}" style="border: 1px solid #d6d6d6;border-radius: 3px;display: inline-block;height:20px"><input type="submit" class="deboucled-${entity}-button-delete-key" value="X">${value}</li>`;
    });
    document.getElementById(`deboucled-${entity}List`).innerHTML = html + '</ul>';

    document.querySelectorAll(`.deboucled-${entity}-button-delete-key`).forEach(input => input.addEventListener('click', function (e) {
        removeCallback(this.parentNode);
    }));
}

function addSettingButton(firstLaunch) {
    let css = '.blinking { animation: blinker 1.5s linear 7; } @keyframes blinker { 50% { opacity: 0; }}';
    GM_addStyle(css);

    let optionButton = document.createElement("span");
    optionButton.innerHTML = `<span id="deboucled-option-button" style="margin-right:5px;min-width:80px" class="btn btn-actu-new-list-forum ${firstLaunch ? 'blinking' : ''}">Déboucled</span>`;
    document.getElementsByClassName('bloc-pre-right')[0].prepend(optionButton);
    document.getElementById('deboucled-option-button').addEventListener('click', function () {
        document.getElementById('deboucled-bg-view').style.display = 'block';
        document.getElementById('deboucled-view').style.display = 'block';
    });

    window.addEventListener('click', function (e) {
        if (!document.getElementById('deboucled-bg-view').contains(e.target)) return;
        document.getElementById('deboucled-bg-view').style.display = 'none';
        document.getElementById('deboucled-view').style.display = 'none';
    });
}

async function callMe() {
    let firstLaunch = initStorage();
    buildSettingPage();
    addSettingButton(firstLaunch);

    let topics = getAllTopics(document);
    if (topics.length === 0) return;
    topics.slice(1).forEach(function (topic) {
        if (isTopicBlacklisted(topic)) { removeTopic(topic); }
    });
    await fillTopics(topics);

    updateTopicsHeader();

    addIgnoreButtons();
}

callMe();

addEventListener("instantclick:newpage", callMe);
