var score = 0;
var mistakes = 0;
var gameboard = document.getElementById("game-board");
var keyboard = document.getElementById("keyboard");
var template = document.querySelector("#template-letter");
var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var words = ["recicling", "forbidden", "spring", "fromage", "lasagna"];
var currentWord = words[Math.floor(Math.random() * words.length)];
var hiddenWordText = "";

document.getElementById("guess").innerHTML = currentWord; // optional

function generatePlayground() {
	for (var i = 0; i < currentWord.length; i++) {
		hiddenWordText += "_";
		document.getElementById("current").innerHTML = hiddenWordText;
	}
}

function updatePlayground(letter) {
	let updatedWord = hiddenWordText.split("");

	for (var i = 0; i < currentWord.length; i++) {
		// if the character at position i == letter, add the letter in updatedWord
		if (currentWord.charAt(i) == letter) {
			updatedWord[i] = letter;
		}
	}

	hiddenWordText = updatedWord.join("");
	document.getElementById("current").innerHTML = hiddenWordText;
}

function updateScore() {
	score += 10;
	document.getElementById("pointsEarned").innerHTML = score;
}

function mistakesExceeded() {
	return mistakes > parseInt(currentWord.length/2);
}

function wordFound() {
	return hiddenWordText == currentWord;
}

generatePlayground();

// Generate the buttons keyboard using the template (#template-letter) from index.html
letters.forEach((letter, index) => {
    var clone = document.importNode(template.content, true); // div.letter
	var buttonTags = clone.querySelectorAll("button");

    buttonTags[0].textContent = letter;
    buttonTags[0].parentNode.classList.add("mx-auto");
	keyboard.appendChild(clone);
});

keyboard.children[24].classList.replace("mx-auto", "ml-auto");
keyboard.children[25].classList.replace("mx-auto", "mr-auto");

document.querySelectorAll("button.letter").forEach( function(button) {
    button.addEventListener("click", function() {
		if (currentWord.includes(button.textContent)) {
			updatePlayground(button.textContent); // change hiddenWordText by adding the new letter all over
			updateScore();
		} else {
			mistakes += 1;
			button.classList.remove("btn-info");
			button.classList.add("btn-danger");
		}

		if (mistakesExceeded()) {
			document.getElementById("game").classList.add("d-none");
			document.getElementById("lostGame").classList.remove("d-none");
			document.getElementById("lostGame").classList.add("d-flex");
		}

		if (wordFound()) {
			document.getElementById("game").classList.add("d-none");
			document.getElementById("winGame").classList.remove("d-none");
			document.getElementById("winGame").classList.add("d-flex");
		}
    });
});

document.querySelectorAll("button.play-again").forEach( function(playAgainButton) {
	playAgainButton.addEventListener("click", function() {
		window.location.reload();
	});
});
