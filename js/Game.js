/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            new Phrase("Life is like a box of chocolates"),
            new Phrase("Everyone is lost but me"),
            new Phrase(
                "Tis better to have loved and lost than to have never loved at all"
            ),
            new Phrase(
                "Life is what happens when you’re busy making other plans"
            ),
            new Phrase("A great man is always willing to be little"),
            new Phrase(
                "Never let the fear of striking out keep you from playing the game"
            ),
        ];
        this.activePhrase = "null";
    }

    /**
     * Selects random phrase from phrases property
     * @return {Object} Phrase object chosen to be used
     */
    getRandomPhrase() {
        const randomPhrase = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randomPhrase];
    }
}
