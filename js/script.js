"use strict";
const keyword = document.getElementsByClassName("keyword")[0];
const decryptMessage = document.getElementsByClassName("decrypt")[0];
const result = document.getElementsByClassName("result")[0];
const buttonDecryption = document.getElementsByClassName("buttonsDescription")[0];
const buttonEncryption = document.getElementsByClassName("buttonsDescription")[1];
const buttonReset = document.getElementsByClassName("reset");

const cipherVigenere = {
  decryptMessage: [],
  keyword: [],
  n: 0,
  arrayOfRusAlphabet: [
    "А",
    "Б",
    "В",
    "Г",
    "Д",
    "Е",
    "Ё",
    "Ж",
    "З",
    "И",
    "Й",
    "К",
    "Л",
    "М",
    "Н",
    "О",
    "П",
    "Р",
    "С",
    "Т",
    "У",
    "Ф",
    "Х",
    "Ц",
    "Ч",
    "Ш",
    "Щ",
    "Ъ",
    "Ы",
    "Ь",
    "Э",
    "Ю",
    "Я",
    " ",
  ],

  decryption: function () {
    this.n = this.arrayOfRusAlphabet.length;
    this.decryptMessage = decryptMessage.value.toUpperCase().trim().split("");
    this.keyword = keyword.value.toUpperCase().trim().split("");
    let keywordIndex = 0;
    this.decryptMessage.forEach((elem) => {
      const c = (this.arrayOfRusAlphabet.indexOf(elem) + this.arrayOfRusAlphabet.indexOf(this.keyword[keywordIndex])) % this.n;

      result.value += this.arrayOfRusAlphabet[c];

      keywordIndex++;

      if (keywordIndex + 1 == this.keyword.length) {
        keywordIndex = 0;
      }
    });
  },

  encryption: function () {
    this.n = this.arrayOfRusAlphabet.length;
    this.decryptMessage = decryptMessage.value.toUpperCase().trim().split("");
    this.keyword = keyword.value.toUpperCase().trim().split("");
    let keywordIndex = 0;
    this.decryptMessage.forEach((elem) => {
      const P = (this.arrayOfRusAlphabet.indexOf(elem) + this.n - this.arrayOfRusAlphabet.indexOf(this.keyword[keywordIndex])) % this.n;

      result.value += this.arrayOfRusAlphabet[P];

      keywordIndex++;

      if (keywordIndex + 1 == this.keyword.length) {
        keywordIndex = 0;
      }
    });
  },

  init: function () {
    buttonDecryption.addEventListener("click", (event) => {
      event.preventDefault();
      this.decryption();
      this.disable();
    });

    buttonEncryption.addEventListener("click", (event) => {
      event.preventDefault();
      this.encryption();
      this.disable();
    });

    buttonReset.addEventListener("click", (event) => {
      event.preventDefault();
      this.cleanForm();
      this.unDisable();
    });
  },

  disable: function () {
    keyword.disabled = true;
    decryptMessage.disabled = true;
    buttonDecryption.disabled = true;
    buttonEncryption.disabled = true;
  },

  unDisable: function () {
    keyword.disabled = false;
    decryptMessage.disabled = false;
    buttonDecryption.disabled = false;
    buttonEncryption.disabled = false;
  },

  cleanForm: function () {
    this.decryptMessage = [];
    this.keyword = [];
    keyword.value = "";
    decryptMessage.value = "";
    result.value = "";
  },
};
cipherVigenere.init();
