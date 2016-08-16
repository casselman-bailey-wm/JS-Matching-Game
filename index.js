var numberOfFaces = 5;
var theLeftSide = document.getElementById("leftSide");
var theRightSide = document.getElementById("rightSide")

function generateFaces() {
    for (var i = 0; i < numberOfFaces; i++) {

    var cena = document.createElement('img');
    cena.src = "johncena.png";
    cena.style.left = Math.random() * 400 + "px";
    cena.style.top = Math.random() * 357 + "px";
    theLeftSide.appendChild(cena);
    }
    var leftSideClone = theLeftSide.cloneNode(true);
    leftSideClone.removeChild(leftSideClone.lastChild);
    theRightSide.appendChild(leftSideClone);

    var theBody =document.getElementById("body");
    theLeftSide.lastChild.onclick= function nextLevel(event){
        event.stopPropagation();
        theLeftSide.innerHTML ="";
        theRightSide.innerHTML ="";
        if ( numberOfFaces >= 150){
            alert("You Win!")
        }
        else{
        numberOfFaces += 5;
        generateFaces();
        }
    };

    document.body.onclick = function gameOver(){
        alert("Game Over!");
        theBody.onclick =null;
        theLeftSide.lastChild.onclick =null;
    };
}





