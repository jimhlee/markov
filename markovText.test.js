
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
      'Ben.' : [null]
      }
    );
  })

});




