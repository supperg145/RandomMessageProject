let having = ["bad luck", "good luck", "the worst day", "the best day", "a tough", "an easy"]
let shouldDo = ["go bowling", "get a scratch off ticket", "take the day off", "go camping", "appreciate what you have"]
let receive = ["money", "happiness", "a raise", "the love of your life", "a ticekt to Disneyland", "plane tickets to Amazonia"]

//Example messaage You will have bad luck today and you should go bowling. You will receive money.

//Gets random word from an array
const getRandWord = (arr) => {
    let randIndex = Math.floor(Math.random() * (arr.length));
    let randWord = arr[randIndex]
    return randWord
}

console.log(getRandWord(having))