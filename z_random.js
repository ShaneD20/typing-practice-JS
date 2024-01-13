// ctrl+f : Application Code to see how application runs.

// arrays of words and characters to type.
const flowToHome = [
  "1fds", "!fds", "f1da", "f!da", "f1ds", "f!ds", "sd1f", "sd!f",
  "@fas", "2fsa", "a2fd", "a@df", "f@as", "f2ad", "df2a", "df@a",
  "a#fs", "a3fs", "f#as", "f3as", "a3fd", "a#fd", "sf#a", "sf3a",
  "ad4s", "ad$s", "a4sd", "a$sd", "s4ad", "s$ad",
  "a%ds", "a%sd", "as%d", "a5sd", "as5d", "a5ds",

  "0jkl", ")jkl", "h0jl", "h)jl", "n)jl", "n)jl", "lk0j", "lk)j",
  ";(kj", ";9kj", ";(jk", ";9jk", "j9k;", "jk(;", "kh9j", "kh(j",
  ";8jl", "lj8;", "lj*;", ";*jl", "j*;l", "j8;l", ";l8j", ";l*j",
  ";k7l", ";k&l", ";&lk", ";7lk", "l7;k", "l&;k",
  ";^lk", ";^kl", "l^;k", ";6lk", ";6kl", "l6;k",

  "asdf", "zsdf", "qsdf", "axdf", "awdf", "ascf", "asef",
  "dasf", "dzsf", "dqsf", "dxaf", "dwaf", "afcs", "afes",
  "fdsa", "fdzs", "fdqs", "fdxa", "fdwa", "fcsa", "fesa",
  "fsda", "fszd", "fqsd", "xafd", "wafd", "csaf", "esaf",
  "sgda", "geas", "gcas", "gdzs", "gdqs", "gdwa", "gdxa",
  "srda", "rdsa", "rsda", "drsa", "ards", "rdas", "rsad",
  "svda", "vdsa", "vsda", "dvsa", "avds", "vdas", "vsad",
  "stda", "tdsa", "tsda", "dtsa", "atds",
  "sbda", "bdsa", "bsda", "dbsa", "abds",
  "~fsd", "~dsf", "~sdf", "~fes", "~efs",
  "`fsd", "`dsf", "`sdf", "`fes", "`efs",

  ":jkl", "Asdf", "Basd", "Casf", "Dfsa", "Easf", "Fdsa", "Gasd", "H;lk",
  "?lkj", "Ijl;", "Jkl;", "Lkj;", "Mkl;", "Nkl;", "O;kj", "Plkj", "Qsdf",
  "Rasd", "Sqfd", "Tasd", "U;lk", "Vasd", "Wadf", "Xadf", "Ykl;", "Zsdf",

  ";lkj", "/lkj", "plkj", ";.kj", ";okj", ";l,j", ";lij", "jkl;",
  "jk/l", "jkpl", "ukl;", "nkl;", "jk.;", "jko;", "jk(;", "j,l;",
  "jil;", ";lnk", ";luk", ";ylk", "hplk", "y;,l", "ky;l", ";nlk",
  "srad", "lu;k", "ij;l", "pklj", "j<l;", "<jl;", ">jl;",
  "jk>;", ";l<j", ";>kj", "kl?j", "o;kj", "il;j", "u;lk", "hlkj",
  "j_kl", "j=kl", "j-kl", "j+kl", "k_jl", "k-jl", "k+jl", "k=jl",
  "\"lkj", "\"jkl", "\"kjl", "\'lkj", "\'jkl", "\'kjl",
  "{jkl", "j{kl", "{lkj", "jk{l", "[jkl", "j[kl", "[ljk", "jk[l",
  "lhk;", "hkl;", "hlk;", "khl;", ";hkl",
  "lyk;", "ykl;", "ylk;", "kyl;", ";ykl",
  "lnk;", "nkl;", "nlk;", "knl;", ";nkl",
  // omitted ] } \ | (too much of a jump for good habits...)
]

