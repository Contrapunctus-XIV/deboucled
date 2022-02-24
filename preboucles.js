
///////////////////////////////////////////////////////////////////////////////////////
// ANTI-BOUCLES
///////////////////////////////////////////////////////////////////////////////////////

function addPreBoucle(id, title, type, enabled, entities) {
    const preBoucle =
    {
        id: id,
        title: title,
        enabled: enabled,
        type: type,
        entities: entities
    };
    preBoucleArray.push(preBoucle);
}

function initPreBoucles() {
    addPreBoucle('boucledauthors', 'Pseudos boucled', entityAuthor, true,
        ['vinz', 'tacos', 'aneryl', 'flubus', 'kinahe', 'cacadetruire', 'pazeur', 'antoineforum', 'regimeducamp', 'jaxtaylor', 'procaine', 'antigwer', 'ademonstre',
            'abbath', 'bobbob', 'croustipeau', 'cigarette', 'cigarrette', 'deratiseur', 'descogentil', 'draco-choc', 'erlinghaland', 'grifforzer', 'gutkaiser',
            'hommecoussinet', 'huile7coude', 'huiledecoude', 'hyiga', 'jirenlechove', 'jvc-censure', 'jyren', 'kaguya', 'kane', 'danmartin', 'kaitokid', 'kiwayjohansson',
            'krimson', 'ptitcieux', 'stopcensure', 'galacticwars', 'cimerrisitas', 'supernominateur', 'wohaha', 'zeroavenir', 'windowsbot', 'ylliade', 'mirainikki',
            'leao', 'oael', 'surk', 'zemmourfinito', 'labelconfort', 'xinoz', 'zinzinabbath', 'rifson', 'garfield', 'qwertyofficial', 'vcxn', 'kallyuga', '[raven-_]',
            'cub*t*mp', 'tub*dut*mp', 'ordredutemple-', 'cubedeletan', 'vulvedutemp', 'pubdutemp', 'cubeduclan', 'cubedurang', 'cubedutime', 'clandutube', 'boucleur',
            'chouffomoting', 'pleinsdennuis', 'discord-gg-jvc', 'tc1873blanco', 'johny-wu', 'toyaf', 'troglonaute', 'jvxn', 'jvcxn', 'jvcartxna', 'bhlc13h18',
            'puissancedekhey', 'micah-bell', 'kmselection', 'arrowheads', 'freepop', 'lionseducteur', 'poechips', 'princessebean', 'stopbanent', 'espiruto',
            'cubarobusto', 'storev2', 'maikolinge', 'sanarik', 'encorebanni', 'gilbert733513', 'lydens', 'lionseul', 'lionseducteur', 'yarienapres4', 'timident',
            'lionbanni', 'liondoux', 'lionancestral', 'cubemalgache', 'charle*auvet', 'auvet*charle', 'nastyanass', 'op_tiffany', 'avortax3000', 'mikey3000',
            'maleau', 'maieau', 'sakuta', 'stopbanboucle', 'lerenoi*debxl', 'leblackprotrump', 'bannissement137', 'janullrich', 'marlounbrandon', 'tomcain',
            'liondepressif', 'coulisdepet', 'arminiya', 'risitasultime', 'puissance2khey', 'puissancedekhey', 'lickeurdepied', 'kyie_not_guilty', 'kyie_not_guilty',
            'varhastra11-10', 'facksyer', 'captaine-marvel', 'fieldm', 'styx666', 'atlantiquem', 'alettaoceanv1', 'alettaoceanv2', 'camillezizi', 'doomdeathworth',
            'beagie', 'fr2u', 'patisserie_adhd', 'finaleffect4', 'finaleffect5', 'aftereffects5', 'legamermagique', 'aaargh_0fan', 'allezmonpoutoc', 'lioncalvitie',
            'lixy_nocturne', 'serpe123', 'pazekip']);

    addPreBoucle('bots', 'BOTS', entityAuthor, false,
        ['tontonfouilleur', 'squeezie-issou', '2__marche', '2marche', 'deux-marche', 'anatoli_diatlov', 'soutien-rpc', 'lovemaze', 'leo2005', '1m54maisgrand', 'moussecerise',
            'marduweb', 'pinnochiotte', 'kallyuga', 'khalidfouhami', 'passion-gaming', 'dokurorider', 'discord-gg-jvc', 'leao', 'oael', 'singemechant', 'jenaimarreptnsh', 'vinz',
            'merci-macron99', 'poechips', 'avortax3000', 'avenoelsuce', 'mikey3000', 'giissadedesinge', 'glissadedesinge', 'quesais-je']);

    addPreBoucle('kj', 'Kikoo-Japs', entityAuthor, false,
        ['kj', 'kikoojap', 'kaji', 'kajy', 'trap', 'feet', 'waifu', 'kawai', 'sissy', 'crucifist01', '_rsaaidesoutien', '-pazifion-', '[arbitraire]', '[aleatoire]', '[arnak]', '[nft]',
            '[pink]panther', '[raven-_]', '[-]raven[-]', 'aaargh_0degat', 'aaaarumi', 'aaargh_0knuckle', 'akambi', 'albatarrrrr', 'alcyonae', 'aleatoire423', 'alorspotetre',
            'amiamore', 'animexpert_01', 'aniviathefrozen', 'asnium', 'assnium', 'asniumbandant', 'ass2trefle', 'azerlax', 'bakjou', 'bbclove', 'beckycringeintp', 'beckyguwu',
            'bigredin', 'botanica', 'bousedekheyette', 'cage-i', 'celestinhoiii', 'charlesbuk', 'chatdutieks', 'cheuns', 'chucklaplante', 'chunchunmaru', 'chxrlotte', 'dankie',
            'deadwapanese', 'deratisubuleryl', 'dokurorider', 'dqasdqdsqsdv', 'dqddqeaededzea', 'draco-choc', 'e-n-a', 'ecrevisse6', 'ecrevisse10', 'el_citrone', 'elementarydesu', 'elgoldfag',
            'elilalilalulu', 'emptydudes', 'erikawaii', 'esclave_ankha', 'euhpile', 'evabien', 'femboy', 'fiondeky0ko', 'fiondekyoko', 'fragiluxur', 'fragilustucru', 'fukujuuu',
            'fullapesinge', 'furumia', 'gallys7', 'gamonstrebanni', 'gawr_gura', 'germanqueen', 'gio849', 'gockwach', 'goiemique', 'gommeblanc', 'gommebianc', 'goreprincess',
            'grifforzer', 'guiguifdp', 'haruko', 'heimtathurs', 'hollowness', 'hunterjahimees', 'hyacinthos', 'iamnokhey', 'icefairy', 'incognitosecret', 'incel2sur10ette',
            'inostranet', 'itoshirin', 'izumi_sagiri', 'jailedroibordel', 'jean_yahya', 'jeunessehonneur', 'jiva-chan', 'johanneslekhey', 'jteclaquelcul', 'jus_2_beat', 'jyren', 'kai-kod',
            'kane', 'kawashimaurara', 'kesshouban', 'khaaal', 'kikoojapfangeux', 'kikoojapsordide', 'kirakira_', 'kiyoe', 'klaosuen', 'komisan', 'kyokotoshino', 'labynocle', 'laffey', 'lalena',
            'lastingchild', 'le*nettoyeur', 'lenticulaire', 'lighthalzen', 'lisabp', 'lizslennus', 'locuskitagawa', 'lorkhaj89', 'lostwar', 'louisenadjeda', 'luna-blu', 'lysae',
            'maeligg', 'maneirei', 'maneiret', 'margie_pkmn', 'marreduban', 'melkhor-dono', 'meowni', 'meragi', 'millefi', 'minatohiraishi', 'minseo', 'misakino_kukuru',
            'missmonochrome', 'mister_swing', 'miuyaaa', 'mukbang', 'mxthy', 'nancy*tomoe', 'nettoyeur2gland', 'nyamikyoto', 'nyctophobie', 'nysaee', 'okachinami', 'oneponey',
            'otokodarashi', 'ouaiskiffkiff', 'parars', 'pasteque_bannie', 'pikal2', 'pink-and-cute', 'piratedugange', 'plakivado99', 'pollitorico', 'pollorico', 'pomer',
            'potichienchien', 'porteduforum', 'pougo', 'princessebean', 'qajou', 'raie-menthalo', 'ranze', 'ranzette', 'rapasducuck', 'raven-50', 'reacriz', 'rimurutempest', 'rinesa',
            'riokanol', 'ronisiaa', 'sahary', 'sakuta', 'sashimimaruu', 'secalydesudesu', 'sereineptiote', 'sinfulweeb', 'shillzificator', 'shintamaru', 'slimeti2', 'snuffyherisson',
            'solio', 'sosca', 'soup71', 'sruoxo', 'steinhausen', 'steinhorst', 'steinherz', 'superoksuper', 'supertemmies', 'suyi', 'teslakite', 'thehatkid', 'tobiichi', 'toyaf',
            'tropfandetoi', 'twice-the-love', 'uchidato', 'uwo', 'venulon', 'violeteverdeen', 'viiviiiix', 'vivearl', 'vivrayman3', 'waifupeach', 'wainwright', 'wepper', 'whitepantyhose',
            'xeenay', 'yameyakuna', 'yhria', 'ylliade', 'yofie', 'yojong', 'yokohama', 'yoshi_v', 'yoshiyosh', 'yotsuyamk', 'yuhina', 'yumiaaaa', 'zerotwo-', 'biancalapeste',
            'luminadivina', 'pourquoipas-', 'gommebleu', 'kinojv', 'aidessoutien95', 'gladys_bonheur', 'asenir', 'pyj2sur10', 'petitebouche', 'hunterchasseur',
            'kud-chan', 'lastral', 'kamui_bungee', '[explo]', '[ks]lilly_satou', 'fimi_', 'askeladden41', 'adhd-kun', 'edinu', 'miseron', 'couverturent', 'yuuthirohito',
            'bisexwouale', 'turbincel2sur10', 'aaargh_0fan', 'loulina', 'minatohiraishin', 'feu_blanc', 'notready69', 'steinheir']);

    addPreBoucle('insane', 'Zinzins', entityAuthor, false,
        ['vincenfreeman', 'aneryl', 'flubus', 'kinahe', 'leao', 'oael', 'vinz', 'vcxn', 'tacos', 'lesyeuxduforum', 'cigarette', 'cigarrette', 'deratiseur', 'windowsbot',
            'arenyl', 'zemouroide', 'jefaisunlive', 'cub*t*mp', 'tub*dut*mp', 'ordredutemple-', 'cubedeletan', 'vulvedutemp', 'pubdutemp', 'cubeduclan', 'cubedurang',
            'cubedutime', 'clandutube', 'boucleur', 'stonegiant', 'cacadetruire', 'pazeur', 'antoineforum', 'jaxtaylor', 'procaine', 'antigwer', 'ademonstre', 'croustipeau',
            'draco-choc', 'grifforzer', 'hommecoussinet', 'kiwayjohansson', 'surk', 'zeroavenir', 'huile7coude', 'huiledecoude', 'aklaros', 'britneysperm', 'avortax3000',
            'avenoelsuce', 'stopbanboucle', 'pump101', 'fessesdefemme', 'janullrich', 'lans6', 'lans28', 'djanoug', 'le0tout', 'coulisdepet', 'leprofesor', 'vincentfreman',
            'facksyer', 'multoo', 'sonicfan18', 'rayonceleste', 'ayaacescouilles', 'kdayone', 'camillezizi', 'ketchupent', 'zer0tonin', 'beagie', 'tahbik', 'bisexwouale',
            'vulcain_rageux', 'xjahxsehx', 'jeunealgerien', 'soniclelion', 'jdilla', 'groscharclo', 'lultimm', 'lioncalvitie', 'finaleffect4', 'finaleffect5', 'aftereffects5',
            'souritimah', 'pazekip', 'blaguueritor', 'mustafarrr']);

    addPreBoucle('aw', 'AW', entityAuthor, false,
        ['peore', '[kj]', 'kheyette', 'jojolechatgris', 'lecelestinsympa', 'suprakheyette', 'cheuns', 'lapetitegouine', 'kanou43', 'breod', 'titanlevrette', 'pump101', 'dandelotte',
            'pandore-', 'regimeducamp', 'oneponey', 'amandadu42', 'nabilis', 'sereinepyj', 'frimeuze', 'naomi_sama', 'rousse_radieuse', 'parvatikheyette', 'contedefees',
            'saintepasteque', 'venus_noire', 'incel2sur10ette', 'sereineptiote', 'amiamore', 'esalamy69', 'multoo', 'seuleavie', 'camillezizi', 'rephya', 'pourquoipas-',
            'miserette', 'anyataylorjoie', 'ninouchedu07', 'miss-ninaa', 'watikroko', 'loulina', 'damesanjo', 'chalumeau2', '-henriette-', 'paulinephoto']);


    addPreBoucle('popularboucles', 'Boucles connues', entitySubject, true,
        ['ces photos putain', 'yannick*tour eiffel', 'metisseur22cm', 'midsommar', 'eau*pasteque', 'celestin tu', 'l\'échéance est tombée', 'ai-je l\'air sympathique',
            'pour avoir une copine en', 'no jump', 'john cena*mort', 'john cena*victime', 'par le corps masculin', 'dicaprio au lidl', '2 sauces interdites',
            'allemand fou detruit son clavier', 'ma caissiere', 'traduisez en anglais', 'sauce sonic', 'seth gueko', 'gros gamos allemand', 'eau blanche', 'sss sache que',
            'genre de mec', 'dwayne johnson', 'charles auvet', 'charle auvet', 'now cum', 'let\'s fucking go', 'boule blanche dans la mozarella', 'crocodile chelou',
            'forumeur le plus eclatax', 'galet de poche', 'kebab breton', 'kebeb breton', 'des chances font du bruits et foutent le bordel', 'femmes vulgaires au lit',
            'rockeuse dans l\'âme', 'pris une audi a1', 'fortune d\'arthur', 'renault sort son*suv', 'renault présente son*suv', 'japonaise*cave*93', 'embauché chez microsoft',
            'chié durant l\'accouchement', 'reddit entier sur un mmo', 'rizantrasse', 'chinois dans un wok', 'ans de spam sur le 18-25', 'gamecube est la pire console',
            'famille bourgeoise est incroyable', '300 jeux switch', 'je suis web dev', 'lara croft en legging', 'm\'avez vous déjà vu', 'jdg*youtube m\'ennuie',
            'annonce son nouveau suv', 'présente son nouveau suv', 'hommes*qui font des métiers de bureau', 'si tu me trompes je te pardonne', '2m08', 'ancien complotiste',
            'ami antivax est mort', 'disent*boucle*topics', 'volé un topic', 'do you know pomper l\'eau', 'cloudfare*antoineforum', 'cloudflare*antoineforum',
            'action*antoineforum', 'antoineforum*ruine', 'dextre*antoineforum', 'frère*atteint de trisomie', 'khey*cuve de poulets', 'mais j’ai menti sur mon job',
            'évolution*style vestimentaire', 'meufs*haute savoie', 'hanouna et tpmp explosent de rire', 'honte*voile', 'sarah fraisou*nue', 'bon...', 'la boucle jancovici',
            'merde si t\'es pas millionnaire', 'millionnaire avec internet t\'es une merde', 'mecs*jeans*slim*skinny', 'classe de france en 2050', 'vole*meuf*tinder',
            'game one dans la boucle', 'wallah*wesh*sur ma mère*gros*chaaaud*oubli du*en dirait*', 'gilles verdez*el con*gosse', 'arthur*gilles verdez*el con', 'arthur*el con',
            'cette illusion d\'optique', 'sdf*degueulasse', 'ressemble*rogue', 'bol*4100', 'cereales*4100', 'cereales*4k', '4100*cereales', '4k*cereales',
            'aletta ocean*nietzschéenne', 'aletta ocean*surfemme', 'filles aiment ce style de mec', 'cap*chiottes*arteres', 'jeunes*passions*bancales*abrutissantes',
            'fermez*dubstep', 'fake jdg', 'jdg leader price', 'fake joueur du grenier', 'jdg eco+', 'jdg du pauvre', 'joueur du grenier leader price', 'joueur du grenier inférieur',
            'joueur du grenier lidl', 'jdg lidl', 'joueur du grenier du pauvre', 'adolescent*71*balles*ak-47', 'allez jamais au parc asterix', 'davidlafarge eco+',
            'mr toc du pauvre', 'chef otaku du pauvre', 'video inedite*joueur du grenier', 'rare*ancien*jdg', 'video*inedite*jdg', 'astronogeek du pauvre',
            '300 jeux nintendo switch', 'antoine daniel*baghera*ponce*angle droit*étoiles*littlebigwhale', 'marie laforet', 'char*bellecour']);

    addPreBoucle('covid19', 'Covid19', entitySubject, false,
        ['covid*', 'corona*', 'virus', 'gestes barriere', 'geste barriere', '*vaccin*', '*vax*', 'variant*', 'pfizer', 'moderna', 'sanitaire', 'dose*', '*confinement*',
            'reconfine*', '*pass', 'vizio', 'schwab', 'veran', 'castex', 'pcr', 'antigenique', 'thrombose*', 'oracle', 'omicron', 'cas contact', 'hospitalisations',
            'taux d\'incidence', 'myocardite*', 'couvre*feu', 'wuhan', 'quarantaine', 'raoult', 'pass vaccinal', 'neocov']);

    addPreBoucle('politic', 'Politique', entitySubject, false,
        ['*zemmour*', 'le z', 'du z', 'pro z', 'pro-z', 'z0zz', 'zozz', 'knafo', 'philippot', 'philipot', 'mlp', 'le pen', 'lepen', 'macron', 'cnews', 'asselineau',
            'melenchon', 'lfi', 'france insoumise', 'rn', 'fn', 'rassemblement national', 'front national', 'republique en marche', 'la reconquete', 'fillon', 'veran',
            'lrem', 'messiha', 'pecresse', 'xavier bertrand', 'yannick jadot', 'hidalgo', 'bruno lemaire', 'bruno le maire', 'castex', 'darmanin', 'sarkozy', 'sarko',
            'taubira', 'ornellas', 'tatiana ventose', 'afghan*', 'ciotti', 'greg toussaint', 'livre noir', 'naulleau', 'rochedy', 'taliban*', 'thais', 'stanislas rigault',
            'stanislas', 'generation z', 'corbiere', 'nathalie arthaud', 'odoul', 'collard', 'jancovici']);

    addPreBoucle('deviant', 'Déviances', entitySubject, false,
        ['feet*', 'trap*', 'kj', 'adf', 'papa du forum', 'blacked', 'cuck', 'reine fatima', 'reine popo', 'shemale*', 'domina', 'fetichiste', 'fetichisme', 'mym',
            'onlyfan', 'onlyfans', 'sissy*', 'trans', 'transexuel', 'transsexuel', 'transexuelle', 'transsexuelle', 'lgbt*', 'm2f', 'f2m', 'asmr', 'trav', 'travelo',
            'femdom', 'cage de chastete', 'rimjob', 'chaturbate', 'salazar', 'sugar daddy', 'woodman', 'waifu', 'moneyslave', 'bbc', 'plug anal', 'edging', 'femboy*',
            'desu', 'desu~', ':desu:', 'twink*', 'grindr', 'scat', 'scato', 'uro']);

    addPreBoucle('socials', 'Réseaux sociaux', entitySubject, false,
        ['tinder', 'twitter', 'facebook', 'tik*tok', 'adopte un mec', 'meetic', 'badoo', 'okcupid', 'bumble', 'happn', 'insta', 'instagram', 'snapchat', 'mym',
            'onlyfan', 'onlyfans', 'grindr', 'reddit']);

    addPreBoucle('youtube', 'Youtube', entitySubject, false,
        ['youtube', 'feldup', 'norman', 'cyprien', 'natoo', 'kemar', 'jdg', 'joueur du grenier', 'amixem', 'squeezie', 'rire jaune', 'kevin tran', 'michou', 'mcfly',
            'carlito', 'inoxtag', 'seblafrite', 'joyca', 'julien chieze', 'kyan khojandi', 'lena situations', 'charlie danger', 'florianonair', 'bench', 'bigflo', 'corda',
            'fastgoodcuisine', 'julia', 'otaku', 'papacito', 'stephane edouard', 'nikocado', 'logan paul', 'aline*dessine']);

    addPreBoucle('kiddy', 'Immature', entitySubject, false,
        ['reacprout*', 'prout', 'caca', 'cacaprout', 'pipi', 'chibrax', 'post ou', 'postoo', 'pose toucan', 'chibre']);

    addPreBoucle('hatred', 'Haineux', entitySubject, false,
        ['facho*', 'chofs', 'chofa*', 'qlf', 'paz', 'pazification', 'pazifie', 's2s', 'gwer*', 'raciste*', 'hagar', 'hagra', '🐊', '🐷', 'bassem', 'sadek', 'les porcs',
            'hitler', 'nazi*', 'mussolini', 'staline', 'negre*', 'bougnoul*', 'youtre*', 'dz', 'ekip', 'cefran', 'babtou*', 'toubab*']);

    addPreBoucle('girls', 'Femmes', entitySubject, false,
        ['meuf', 'fille', 'femme', '*/10', '*/20', 'cul', 'sein*', 'boob*', 'bzez', '95e', 'kheyette*', 'colombienne', 'emma roberts', 'estelle redpill', 'lena situations',
            'charlie danger', 'natoo', 'tatiana ventose', 'vedovelli', 'abella danger', 'agathe auprou*', 'amel bent', 'amouranth', 'ana de armas', 'copine', 'crush', 'cuck*',
            'cunni*', 'dua lipa', 'fiak', 'gaelle', 'incel*', 'julia', 'levrette', 'milf*', 'nude*', 'porno', 'simp', 'simps', 'vagin', 'pinkgeek', 'pink geek', 'aline*dessine',
            'gourgandine']);

    addPreBoucle('rap', 'Rap', entitySubject, false,
        ['rap', 'rappeur*', 'rappeuse*', 'maes', 'lacrim', 'orelsan', 'ninho', 'ziak', 'gambi', 'gazo', 'kalash', 'niska', 'rohff', 'booba', 'b2o', 'kaaris', 'pnl', 'qlf',
            'larse', 'vald', 'mister you', 'eminem', 'wiz khalifa', 'drake', 'xxxtentacion', 'nba youngboy', 'rick ross', 'future', 'travis scott', 'tyga', 'kid cudi', 'pop smoke',
            'run the jewels', 'nas', 'tupac', '2pac', 'cardi b', 'kendrick lamar', 'lil wayne', 'nicki minaj', 'jul', 'freeze corleone', 'damso', 'the weekend', 'lil uzi',
            'fianso', 'kery james']);

    addPreBoucle('porn', 'Pornographie', entitySubject, false,
        ['porn*', 'p0rn*', 'pron', 'blacked', 'mym', 'onlyfan', 'onlyfans', 'rimjob', 'chaturbate', 'abigail mac', 'addie andrews', 'agatha vega', 'aidra fox', 'aletta ocean', 'alex clark',
            'alex grey', 'alexas morgan', 'alina lopez', 'amber moore', 'anissa kate', 'aria sky', 'ariana marie', 'august ames', 'autumn falls', 'bailey mattingly', 'bella rolland',
            'blake blossom', 'blake eden', 'bonnie kinz', 'bree daniels', 'brett rossi', 'brittanya razavi', 'celeste', 'dani daniels', 'darcie dolce', 'dillion harper', 'ella hughes',
            'elsa jean', 'emily addison', 'emily willis', 'emma mae', 'eva lovia', 'foxy di', 'gabbie carter', 'gianna dior', 'hayden winters', 'hyley winters', 'janice griffith',
            'jenna jameson', 'jia lissa', 'josephine jackson', 'kayla kayden', 'kayley gunner', 'keisha grey', 'kendra sunderland', 'kenna james', 'kenzie anne', 'kiera winters',
            'lacy lennon', 'lana rhoades', 'leah gotti', 'lena paul', 'lexi belle', 'lily ivy', 'lily love', 'little caprice', 'liya silver', 'lola myluv', 'lucy li', 'luxury girl',
            'madi meadows', 'madison ivy', 'malena morgan', 'megan salinas', 'mia malkova', 'mia melano', 'michaela isizzu', 'molly jane', 'nadya nabakova', 'nancy ace', 'adriana chechik',
            'natalia starr', 'nicole aniston', 'octokuro', 'peta jensen', 'red fox', 'riley anne', 'riley reid', 'riley reyd', 'ryan ryans', 'sabrina maree', 'samantha saint',
            'scarlett hampton', 'serena becker', 'shae summers', 'simonn', 'skye blue', 'sofi ryan', 'sophia leone', 'stella cox', 'sunny leone', 'sybil a', 'tasha reign',
            'tiffany thompson', 'jynx maze', 'tiny teen', 'tommie jo', 'tori black', 'traci lords', 'tru kait', 'victoria lynn', 'viola bailey', 'whitney westgate', 'woodman',
            'bbc', 'valentina nappi', 'angela white']);

    addPreBoucle('religion', 'Religion', entitySubject, false,
        ['allah', 'jesus', 'christ*', 'juif*', 'chretien*', 'musulman*', 'islam*', 'judaisme', 'muslim*', 'burka', 'burqa', 'priere', 'dieu', 'religion', 'dhimmi', 'ramadan']);

    addPreBoucle('crypto', 'Cryptomonnaies', entitySubject, false,
        ['*crypto*', 'blockchain', 'mineur', 'mining', 'minage', 'nft', 'wallet', 'satoshi', 'bitcoin', 'btc', 'cardano', 'shitcoin', 'ethereum', 'monero', 'libra', 'coinbase',
            'eth', 'ripple', 'litecoin', 'tether', 'eos', 'binance', 'tezos', 'to the moon', 'to ze moon', 'bat', 'dogecoin', 'zynecoin', 'kcs', 'fee', 'fees', 'all in', 'kucoin',
            'refill', 'bullrun', 'shiba inu']);

    addPreBoucle('geopolitic', 'Géopolitique', entitySubject, false,
        ['ww3', 'ww 3', 'world war 3', 'ukrain*', 'kiev', 'poutine', 'russe', 'russes', 'russie', '3gm', 'otan', 'kremlin', 'troisieme guerre mondiale', '3e guerre mondiale',
            '3eme guerre mondiale', 'nwo', 'new world order']);

    loadPreBouclesStatuses();
}

