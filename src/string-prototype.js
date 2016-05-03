(function () {
  'use strict';
  /**
   * This method checks if the String has vowels in it
   * @return {Boolean} If it exists 'true' else 'false'
   */
  String.prototype.hasVowels = function () {
    var vowelRegex = /[aeiou]/i;
    return vowelRegex.test(this);
  };

  /**
   * Turns the String to upperCase
   * @return {String} The UpperCased string
   */
  String.prototype.toUpper = function () {
    var word = this;

    //Convert to uppercase by converting to and from ASCII subtract 32
    return word.replace(/[a-z]/g, function (letter) {
      return String.fromCharCode(letter.charCodeAt() - 32);
    });
  };

  /**
   * Turns the String to lowerCase
   * @return {String} The LowerCased string
   */
  String.prototype.toLower = function () {
    var word = this;
    //Convert to uppercase by converting to and from ASCII add 32
    return word.replace(/[A-Z]/g, function (letter) {
      return String.fromCharCode(letter.charCodeAt() + 32);
    });
  };

  /**
   * Uppercase on only the First Character
   * @return {String} The Capitalized String
   */
  String.prototype.ucFirst = function () {
    var word = this,
        capitalized = '';
    if (word.length > 0) {
      capitalized = word.charAt(0).toUpper() + word.substr(1);
    }
    return capitalized;
  };

  /**
   * Checks if the String is a question by checking the last character if '?'
   * @return {Boolean} If Question return apprioprate Boolean
   */
  String.prototype.isQuestion = function () {
    var word = this,
        questionRegex = /\?$/;
    if (questionRegex.test(word.trim())) {
      return true;
    } else {
      return false;
    }
  };

  /**
   * Get the words in the string in form of Array
   * @return {[String]} The splitted words
   */
  String.prototype.words = function () {
    var word = this;
    word = word.split(/\s/);
    //Check if its an empty string
    if (word[0] === '') {
      return [];
    }
    return word;
  };

  /**
   * Count the number of words in the string
   * @return {Int} The number of words in string
   */
  String.prototype.wordCount = function () {
    return this.words().length;
  };

  /**
   * Format a string to Currency
   * @return {String} String representation of currency
   */
  String.prototype.toCurrency = function () {
    var amount = this.trim(),
        decimalPointIndex = amount.indexOf('.'),
        point;

    if (!amount.match(/^[0-9,.]+$/)) {
      return NaN;
    }
    if (decimalPointIndex === -1) {
      point = amount.length;
    } else {
      point = decimalPointIndex;
    }
    amount = parseFloat(amount).toString().split('');
    //Condition in while loop checks if there is atleast 4 figures left
    while ((point - 4) >= 0) {
      point -= 3;
      amount.splice(point, 0, ',');
    }
    return amount.join('');
  };

  /**
   * Turns a String Currency to a number
   * @return {mixed} Int or Float of Currency
   */
  String.prototype.fromCurrency = function () {
    var amount = this;

    amount = amount.replace(/[$,]/g, '');
    amount = parseFloat(amount);
    return amount;
  };
})();