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
        letter.forEach((letter) => {
            if (letter === " ") {
                firstPhrase.innerHTML += '<li class="space"> </li>';
            } else {
                firstPhrase.innerHTML += `<li class="hide letter ${splitPhrase[i]}">${splitPhrase[i]}</li>`;
            }
        });
    }
}
