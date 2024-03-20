/** Textual markov chain generator. */

// TODO: get random choice

class MarkovMachine {

  /** Build markov machine; read in text.*/

  constructor(text) {
    // A "word" will also include any punctuation around the word, so this will
    // include things like "The", "cat", "cat.".
    this.words = text.split(/[ \r\n]+/);
    this.chains = this.getChains();
  }

  /** Get markov chain: returns object of Markov chains.
   *
   *  For text of "The cat in the hat.", chains will be:
   *
   *  {
   *   "The": ["cat"],
   *   "cat": ["in"],
   *   "in": ["the"],
   *   "the": ["hat."],
   *   "hat.": [null],
   *  }
   *
   * */

  getChains() {
    // TODO: implement this!
    const chains = {};
    const wordList = this.words;

    if (wordList.length === 1 && wordList[0] === "") {
      return chains;
    }

    for (let i = 0; i < wordList.length; i++) {

      let word = wordList[i];
      let nextWord = wordList[i + 1] || null;

      if (word in chains) {
        chains[word].push(nextWord);
      } else {
        chains[word] = [nextWord];
      }

    }
    return chains;
  }


  /** Return random text from chains, starting at the first word and continuing
   *  until it hits a null choice. */

  getText() {
    // TODO: implement this!

    const words = this.getChains();
    const text = [];
    // {}
    if (!(Object.keys(words).length)) {
      return '';
    }

    let word = this.words[0];
    text.push(word);

    let nextWord;

    while (nextWord !== null) {
      nextWord = MarkovMachine.randomChoice(words[word]);
      word = nextWord;
      text.push(nextWord);
    }

    return text.join(' ').trim();
  }

  static randomChoice(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }

}

module.exports = {
  MarkovMachine,
};

// the cat in the hat
// the cat in the cat in the