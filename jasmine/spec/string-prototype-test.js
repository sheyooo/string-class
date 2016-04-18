describe('String Prototype Test', function () {

  it('String Prototype hasVowels() method should work correctly', function () {
    expect('Abraham'.hasVowels()).toBe(true);
    expect('abraham'.hasVowels()).toBe(true);
    expect('ABRAHAM'.hasVowels()).toBe(true);
    expect('cry'.hasVowels()).toBe(false);
    expect('CRY'.hasVowels()).toBe(false);
    expect('   '.hasVowels()).toBe(false);
    expect('Abraham is a good boy'.hasVowels()).toBe(true);
    expect('Cry Cry Cry'.hasVowels()).toBe(false);
    expect(';--048=-9358'.hasVowels()).toBe(false);
  });

  it('String Prototype toUpper() method should work correctly', function () {
    expect('Abraham'.toUpper()).toBe('ABRAHAM');
    expect('abraham'.toUpper()).toBe('ABRAHAM');
    expect('ABRAHAM'.toUpper()).toBe('ABRAHAM');
    expect('MASTER of Javascript'.toUpper()).toBe('MASTER OF JAVASCRIPT');
  });


  it('String Prototype toLower() method should work correctly', function () {
    expect('Abraham'.toLower()).toBe('abraham');
    expect('abraham'.toLower()).toBe('abraham');
    expect('ABRAHAM'.toLower()).toBe('abraham');
    expect('MASTER of Javascript'.toLower()).toBe('master of javascript');
  });


  it('String Prototype ucFirst() method should work correctly', function () {
    expect('Abraham'.ucFirst()).toEqual('Abraham');
    expect('abraham'.ucFirst()).toEqual('Abraham');
    expect('ABRAHAM'.ucFirst()).toEqual('ABRAHAM');
    expect(''.ucFirst()).toEqual('');
    expect('a'.ucFirst()).toEqual('A');
    expect('ab'.ucFirst()).toEqual('Ab');
    expect('master of javascript'.ucFirst()).toEqual('Master of javascript');
  });

  it('String Prototype isQuestion() method should work correctly', function () {
    expect('Are you alright'.isQuestion()).toBe(false);
    expect('Are you alright?'.isQuestion()).toBe(true);
    expect('What is your name?'.isQuestion()).toBe(true);
    expect('Do I know you? '.isQuestion()).toBe(false);
  });

  it('String Prototype words() method should work correctly', function () {

    expect('All these songs for you'.words())
      .toEqual(['All', 'these', 'songs', 'for', 'you']);

    expect('Are you alright?'.words()).toEqual(['Are', 'you', 'alright?']);

    expect('I am not your mate'.words())
      .toEqual(['I', 'am', 'not', 'your', 'mate']);

    expect('I will never give up on you'.words())
      .toEqual(['I', 'will', 'never', 'give', 'up', 'on', 'you']);
  });

  it('String Prototype wordCount() method should work correctly', function () {

    expect('All these songs for you'.wordCount()).toBe(5);
    expect('Are you alright?'.wordCount()).toBe(3);
    expect('I am not your mate'.wordCount()).toBe(5);
    expect(''.wordCount()).toBe(0);
  });

  it('String Prototype toCurrency() method should work correctly', function () {

    expect('11111.11'.toCurrency()).toBe('11,111.11');
    expect('100'.toCurrency()).toBe('100');
    expect('1000'.toCurrency()).toBe('1,000');
    expect('1000000000'.toCurrency()).toBe('1,000,000,000');
    expect('1.000000000'.toCurrency()).toBe('1.000000000');
    expect('100000'.toCurrency()).toBe('100,000');
    expect('9999'.toCurrency()).toBe('9,999');
    expect('1000000.987'.toCurrency()).toBe('1,000,000.987');
  });

  it('String Prototype fromCurrency() method should work correctly', function () {

    expect('11,111.11'.fromCurrency()).toBe(11111.11);
    expect('100'.fromCurrency()).toBe(100);
    expect('1,000'.fromCurrency()).toBe(1000);
    expect('1,000,000,000'.fromCurrency()).toBe(1000000000);
  });



});