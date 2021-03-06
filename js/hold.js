document.getElementById('hold').addEventListener('click', function() {
    var dices = document.getElementById("dices");
    dices.classList.remove("none");

    var images = document.getElementById("image-gif");
    images.classList.remove("flex");

    const boxes = document.getElementById("dices").getElementsByTagName("div");
    for (const box of boxes) {
        box.classList.remove('visibility');
    }

    var dice1 = printDice("left-dice");
    var dice2 = printDice("right-dice");

    document.getElementById("result").innerHTML = dice1 + dice2;
});

printDice = function(diceID,random){
    var min = 1;
    var max = 7;
    random = Math.floor(Math.random() * (+max - +min)) + +min;

    var dice = document.getElementById(diceID);

    var firstRow = dice.getElementsByClassName("first-row");
    firstRow = firstRow[0];

    var secondRow = dice.getElementsByClassName("second-row");
    secondRow = secondRow[0];

    var thirdRow = dice.getElementsByClassName("third-row");
    thirdRow = thirdRow[0];

    var firstBall = firstRow.getElementsByClassName("first-ball");
    if(random == 2 || random == 4 || random == 6 || random == 5){
        firstBall[0].classList.add("visibility");
    }

    var secondBall = secondRow.getElementsByClassName("first-ball");
    if(random == 6){
        secondBall[0].classList.add("visibility");
    }

    var thirdBall = thirdRow.getElementsByClassName("first-ball");
    if(random == 4 || random == 6 || random == 5 || random == 3){
        thirdBall[0].classList.add("visibility");
    } 

    var secondBall = secondRow.getElementsByClassName("second-ball");
    if(random == 1 ||random == 5 || random == 3){
        secondBall[0].classList.add("visibility");
    } 

    var firstBall = firstRow.getElementsByClassName("third-ball");
    if(random == 3 || random == 4 || random == 6 || random == 5){
        firstBall[0].classList.add("visibility");
    } 

    var secondBall = secondRow.getElementsByClassName("third-ball");
    if(random == 6){
        secondBall[0].classList.add("visibility");
    } 

    var thirdBall = thirdRow.getElementsByClassName("third-ball");
    if(random == 2 || random == 4 || random == 6 || random == 5){
        thirdBall[0].classList.add("visibility");
    } 

    return random;
}