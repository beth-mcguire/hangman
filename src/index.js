import uuidv4 from "uuid/v4"
import validator from "validator"
import Hangman from "./hangman"
import getPuzzle from "./requests"


console.log(uuidv4())
console.log(validator.isEmail("kasara@iskeli.com"))
const text = document.querySelector("#left")
const puzzleText = document.querySelector("#puzzle")
let game1

window.addEventListener("keypress", (e) => {
	const guess = String.fromCharCode(e.charCode)
	game1.makeGuess(guess)
	render()
	
})

const render = () => {
	puzzleText.innerHTML = " "
	text.textContent = game1.statusMessage

	game1.puzzle.split(" ").forEach((letter) => {
		const letterEl = document.createElement("span")
		letterEl.textContent = letter
		puzzleText.appendChild(letterEl)
	})

}

const startGame = async () => {
	const puzzle = await getPuzzle("3")
	game1 = new Hangman(puzzle, 5)
	render()
}

document.querySelector("#reset").addEventListener("click", startGame)

startGame()
