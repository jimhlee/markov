
const { MarkovMachine } = require("./markov");

describe("getChains function with empty string", function () {

  test("empty string should return an empty object", function () {
    const machine = new MarkovMachine('');
    const wordChains = machine.getChains();

    expect(wordChains).toEqual({});
  });

});


describe("getChains function", function () {

  test("generates correct chains object", function () {
    const machine = new MarkovMachine('The cat in the hat.');
    const wordChains = machine.getChains();

    expect(wordChains).toEqual(
      {
        The: ['cat'],
        cat: ['in'],
        in: ['the'],
        the: ['hat.'],
        'hat.': [null]
      }
    );
  });

  test("single word has null as value", function () {

    const machine = new MarkovMachine('Ben.');
    const wordChains = machine.getChains();

    expect(wordChains).toEqual(
      {
        'Ben.': [null]
      }
    );
  });

});


describe("getText function with empty string", function () {

  test("empty string should return an empty object", function () {
    const machine = new MarkovMachine('');
    const text = machine.getText();

    expect(text).toEqual('');
  });

});


describe("getText function", function () {

  test("last word should always be last word", function () {
    const machine = new MarkovMachine('the big cat is a cat.');
    const splitText = machine.getText().split(' ');
    const lastLet = splitText[splitText.length - 1];
    expect(lastLet).toEqual('cat.');
  });

  test("two words should always return in same order", function () {
    const machine = new MarkovMachine('the cat.');
    const text = machine.getText();

    expect(text).toEqual('the cat.');
  });

  test("two words should always return in same order", function () {
    const machine = new MarkovMachine('the fat cat is a fat cat.');
    const text = machine.getText();

    expect(text).toContain('fat cat') || expect(text).toContain('fat cat.');
    expect(text).not.toContain('the cat');
  });

});


