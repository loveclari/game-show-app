/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

const firstPhrase = document.getElementById("phrase").firstElementChild;
console.log(firstPhrase);

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }
    /**
     * Display phrase on game board
     */
    addPhraseToDisplay() {
        const letter = this.phrase.split("");
        for (let i = 0; i < letter.length; i++) {
            if (letter[i] === " ") {
                firstPhrase.innerHTML += '<li class="space"> </li>';
            } else {
                firstPhrase.innerHTML += `<li class="hide letter ${letter[i]}">${letter[i]}</li>`;
            }
        }
    }
}
