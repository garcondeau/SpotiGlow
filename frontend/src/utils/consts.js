const defaultLanguage = "en";

const supportedLanguages = {
  "en": {
    "url": "",
    "regex": "\\/$|\\b",
    "description": "English"
  },
  "ru": {
    "url": "/ru",
    "regex": "\\/ru\\b",
    "description": "Русский"
  },
  // "pl": {
  //   "url": "/pl",
  //   "regex": "\\/pl\\b",
  //   'description': "Polska"
  // }
};

const helmetHtmlByLang = {
  "ru": "ru-RU",
  // "pl": "pl-PL",
  "en": "en-US"
};

const regex = {
  NAME: "^[\\'\\ʼ\\`\\-a-zA-Zа-яґіїєёА-ЯҐІЇЄЁ ]+$",
  PHONE: "^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$",
  EMAIL: "^[_a-z0-9-]+([\\._a-z0-9-])*@[a-z-]+(\\.[a-z-])*(\\.[a-z]{2,})$",
  COUNTRY: "^[\\'\\ʼ\\`\\-a-zA-Zа-яґіїєёА-ЯҐІЇЄЁ ]+$",
  TEXT: "^[\\'\\ʼ\\`\\-a-zA-Zа-яґіїєёА-ЯҐІЇЄЁ ]+$"
};

export {
  supportedLanguages,
  defaultLanguage,
  helmetHtmlByLang,
  regex
}