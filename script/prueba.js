// select your elements first - what is the user going to interact with?
// there are the targets => these are what the "user" uses
// this is a 1 to 1 connection to an element in the DOM
// let navButton = document.querySelector("#navButton");

// this is a 1 to many connection to elements in the DOM
// the variable name is the "basket"
let navButtons = document.querySelectorAll('#buttonHolder img'),
	theHeadline = document.querySelector('#headLine h1'),
	// collect the draggable pieces
	puzzlePieces = document.querySelectorAll(".puzzle-pieces img"),
	//collect all of the drop zone elements
	dropZones = document.querySelectorAll(".drop-zone"),
	puzzleBoard = document.querySelector('.puzzle-board'),
	tempLink = document.querySelector("a"),

	// set up a global variable to store a reference to the dragged piece
	//I need to know this later when i drop it on a zone
	draggPiece, element, element1, element2, element3, element4, otherTile;



function removePuzzle(){
	node = document.getElementById("puzzlecomplete");
	
	if (node.parentNode) {
		node.parentNode.appendChild(node)
	}
	

		element = document.getElementById("puzzlecomplete");
		while (element.firstChild) {
			element.appendChild(element.firstChild);
	}

		element1 = document.getElementById("puzzlecomplete1");
		while (element1.firstChild) {
			element1.appendChild(element1.firstChild);

		}

		element2 = document.getElementById("puzzlecomplete2");
		while (element2.firstChild) {
			element2.appendChild(element2.firstChild);
		}

		element3 = document.getElementById("puzzlecomplete3");
		while (element3.firstChild) {
		element3.removeChild(element3.firstChild);
		}

		element4 = document.getElementById("puzzlecomplete4");
		while (element4.firstChild) {
		element4.removeChild(element4.firstChild);
		}
}
// functions go in the middle
// these are the "actions" that should happen

// function resetPieces(){
// 	var ok = false;

// 	document.getElementById("text").onclick = function () {
//     ok = true;
// };
// }


function changeBGImage(){
	// object.property = new value
	// theHeadLine.textContent = "Junior tu papa";
	// theHeadLine.classList.add("orange-headline");

	// let newBGPath = "images/backGround"	+ this.id + ".jpg";
	// debugger;
	
	//Change the background image in the drop zone
	// The `${} is called a Javascript Template String - whatever is inside the curly
	// braces is evaluated at runtime and interpolated (replaces the bracket notation)

	// You can use variables etc online in your code this way
	removePuzzle()
	puzzleBoard.style.backgroundImage = `url(images/backGround${this.id}.jpg)`;

}




function handleStartDrag(){
	console.log("start dragging a piece!", this);
	//store the element I am currently dragging in that global draggedPiece variable
	draggPiece = this;
}

function handleDragOver(e){
	//block the fault behaviour
	e.preventDefault();

	console.log("dragging over me");
}

function handleDrop(e){
	//block the fault behaviour
	e.preventDefault();

	//and then do whatever you want
	console.log("dropped on me!");
	
	
	e.target.appendChild(draggPiece) //lo agrega al div como img 
}

// function dragEnd() {
//     if (draggPiece.src.includes(draggPiece)) {
//         return;
//     }
//     let currImg = draggPiece.src;
//     let otherImg = otherTile.src;
//     draggPiece.src = otherImg;
//     otherTile.src = currImg;
// }

// event handling at the bottom -> how things react when you use the targets
// how is the user going to interact with the elements / controls you provide?

// 1 to 1 event handling (1 variable, one element):
// navButton.addEventListener('click', changeBGImage);

// 1 to many event handling (1 variable, many elements):
// process a collection of elements and add an event handler to each
navButtons.forEach(button => button.addEventListener('click', changeBGImage));

// add the drag start handler to all the puzzle pieces
puzzlePieces.forEach(piece => piece.addEventListener("dragstart", handleStartDrag));

dropZones.forEach(zone => zone.addEventListener("dragover", handleDragOver))
dropZones.forEach(zone => zone.addEventListener("drop", handleDrop))




function blockDefaultBehaviour(e){ //e is shorthand for evenet -> in this case the nav event
	//dont let the default behaviour of certain elements happen - block it
	e.preventDefault();
}


//temp handling
tempLink.addEventListener("click", blockDefaultBehaviour);