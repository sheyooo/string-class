describe('String Prototype Test', function () {
  'use strict';

  describe('VOWELS METHOD - hasVowels()', function () {
    it('When the condition should return true', function () {
      expect('Abraham'.hasVowels()).toBe(true);
      expect('abraham'.hasVowels()).toBe(true);
      expect('ABRAHAM'.hasVowels()).toBe(true);
      expect('Abraham is a good boy'.hasVowels()).toBe(true);
    });

    it('When the condition should return false', function () {
      expect('cry'.hasVowels()).toBe(false);
      expect('CRY'.hasVowels()).toBe(false);
      expect('   '.hasVowels()).toBe(false);
      expect('Cry Cry Cry'.hasVowels()).toBe(false);
      expect(';--048=-9358'.hasVowels()).toBe(false);
    });
  });  

  describe('TO UPPER METHOD toUpper()', function () {
    it('Small letters', function () {
      expect('Abraham'.toUpper()).toBe('ABRAHAM');
      expect('abraham'.toUpper()).toBe('ABRAHAM');
      expect('aBrAhAm'.toUpper()).toBe('ABRAHAM');
      expect('MASTER of Javascript'.toUpper()).toBe('MASTER OF JAVASCRIPT');
    });

    it('Block letters', function () {
      expect('ABRAHAM'.toUpper()).toBe('ABRAHAM');
      expect('FATHER'.toUpper()).toBe('FATHER');
      expect('HELP'.toUpper()).toBe('HELP');
      expect('MASTER OF JAVASCRIPT'.toUpper()).toBe('MASTER OF JAVASCRIPT');
    });
  });

  describe('TO LOWER toLower()', function () {
    it('Block letters', function () {
      expect('ABRAHAM'.toLower()).toBe('abraham');
      expect('aBRAHAM'.toLower()).toBe('abraham');
      expect('BLOCK'.toLower()).toBe('block');
      expect('MASTER OF JAVASCRIPT'.toLower()).toBe('master of javascript');
    });

    it('String Prototype toLower() method should work correctly', function () {
      expect('Abraham'.toLower()).toBe('abraham');
      expect('abraham'.toLower()).toBe('abraham');
      expect('somebody'.toLower()).toBe('somebody');
      expect('MASTeR of Javascript'.toLower()).toBe('master of javascript');
    });
  });

  describe('CAPITALIZE FIRST ucFirst()', function () {
    it('Capitalized words', function () {
      expect('Abraham'.ucFirst()).toEqual('Abraham');
      expect('Adam'.ucFirst()).toEqual('Adam');
      expect('ABRAHAM'.ucFirst()).toEqual('ABRAHAM');
      expect(''.ucFirst()).toEqual('');
      expect('a'.ucFirst()).toEqual('A');
      expect('ab'.ucFirst()).toEqual('Ab');
      expect('master of javascript'.ucFirst()).toEqual('Master of javascript');
    });
  });

  describe('IS QUESTION isQuestion()', function () {
    it('If string is a question', function () {
      expect('Are you alright?'.isQuestion()).toBe(true);
      expect('Do you know me?'.isQuestion()).toBe(true);
      expect('Do I know you? '.isQuestion()).toBe(true);
    });

    it('If string is not a question', function () {
      expect('Are you alright'.isQuestion()).toBe(false);
      expect('I am flash'.isQuestion()).toBe(false);
      expect(''.isQuestion()).toBe(false);
      expect('?'.isQuestion()).toBe(false);
      expect('Do I know you '.isQuestion()).toBe(false);
    });
  });

  describe('WORDS words()', function () {
    it('words() method should work correctly', function () {
      expect('All these songs for you'.words())
        .toEqual(['All', 'these', 'songs', 'for', 'you']);
      expect('Are you alright?'.words()).toEqual(['Are', 'you', 'alright']);
      expect('Are you ?-*()!>%^@"\'= alright?'.words()).toEqual(['Are', 'you', 'alright']);
      expect('I am not your mate'.words())
        .toEqual(['I', 'am', 'not', 'your', 'mate']);
      expect('I will never give up on you'.words())
        .toEqual(['I', 'will', 'never', 'give', 'up', 'on', 'you']);
      expect(''.words()).toEqual([]);
    });
  });

  describe('WORD COUNT wordCount()', function () {
    it('wordCount() method should work correctly', function () {
      expect('All these songs for you'.wordCount()).toBe(5);
      expect('Are you alright?'.wordCount()).toBe(3);
      expect('I am not your mate'.wordCount()).toBe(5);
      expect(''.wordCount()).toBe(0);
    });
  });

  describe('TO CURRENCY toCurrency()', function () {
    it('toCurrency() method for numbers', function () {
      expect('11111.11'.toCurrency()).toBe('11,111.11');
      expect('100'.toCurrency()).toBe('100');
      expect('1000'.toCurrency()).toBe('1,000');
      expect('1000000000'.toCurrency()).toBe('1,000,000,000');
      expect('1.000000000'.toCurrency()).toBe('1');
      expect('1.0000000010'.toCurrency()).toBe('1.000000001');
      expect('1.230000'.toCurrency()).toBe('1.23');
      expect('1000.23'.toCurrency()).toBe('1,000.23');
      expect('1000000.987'.toCurrency()).toBe('1,000,000.987');
    });

    it('toCurrency() method for NaN', function () {
      expect('11111k.11'.toCurrency()).toEqual(NaN);
      expect('$100'.toCurrency()).toEqual(NaN);
    });
  });

  describe('FROM CURRENCY fromCurrency()', function () {
    it('fromCurrency() method for pure numbers', function () {
      expect('11,111.11'.fromCurrency()).toBe(11111.11);
      expect('100'.fromCurrency()).toBe(100);
      expect('100'.fromCurrency()).toBe(100);
      expect('1,000'.fromCurrency()).toBe(1000);
      expect('1,000,000,000'.fromCurrency()).toBe(1000000000);
    });

    it('fromCurrency() method with numbers and signs', function () {
      expect('$11,111.11'.fromCurrency()).toBe(11111.11);
      expect('one thousand'.fromCurrency()).toEqual(NaN);
      expect('$100'.fromCurrency()).toBe(100);
      expect('1k'.fromCurrency()).toBe(1);
      expect('1k,000,000,000'.fromCurrency()).toBe(1);
      expect('1,000,000,000k'.fromCurrency()).toBe(1000000000);
      expect('$1,000'.fromCurrency()).toBe(1000);
    });
  });
});