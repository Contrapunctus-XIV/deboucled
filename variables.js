
///////////////////////////////////////////////////////////////////////////////////////
// VARIABLES
///////////////////////////////////////////////////////////////////////////////////////

const defaultTopicCount = 25;

const entitySubject = 'subject';
const entityAuthor = 'author';
const entityTopicId = 'topicid';

const jvarchiveUrl = 'https://jvarchive.com';

const deboucledBackendUrl = 'https://deboucled.jvflux.fr';
const youtubeBlacklistUrl = `${deboucledBackendUrl}/blacklisted-youtube-profiles-v2.json`;
const prebouclesDataUrl = `${deboucledBackendUrl}/deboucled-preboucles.json`;

const youtubeBlacklistRefreshExpire = 4;
const prebouclesRefreshExpire = 24;

let subjectBlacklistArray = [];
let authorBlacklistArray = [];
let topicIdBlacklistMap = new Map();
let subjectsBlacklistReg;
let authorsBlacklistReg;

let topicIdWhitelistArray = [];
let shadowent = [];

let youtubeBlacklistArray = [];
let youtubeBlacklistReg;

let pocTopicMap = new Map();
let topicAuthorMap = new Map();

let hiddenTotalTopics = 0;
let hiddenSubjects = 0;
let hiddenTopicsIds = 0;
let hiddenMessages = 0;
let hiddenAuthors = 0;
let hiddenPrivateMessages = 0;
let hiddenSpammers = 0;
let hiddenAuthorArray = new Set();
let deboucledTopicStatsMap = new Map();

let preBoucleArray = [];
let preBoucleSubjectEnabledArray;
let preBoucleAuthorEnabledArray;
let vinzBoucleArray = [];
let vinzBoucleMessageArray = [];

let matchedSubjects = new Map();
let matchedAuthors = new Map();
let matchedTopics = new Map();

let stopHighlightModeratedTopics = false;
let moderatedTopics = new Map();
let sortModeSubject = 0;
let sortModeAuthor = 0;
let sortModeTopicId = 0;

let disabledFilteringForumSet = new Set();

let userPseudo = undefined;
let currentTopicId = undefined;
let forumFilteringIsDisabled = false;

const domParser = new DOMParser();

const deboucledPseudos = ['rand0max', 'deboucled'];