const triplets = [
  "gad", "gsd", "gds", "fad", "fsd", "fds", "h;k", "hkl", "hlk", "j;k", "j;l", "jk;",
  "rad", "rsd", "rds", "vad", "vsd", "vds", "u;k", "ulk", "ukl", "m;k", "mlk", "mk;",
  "tad", "tsd", "tds", "bad", "bsd", "bds", "y;k", "ylk", "ykl", "n;k", "nlk", "nkl",
  "4ad", "4sd", "4ds", "$ad", "$sd", "$ds", "7;k", "7lk", "7kl", "&;k", "&lk", "&kl",
  "5ad", "5sd", "5ds", "%ad", "%sd", "%ds", "6;k", "6lk", "6;l", "^;k", "^lk", "^;l",
  "zfd", "zds", "zsf", "qfs", "qds", "qsd", "/lk", "/kl", "/jl", "pjk", "plk", "pkl",
  "1fd", "1ds", "1sf", "!fs", "!ds", "!sd", "0lk", "0kl", "0jl", ")jl", ")jk", ")kl",
  "wad", "wda", "wfd", "xad", "xda", "xfd", "ojk", "ok;", "o;k", ".;k", ".k;", ".jl",
  "2ad", "2da", "2fd", "@ad", "@da", "@fd", "9k;", "9kj", "9j;", "(;k", "(jk", "(k;",
  "eaf", "esf", "efs", "cad", "csf", "cfs", "i;l", "ilj", "ijl", ",;l", ",lj", ",jl",
  "3af", "3sf", "3fs", "#as", "#sf", "#fs", "*;l", "*lj", "*jl", "8;l", "8lj", "8jl",
  "1gd", "2gd", "3gs", "4ds", "5ds", "6kl", "7kl", "8hl", "9hk", "0hk", ">k", ">j", "<l", "<j",
  "qgd", "wgd", "egs", "fds", "tds", "ykl", "ukl", "ihl", "ohk", "phk", "?jl", "?kl", "?lj",
  "zgd", "xgd", "cgs", "vds", "bds", "nkl", "mkl", ",hl", ".hk", "/hk", "<hl", ">hk", "?hk",
  "~fs", "~fd", "~df", "~sf", "`fs", "`fd", "`df", "`sf",
  // omitted [ ]  { } \ | (to slightly better balance work for left and right)
]

