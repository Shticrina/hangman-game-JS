// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("modalBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-btn")[0];

function setNickname(name) {
	document.getElementById("username").innerHTML = name;
	document.querySelector("header h4.hello").classList.remove("d-none");
	document.getElementById("startGame").classList.add("d-none");
	document.getElementById("game").classList.remove("d-none");
	document.getElementById("score").classList.remove("d-none");
	modal.style.display = "none";
}

// When the user clicks on the button, open the modal
btn.onclick = function() {
  	modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  	modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}
