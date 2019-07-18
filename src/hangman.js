/* Create method for making a guess
	1. Should accept a character for guessing
	2. Should add unique guesses to list of guesses
	3. Should decrement the guesses left if a unique guess isn't a match
*/

class Hangman{
		constructor(word, guessesAllowed) {
		this.word = word.toLowerCase().split("")
		this.guessesAllowed = guessesAllowed
		this.guessedLetters = []
		this.status = "playing"
	}
	calculateStatus(){
		let finished = true;

		this.word.forEach((letter) => {
			if(this.guessedLetters.includes(letter) || letter === " ") {
		
			} else {
				finished = false;
			}
		}) 

		if(this.guessesAllowed === 0) {
			this.status = "failed"
		}else if (finished) {
			this.status = "finished"
		}else {
			this.status = "playing"
		}
	}
	get puzzle() {
		let puzzle = ""

		this.word.forEach((letter) => {
			if(this.guessedLetters.includes(letter) || letter === " " ) {
				puzzle += letter
			} else {
				puzzle += "*"
			}
		})

		return puzzle
	}
	get statusMessage() {
		if(this.status === "playing") {
		return `Guesses left: ${this.guessesAllowed}`
	}else if (this.status === "failed") {''
		return `Nice try. The word was "${this.word.join("")}".`
	}else {
		return `Great work! You guessed the word.`
	}
	}
	makeGuess(char) {
		char = char.toLowerCase()
		const unique = !this.guessedLetters.includes(char)
		const isBadGuess = !this.word.includes(char)

		if(this.status !== "playing") {
			return
		}

		if(unique) {
			this.guessedLetters = [...this.guessedLetters, char]
		}

		if(unique && isBadGuess) {
			this.guessesAllowed--
		}
		this.calculateStatus()
	}
}

export{ Hangman as default}

