/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }
    /**
     * Display phrase on game board
     */
    addPhraseToDisplay() {
        const letter = this.phrase.split("");
        const firstPhrase = document.querySelector("ul");
        for (let i = 0; i < letter.length; i++) {
            if (letter[i] === " ") {
                firstPhrase.innerHTML += '<li class="hide space"></li>';
            } else {
                firstPhrase.innerHTML += `<li class="hide letter ${letter[i]}">${letter[i]}</li>`;
            }
        }
        console.log(firstPhrase);
    }
}
