let having = [
    "bad luck",
    "good luck",
    "the worst day",
    "the best day",
    "a tough day",
    "an easy day",
    "a challenging situation",
    "a fortunate event",
    "an unexpected surprise",
    "a series of obstacles",
    "a stroke of good fortune"
  ];
  
  let shouldDo = [
    "go bowling",
    "get a scratch-off ticket",
    "take the day off",
    "go camping",
    "appreciate what you have",
    "try something new",
    "volunteer for a cause",
    "plan a spontaneous adventure",
    "learn a new skill",
    "call an old friend",
    "explore your city"
  ];
  
  let receive = [
    "money",
    "happiness",
    "a raise",
    "the love of your life",
    "a ticket to Disneyland",
    "plane tickets to Amazonia",
    "recognition for your hard work",
    "a gift from a secret admirer",
    "an opportunity you've been waiting for",
    "a chance to pursue your dreams",
    "unexpected support from a friend"
  ];

  let fortune = [
    "in the nick of time",
    "when you least expect it",
    "on a bright sunny day",
    "under the starry sky",
    "during a full moon",
    "on a rainy afternoon",
    "at the break of dawn",
    "while birds are chirping",
    "as the leaves fall",
    "during a thunderstorm"
  ];
//Example messaage You will have bad luck today and you should go bowling. You will receive money.

//Gets random word from an array
const getRandWord = (arr) => {
    let randIndex = Math.floor(Math.random() * (arr.length));
    let randWord = arr[randIndex]
    return randWord
}

const getRandSentence = (arr1, arr2, arr3, arr4) => {
    let sentence = `You will have ${getRandWord(arr1)} today and you should ${getRandWord(arr2)}. You will receive ${getRandWord(arr3)} ${getRandWord(arr4)}.`
    return sentence
}

let randSentence = getRandSentence(having, shouldDo, receive, fortune)
console.log(randSentence)