function isEntityInPreboucles(entityType, entity) {
    let preBoucles = preBoucleArray.filter(pb => pb.enabled && pb.type === entityType).flatMap(pb => pb.entities);
    const entityLower = entity.toLowerCase();
    const entities = [entityLower, `${entityLower}*`, `*${entityLower}`, `*${entityLower}*`];
    return entities.some(e => preBoucles.includes(e));
}

function makeVinzSubjectPure(str) {
    // normalize boucles string and make them as "pure" as possible (also improve performances)
    str = normalizeValue(str).trim();
    str = str.normalizeCompatibility(); // Vinz petit malin tu croyais pouvoir m'échapper ?
    str = replaceNumbersSimilarToCharacters(str);
    str = removeRepeatingCharacters(str);
    return str;
}

function initVinzBoucles() {
    vinzBoucleArray = ['ces photos putain', '"célestin tu-" "ferme-là"', 'yannick, 19 ans, se jette du haut de la tour eiffel', '"j\'appelle metisseur22cm a la barre"', 'si on rajoute 10% d\'eau à une pastèque qui en contient 90%...', '[dilemme] 100 000 000 000 000€ mais...', 'il est bien midsommar ?', 'aya cette hallucination auditive bordel', '(photo) je me suis gréfé un zizi métallique', '"i call metisseur22cm a la bar"', '[dilemme] 100 00000 000 000 000 000 000 000€ à condition...', '"célestin tu-" "shut up"', 'yaniq, dix9 ans, se jette du haut de la tour eiffel', 'is it good midsommar ??', 'si on rajuste dix% d\'o in a pasték qui en conti11 quatrevingdix%...', 'but if we put 10% de water à une pastque qui en conti1 90%...', '[dilemme] 100 000 000 000 000€ sauf...', 'la tristesse de ces images bordel', 'yanique, se suicide haut tour eifel'];

    vinzBoucleMessageArray = ['ouvrez vos paupières', 'ouvrez vos gros cons', 'il tire des lasers', 'je peux m\'autosucer', 'metisseur22cm à la barre', 'tu habites dans cette villa', 'vous engagez de les yeux que ne faire pour le regarder malcolm', 'célestin tu', 'ferme-la', 'yannick', 'moi au moins j\'ai une famille', 'film d\'horreur cliché de jumpscares', 'la pastèque se transformerait', 'do you know pomper l’eau', 'you got to pomper l’eau'];

    vinzBoucleArray.forEach((val, index) => {
        vinzBoucleArray[index] = makeVinzSubjectPure(val);
    });

    vinzBoucleMessageArray.forEach((val, index) => {
        vinzBoucleMessageArray[index] = normalizeValue(val);
    });
}

function initShadowent() {
    /*
    const preShadowent = ['U3RvbmVHaWFudA==', 'QW5lcnls', 'Rmx1YnVz', 'bGVhbw==', 'dmlueg==', 'dGFjb3M=', 'a2luYWhl', 'TGVzWWV1eER1Rm9ydW0=', 'Y2lnYXJldHRl', 'd2luZG93c2JvdA==', 'YXJlbnls', 'emVtb3Vyb2lkZQ==', 'amVmYWlzdW5saXZl', 'dHViZWR1dGVtcA==', 'Y3ViZWR1dGVtcA==', 'Y3ViZWR1Y2xhbg==', 'Y3ViZWR1dGFtcA=='];
    preShadowent.forEach((s) => shadowent.push(window.atob(s).trim().toLowerCase()));
    */
    //console.log('shadowent : %o', shadowent);
}

