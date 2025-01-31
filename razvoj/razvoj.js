function konvertujUCirilicu(text) {
    let initialMap = {
        "A": "А",
        "B": "Б",
        "V": "В",
        "G": "Г",
        "D": "Д",
        "Đ": "Ђ",
        "Ð": "Ђ",
        "ᴆ": "Ђ",
        "DJ": "Ђ",
        "DЈ": "Ђ", // D + cyrillic J
        "Dj": "Ђ",
        "Dј": "Ђ", // D + cyrillic j
        "E": "Е",
        "Ž": "Ж",
        "Ž": "Ж", // Z with caron
        "Z": "З",
        "I": "И",
        "J": "Ј",
        "K": "К",
        "L": "Л",
        "LJ": "Љ",
        "LЈ": "Љ", // L + cyrillic J
        "Ǉ": "Љ",
        "Lj": "Љ",
        "Lј": "Љ", // L + cyrillic j
        "ǈ": "Љ",
        "M": "М",
        "N": "Н",
        "NJ": "Њ",
        "NЈ": "Њ", // N + cyrillic J
        "Ǌ": "Њ",
        "Nj": "Њ",
        "Nј": "Њ", // N + cyrillic j
        "ǋ": "Њ",
        "O": "О",
        "P": "П",
        "R": "Р",
        "S": "С",
        "T": "Т",
        "Ć": "Ћ",
        "Ć": "Ћ", // C with acute accent
        "U": "У",
        "F": "Ф",
        "H": "Х",
        "C": "Ц",
        "Č": "Ч",
        "Č": "Ч", // C with caron
        "DŽ": "Џ",
        "Ǆ": "Џ",
        "DŽ": "Џ", // D + Z with caron
        "DZ": "Џ",
        "Dž": "Џ",
        "ǅ": "Џ",
        "Dž": "Џ", // D + z with caron
        "Dz": "Џ",
        "Š": "Ш",
        "Š": "Ш", // S with caron
        "a": "а",
        "æ": "ае",
        "b": "б",
        "v": "в",
        "g": "г",
        "d": "д",
        "đ": "ђ",
        "dj": "ђ",
        "dј": "ђ", // d + cyrillic j
        "e": "е",
        "ž": "ж",
        "ž": "ж", // z with caron
        "z": "з",
        "i": "и",
        "ĳ": "иј",
        "j": "ј",
        "k": "к",
        "l": "л",
        "lj": "љ",
        "lј": "љ", // l + cyrillic j
        "ǉ": "љ",
        "m": "м",
        "n": "н",
        "nj": "њ",
        "nј": "њ", // n + cyrillic j
        "ǌ": "њ",
        "o": "о",
        "œ": "ое",
        "p": "п",
        "r": "р",
        "s": "с",
        "ﬆ": "ст",
        "t": "т",
        "ć": "ћ",
        "ć": "ћ", // c with acute accent
        "u": "у",
        "f": "ф",
        "ﬁ": "фи",
        "ﬂ": "фл",
        "h": "х",
        "c": "ц",
        "č": "ч",
        "č": "ч", // c with caron
        "dž": "џ",
        "ǆ": "џ",
        "dž": "џ", // d + z with caron
        "dz": "џ",
        "š": "ш",
        "š": "ш", // s with caron
    };

    var serbianWordsWithForeignCharacterCombinations = [
        "alchajmer",
        "ammar",
        "amss",
        "aparthejd",
        "ddor",
        "dss",
        "dvadesettrog",
        "epp",
        "fss",
        "gss",
        "interreakc",
        "interresor",
        "izzzdiovns",
        "kss",
        "llsls",
        "mmf",
        "naddu",
        "natha",
        "natho",
        "ommetar",
        "penthaus",
        "poddirektor",
        "poddisciplin",
        "poddomen",
        "poddres",
        "posthumn",
        "posttrans",
        "posttraum",
        "pothodni",
        "pothranj",
        "preddijabetes",
        "prethod",
        "ptt",
        "sbb",
        "sdss",
        "ssp",
        "ssrnj",
        "sssr",
        "superračun",
        "šopingholi",
        "tass",
        "transseks",
        "transsibir",
        "tridesettrog",
        "uppr",
        "vannastav",
    ];

    var commonForeignWords = [
        "administration",
        "adobe",
        "advanced",
        "advertising",
        "autocad",
        "bitcoin",
        "book",
        "boot",
        "cancel",
        "canon",
        "carlsberg",
        "cisco",
        "clio",
        "cloud",
        "coca-col",
        "cookie",
        "cooking",
        "cool",
        "covid",
        "dacia",
        "default",
        "develop",
        "e-mail",
        "edge",
        "email",
        "emoji",
        "english",
        "facebook",
        "fashion",
        "food",
        "foundation",
        "gaming",
        "gmail",
        "gmt",
        "good",
        "google",
        "hdmi",
        "image",
        "iphon",
        "ipod",
        "javascript",
        "jazeera",
        "joomla",
        "league",
        "like",
        "linkedin",
        "look",
        "macbook",
        "mail",
        "manager",
        "maps",
        "mastercard",
        "mercator",
        "microsoft",
        "mitsubishi",
        "notebook",
        "nvidia",
        "online",
        "outlook",
        "panasonic",
        "pdf",
        "peugeot",
        "podcast",
        "postpaid",
        "printscreen",
        "procredit",
        "project",
        "punk",
        "renault",
        "rock",
        "screenshot",
        "seen",
        "selfie",
        "share",
        "shift",
        "shop",
        "smartphone",
        "space",
        "steam",
        "stream",
        "subscrib",
        "timeout",
        "tool",
        "topic",
        "trailer",
        "ufc",
        "unicredit",
        "username",
        "viber",
    ];

    var wholeForeignWords = [
        "air",
        "alpha",
        "and",
        "back",
        "bitcoin",
        "celebrities",
        "conditions",
        "co2",
        "cpu",
        "creative",
        "disclaimer",
        "dj",
        "electronics",
        "fresh",
        "fun",
        "geographic",
        "gmbh",
        "h2o",
        "hair",
        "have",
        "home",
        "ii",
        "iii",
        "idj",
        "idjtv",
        "life",
        "live",
        "login",
        "national",
        "made",
        "makeup",
        "must",
        "previous",
        "public",
        "reserved",
        "terms",
        "url",
        "vii",
        "viii",
        "visa",
    ];

    var foreignCharacterCombinations = [
        'q',
        'w',
        'x',
        'y',
        'ü',
        'ö',
        'ä',
        'ø',
        'ß',
        '&',
        '@',
        '#',
        'bb',
        'cc',
        'dd',
        'ff',
        'gg',
        'hh',
        'kk',
        'll',
        'mm',
        'nn',
        'pp',
        'rr',
        'ss',
        'tt',
        'zz',
        'ch',
        'gh',
        'th',
        '\'s',
        '\'t',
        '.com',
        '.net',
        '.info',
        '.rs',
        '.org',
        '©',
        '®',
        '™',
    ];

    var digraphExceptions = {
        "dj": [
            "adjektiv",
            "adjunkt",
            "autodjel",
            "bazdje",
            "bdje",
            "bezdje",
            "blijedje",
            "bludje",
            "bridjе",
            "vidjel",
            "vidjet",
            "vindjakn",
            "višenedje",
            "vrijedje",
            "gdje",
            "gudje",
            "gdjir",
            "daždje",
            "dvonedje",
            "devetonedje",
            "desetonedje",
            "djb",
            "djeva",
            "djevi",
            "djevo",
            "djed",
            "djejstv",
            "djel",
            "djenem",
            "djeneš",
            //"djene" rare (+ Дјене (town)), but it would colide with ђене-ђене, ђеневљанка, ђенерал итд.
            "djenu",
            "djet",
            "djec",
            "dječ",
            "djuar",
            "djubison",
            "djubouz",
            "djuer",
            "djui",
            // "djuk", djuk (engl. Duke) косило би се нпр. са Djukanović
            "djuks",
            "djulej",
            "djumars",
            "djupont",
            "djurant",
            "djusenberi",
            "djuharst",
            "djuherst",
            "dovdje",
            "dogrdje",
            "dodjel",
            "drvodje",
            "drugdje",
            "elektrosnabdje",
            "žudje",
            "zabludje",
            "zavidje",
            "zavrijedje",
            "zagudje",
            "zadjev",
            "zadjen",
            "zalebdje",
            "zaludje",
            "zaodje",
            "zapodje",
            "zarudje",
            "zasjedje",
            "zasmrdje",
            "zastidje",
            "zaštedje",
            "zdje",
            "zlodje",
            "igdje",
            "izbledje",
            "izblijedje",
            "izvidje",
            "izdjejst",
            "izdjelj",
            "izludje",
            "isprdje",
            "jednonedje",
            "kojegdje",
            "kudjelj",
            "lebdje",
            "ludjel",
            "ludjet",
            "makfadjen",
            "marmadjuk",
            "međudjel",
            "nadjaha",
            "nadjača",
            "nadjeb",
            "nadjev",
            "nadjenul",
            "nadjenuo",
            "nadjenut",
            "negdje",
            "nedjel",
            "nadjunač",
            "nenadjača",
            "nenadjebi",
            "nenavidje",
            "neodje",
            "nepodjarm",
            "nerazdje",
            "nigdje",
            "obdjel",
            "obnevidje",
            "ovdje",
            "odjav",
            "odjah",
            "odjaš",
            "odjeb",
            "odjev",
            "odjed",
            "odjezd",
            "odjek",
            "odjel",
            "odjen",
            "odjeć",
            "odjec",
            "odjur",
            "odsjedje",
            "ondje",
            "opredje",
            "osijedje",
            "osmonedje",
            "pardju",
            "perdju",
            "petonedje",
            "poblijedje",
            "povidje",
            "pogdjegdje",
            "pogdje",
            "podjakn",
            "podjamč",
            "podjastu",
            "podjemč",
            "podjar",
            "podjeb",
            "podjed",
            "podjezič",
            "podjel",
            "podjen",
            "podjet",
            "pododjel",
            "pozavidje",
            "poludje",
            "poljodjel",
            "ponegdje",
            "ponedjelj",
            "porazdje",
            "posijedje",
            "posjedje",
            "postidje",
            "potpodjel",
            "poštedje",
            "pradjed",
            "prdje",
            "preblijedje",
            "previdje",
            "predvidje",
            "predjel",
            "preodjen",
            "preraspodje",
            "presjedje",
            "pridjev",
            "pridjen",
            "prismrdje",
            "prištedje",
            "probdje",
            "problijedje",
            "prodjen",
            "prolebdje",
            "prosijedje",
            "prosjedje",
            "protivdjel",
            "prošlonedje",
            "radjard",
            "razvidje",
            "razdjev",
            "razdjel",
            "razodje",
            "raspodje",
            "rasprdje",
            "remekdjel",
            "rudjen",
            "rudjet",
            "sadje",
            "svagdje",
            "svidje",
            "svugdje",
            "sedmonedjelj",
            "sijedje",
            "sjedje",
            "smrdje",
            "snabdje",
            "snovidje",
            "starosjedje",
            "stidje",
            "studje",
            "sudjel",
            "tronedje",
            "ublijedje",
            "uvidje",
            "udjel",
            "udjen",
            "uprdje",
            "usidjel",
            "usjedje",
            "usmrdje",
            "uštedje",
            "cjelonedje",
            "četvoronedje",
            "čukundjed",
            "šestonedjelj",
            "štedje",
            "štogdje",
            "šukundjed",
        ],
        "dz": [
            "budzašto",
            "lindzi",
            "nadzemaljsk",
            "nadzemn",
            "nadzid",
            "nadzir",
            "nadznanj",
            "nadzor",
            "odzada",
            "odziv",
            "odzvanja",
            "odzvoni",
            "podzadaci",
            "podzadat",
            "podzakon",
            "podzakup",
            "podzemaljsk",
            "podzemlj",
            "podzemn",
            "podznaci",
            "podznak",
            "predzadnj",
            "predznaci",
            "predznak",
            "predznanje",
        ],
        "dž": [
            "feldžandarm",
            "nadžanj",
            "nadždrel",
            "nadžel",
            "nadžeo",
            "nadžet",
            "nadživ",
            "nadžinj",
            "nadžnj",
            "nadžrec",
            "nadžup",
            "odžali",
            "odžari",
            "odžel",
            "odžive",
            "odživljava",
            "odžubor",
            "odžvaka",
            "odžval",
            "odžvać",
            "podžanr",
            "podžel",
            "podže",
            "podžig",
            "podžiz",
            "podžil",
            "podžnje",
            "podžupan",
            "predželu",
            "predživot",
        ],
        "nj": [
            "anjon",
            "injaric",
            "injekc",
            "injekt",
            "injicira",
            "injurij",
            "kenjon",
            "konjug",
            "konjunk",
            "nekonjug",
            "nekonjunk",
            "ssrnj",
            "tanjug",
            "vanjezičk",
        ],
    };

    var digraphReplacements = {
        "dj": {
            "dj": "d\u200Cj",
            "Dj": "D\u200Cj",
            "DJ": "D\u200CJ",
        },
        "dz": {
            "dz": "d\u200Cz",
            "Dz": "D\u200Cz",
            "DZ": "D\u200CZ",
        },
        "dž": {
            "dž": "d\u200Cž",
            "Dž": "D\u200Cž",
            "DŽ": "D\u200CŽ",
        },
        "nj": {
            "nj": "n\u200Cj",
            "Nj": "N\u200Cj",
            "NJ": "N\u200CJ",
        }
    };

    function buildTrie(obj) {
        let trie = {};
        let currentNode;
        for (let key in obj) {
            currentNode = trie;
            for (let char of key) {
                currentNode[char] = currentNode[char] || {};
                currentNode = currentNode[char];
            }
            currentNode.value = obj[key];
        }
        return trie;
    }

    function splitDigraphs(str) {
        const lowercaseStr = str.trim().toLowerCase();
        for (const digraph in digraphExceptions) {
            if (!lowercaseStr.includes(digraph)) continue;
            for (const word of digraphExceptions[digraph]) {
                if (!lowercaseStr.startsWith(word)) continue;
                for (const key in digraphReplacements[digraph]) {
                    str = str.replace(key, digraphReplacements[digraph][key]);
                }
                break;
            }
        }
        return str;
    }

    function wordToCyrillic(word) {
        word = splitDigraphs(word);
        let result = '';
        for (let i = 0, length = word.length; i < length; i++) {
            if (!trie[word[i]]) {
                result += word[i];
                continue;
            }
            let currentNode = trie[word[i]];
            let currentDepth = 0;
            let valueDepth = 0;
            let value = '';
            while (true) {
                if (currentNode.value) {
                    value = currentNode.value;
                    valueDepth = currentDepth;
                }
                if (currentNode[word[i + currentDepth + 1]]) {
                    currentDepth++;
                    currentNode = currentNode[word[i + currentDepth]];
                } else {
                    break;
                }
            }
            result += value || word.substr(i, valueDepth + 1);
            i += valueDepth;
        }
        return result;
    }

    let words = text.split(/(\s+)/);
    let trie = buildTrie(initialMap);
    return words.map(word => wordToCyrillic(word)).join('');
}

let konvertujDugme = document.getElementById("konvertujDugme");
let latinicaInput = document.getElementById("latinicaInput");
let cirilicaOutput = document.getElementById("cirilicaOutput");

konvertujDugme.onclick= function() {
    cirilicaOutput.value = konvertujUCirilicu(latinicaInput.value );
};

const copyToClipboard = () => {
    const copyText = document.getElementById("cirilicaOutput");
    copyText.select();
    copyText.setSelectionRange(0, copyText.value.length); 

    navigator.clipboard.writeText(copyText.value)
        .then(() => console.log('Текст копиран'))
        .catch(err => console.error('Грешка у копирању: ', err));
};

const clearTextArea = () => {
    const inputText = document.getElementById("cirilicaOutput");
    const outputText = document.getElementById("latinicaInput");
    inputText.value = '';
    outputText.value = '';
};

document.getElementById('kopirajDugme').addEventListener('click', copyToClipboard);
document.getElementById('obrisiDugme').addEventListener('click', clearTextArea);