const frequent = [
  // misc programming common words
  "build", "specify", "from", "repeat", "unless", "until", "give", "function", "method", "exists", "assert", "define",
  "always", "share", "export", "import", "include", "package", "protect", "self", "xor", "await", "void", "either", "in",
  "construct", "variable", "filter", "fold", "data", "module", "value", "array", "bind", "with", "yield", "none", "by",
  "each", "call", "list", "when", "hold", "defer", "set", "redo", "text", "transfer", "and", "or", "as", "for", "except",
  "this", "do", "maximum", "minimum", "integer", "reference", "return", "string", "continue", "false", "global",
  "abstract", "base", "break", "byte", "case", "catch", "character", "checked", "constant", "decimal", "default",
  "delegate", "enumerate", "event", "explicit", "external", "finally", "fixed", "float", "implicit", "interface",
  "internal", "lock", "name", "type", "safe", "virtual", "object", "operator", "private", "protected", "public",
  "sealed", "size", "stack", "allocate", "static", "structure", "switch", "throw", "try", "volatile", "read",
  //SQL commands
  "create", "alter", "drop", "truncate", "rename", "insert", "update", "delete", "merge", "grant", "revoke", "commit", "select", "rollback",
  "inner", "outer", "left", "right", "full", "between", "group", "order", "having", "count",

  //top words
  "the", "be", "to", "of", "that", "have", "it", "not", "on", "you", "at", "but", "they", "we", "say", "get", "adjacent", "an", "will",
  "my", "one", "all", "would", "there", "their", "they're", "what", "so", "seem", "up", "out", "if", "about", "who", "deep", "introduce",
  "which", "go", "me", "make", "can", "like", "time", "no", "just", "know", "take", "people", "into", "year", "your", "good", "some",
  "could", "them", "see", "other", "than", "then", "now", "look", "only", "come", "its", "over", "think", "also", "after", "use", "how",
  "our", "work", "well", "way", "even", "new", "want", "because", "any", "these", "next", "different", "paste", "condition", "frequently",
  "most", "here", "should", "such", "thing", "down", "want", "long", "own", "how", "even", "back", "any", "good", "much", "before", "go",
  "come", "did", "number", "sound", "no", "way", "people", "my", "over", "know", "water", "call", "first", "may", "down", "offer", "stop",
  "side", "been", "find", "head", "stand", "page", "country", "found", "answer", "school", "grow", "study", "still", "learn", "plant",
  "cover", "food", "sun", "out", "between", "state", "keep", "eye", "never", "last", "let", "thought", "city", "tree", "cross", "farm",
  "hard", "start", "might", "story", "saw", "far", "sea", "draw", "late", "run", "don't", "while", "press", "close", "phenomena", "invoke",
  "real", "life", "few", "north", "book", "carry", "took", "science", "eat", "room", "friend", "began", "idea", "fish", "mountain", "rose",
  "once", "twice", "base", "hear", "cut", "sure", "watch", "color", "face", "wood", "main", "enough", "plain", "usual", "ready", "around",
  "above", "ever", "though", "feel", "talk", "bird", "soon", "family", "below", "near", "direct", "pose", "leave", "song", "home", "place",
  "measure", "door", "product", "short", "numeral", "wind", "question", "happen", "complete", "ship", "area", "large", "hand", "populate",
  "half", "full", "order", "fire", "south", "problem", "piece", "told", "knew", "pass", "since", "top", "whole", "space", "heard", "best",
  "hour", "better", "minute", "second", "true", "during", "hundred", "five", "remember", "step", "early", "west", "ground", "show", "group",
  "interest", "reach", "fast", "verb", "sing", "listen", "table", "travel", "less", "morning", "ten", "simple", "several", "vowel", "toward",
  "lay", "against", "pattern", "slow", "center", "love", "person", "money", "serve", "appear", "road", "map", "rain", "rule", "govern",
  "pull", "cold", "notice", "voice", "unit", "power", "town", "fine", "certain", "fly", "fall", "lead", "cry", "machine", "note", "evening",
  "wait", "plan", "figure", "star", "box", "noun", "field", "rest", "correct", "able", "pound", "done", "beauty", "drive", "stood", "contain",
  "front", "teach", "week", "final", "gave", "oh", "quick", "develop", "ocean", "warm", "free", "strong", "special", "mind", "behind", "clear",
  "tail", "produce", "fact", "street", "inch", "multiply", "nothing", "course", "stay", "wheel", "force", "object", "decide", "surface", "was",
  "moon", "island", "foot", "system", "busy", "test", "record", "boat", "common", "gold", "possible", "plane", "meet", "current", "lift",
  "block", "chart", "hat", "sell", "success", "company", "subtract", "particular", "deal", "swim", "term", "opposite", "shoe", "shoulder",
  "spread", "arrive", "phone", "mobile", "brown", "weave", "permit", "sight", "collect", "art", "print", "night", "buy", "bought", "day",
  "spot", "seat", "store", "save", "suit", "neighbor", "depend", "dream", "ahead", "laughter", "capital", "consist", "charge", "segment",
  "divide", "subtract", "add", "plus", "minus", "multiply", "raise", "lower", "further", "total", "basic", "reply", "occur", "support",
  "nor", "track", "shore", "favor", "connect", "post", "spend", "chord", "glad", "original", "station", "instant", "market", "degree",
  "past", "present", "future", "yesterday", "tomorrow", "increase", "decrease", "ask", "program", "consider", "duration", "enter", "solution",
  "yellow", "blue", "red", "orange", "green", "purple", "violet", "pink", "azure", "grey", "black", "white", "dark", "light", "reason",
  "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", "compile",
  "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "first", "second", "third", "fourth", "fifth", "sixth",
  "seventh", "eigth", "ninth", "tenth", "eleventh", "twelfth", "fourteenth", "twentieth", "thirtieth", "backward", "vision", "mass", "turn",
  "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "nineteen", "twenty", "thirty", "proper",
  "speech", "nature", "range", "steam", "motion", "path", "liquid", "log", "meant", "quotient", "shell", "rush", "oxygen", "season",
  "thank", "branch", "match", "especially", "huge", "discuss", "forward", "similar", "guide", "experience", "score", "pitch", "coat",
  "card", "band", "rope", "slip", "win", "importance", "same", "under", "away", "big", "help", "where", "please", "yes", "again", "every",
  "going", "open", "put", "goes", "many", "very", "wish", "write", "clean", "got", "myself", "together", "bye", "picture", "way", "window",
  "accept", "acceptance", "access", "benefit", "concept", "context", "distribute", "establish", "estimate", "evident", "involve", "network",
  "revolve", "percent", "methodical", "procedure", "role", "response", "respond", "theory", "acquire", "aspect", "conduct", "equate", "focus",
  "obtain", "retain", "obtainable", "retainable", "prior", "previous", "regulate", "core", "ensure", "imply", "link", "locate", "negate",
  "rely", "reliable", "register", "scheme", "sequence", "shift", "reaction", "reliance", "task", "sufficient", "technical", "validity",
  "cycle", "confer", "dimension", "emerge", "option", "phasing", "series", "status", "adjust", "enable", "generate", "modify", "proportion",
  "precise", "pursue", "ratio", "style", "sustain", "target", "version", "attaching", "display", "enhance", "exceeds", "flexible", "inhibit",
  "instruct", "motivate", "advocate", "channel", "confirm", "couple", "definite", "dynamic", "equipment", "exit", "extract", "contrast",
  "sole", "visualize", "clarify", "zebra", "realize", "bulk", "cease", "coherence", "converse", "distort", "mutual", "refine", "relax",
]

