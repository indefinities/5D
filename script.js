var prompts =
    ['How are you doing?',
        'What is the meaning of life?',
        'How do you spend your time?'];

// getRandomInt: Nat -> Nat
// produces random number from 0 to given Nat.
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
};

// randomPrompt: Array -> String
// returns a String from random index of array.
function randomPrompt(array) {
    return array[getRandomInt(array.length)]
};

document.getElementById("questionHolder").placeholder = randomPrompt(prompts);