/* Application Code : snake_case for global variables */

let user_typing = false;
let no_errors = true;
let time_start = 0;
let word_count = 0;
const iterations = 28;

function getPrompt() {
  let user_prompt = "";

  for (let i = 0; i < iterations; i += 1) {
    const index = Math.floor(flowToHome.length * Math.random());
    const point = Math.floor(triplets.length * Math.random());
    const word = Math.floor(frequent.length * Math.random());

    user_prompt += flowToHome.splice(index, 1);
    user_prompt += " ";
    if ((i & 1) == 0) {
      user_prompt += frequent.splice(word, 1);
      user_prompt += " ";
      word_count += 1;
    }
    user_prompt += triplets.splice(point, 1);
    user_prompt += " ";
    word_count += 2;
  }
  const word = Math.floor(frequent.length * Math.random());
  user_prompt += "fds " + frequent[word] + " jkl";
  word_count += 3;
  return user_prompt;
}
const outputHTML = document.getElementById('practice-content');
const inputField = document.getElementById('user-input');
const output = getPrompt();
outputHTML.innerText = output;

inputField.value = "";
inputField.focus();

document.getElementById('reset-button').addEventListener('click', () => location.reload());

inputField.addEventListener('input', () => {
  let i = 0;
  if (user_typing === false) {
    user_typing = true;
    time_start = performance.now();
  }
  const text = inputField.value;
  const last = text.length - 1;

  // when user completes text
  if (text.length === output.length && no_errors && output[last] === text[last]) {
    const totalTime = (performance.now() - time_start) / 60_000;
    const wordsPerMinuteX10 = Math.floor(10 * (word_count / totalTime));
    document.getElementById('title').innerText = "Words per Minute: " + (wordsPerMinuteX10 / 10);
    inputField.classList.add('green-font');
    outputHTML.classList.add('green-font');
    document.getElementById('reset-button').focus();
    return;
  }

  // as user is entering text
  while (i < text.length) {
    if (text[i] != output[i]) {
      inputField.classList.add('red-font');
      outputHTML.classList.add('red-font');
      no_errors = false;
      break;
    } else {
      inputField.classList.remove('red-font');
      outputHTML.classList.remove('red-font');
      no_errors = true;
    }
    i += 1;
  }
});