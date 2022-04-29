document.getElementById('hold').addEventListener('click', function() {
    var firstFace = document.getElementById("dices");
    firstFace.classList.remove("none");

    var secondFace = document.getElementById("image-gif");
    secondFace.classList.remove("flex");

    var min = 1;
    var max = 7;
    var firstNumber = Math.floor(Math.random() * (+max - +min)) + +min; 
    console.log(firstNumber);

    var min = 1;
    var max = 7;
    var secondNumber = Math.floor(Math.random() * (+max - +min)) + +min;
    console.log(secondNumber);

    var firstRow = document.getElementsByClassName("first-row");
    firstRow = firstRow[0];

    var secondRow = document.getElementsByClassName("second-row");
    secondRow = secondRow[0];

    var thirdRow = document.getElementsByClassName("third-row");
    thirdRow = thirdRow[0];

    var firstRowRight = document.getElementsByClassName("first-row-right");
    firstRowRight = firstRowRight[0];

    var secondRowRight = document.getElementsByClassName("second-row-right");
    secondRowRight = secondRowRight[0];

    var thirdRowRight = document.getElementsByClassName("third-row-right");
    thirdRowRight = thirdRowRight[0];

    var firstBall = firstRow.getElementsByClassName("first-ball");
    var firstballRight = firstRowRight.getElementsByClassName("first-ball");
    for (x=0;x<firstBall.length;x++){
        if(firstNumber == 2 || firstNumber == 4 || firstNumber == 6 || firstNumber == 5){
            firstBall[x].classList.add("visibility");
        } else {
            firstBall[x].classList.remove("visibility");
        }
        for (x=0;x<firstballRight.length;x++){
            if(secondNumber == 2 || secondNumber == 4 || secondNumber == 6 || secondNumber == 5){
                firstballRight[x].classList.add("visibility");
            } else {
                firstballRight[x].classList.remove("visibility");
            }
        }
    }

    var secondBall = secondRow.getElementsByClassName("first-ball");
    var secondBallRight = secondRowRight.getElementsByClassName("first-ball");
    for (x=0;x<secondBall.length;x++){
        if(firstNumber == 6){
            secondBall[x].classList.add("visibility");
        } else {
            secondBall[x].classList.remove("visibility");
        }
        for (x=0;x<secondBallRight.length;x++){
            if(secondNumber == 6){
                secondBallRight[x].classList.add("visibility");
            } else {
                secondBallRight[x].classList.remove("visibility");
            }
        }
    }

    var thirdBall = thirdRow.getElementsByClassName("first-ball");
    var thirdBallRight = thirdRowRight.getElementsByClassName("first-ball");
    for (x=0;x<thirdBall.length;x++){
        if(firstNumber == 4 || firstNumber == 6 || firstNumber == 5 || firstNumber == 3){
            thirdBall[x].classList.add("visibility");
        } else {
            thirdBall[x].classList.remove("visibility");
        }
        for (x=0;x<thirdBallRight.length;x++){
            if(secondNumber == 4 || secondNumber == 6 || secondNumber == 5 || secondNumber == 3){
                thirdBallRight[x].classList.add("visibility");
            } else {
                thirdBallRight[x].classList.remove("visibility");
            }
        }
    }

    var secondBall = secondRow.getElementsByClassName("second-ball");
    secondBallRight = secondRowRight.getElementsByClassName("second-ball");
    for (x=0;x<secondBall.length;x++){
        if(firstNumber == 1 ||firstNumber == 5 || firstNumber == 3){
            secondBall[x].classList.add("visibility");
        } else {
            secondBall[x].classList.remove("visibility");
        }
        for (x=0;x<secondBallRight.length;x++){
            if(secondNumber == 1 || secondNumber == 5 || secondNumber == 3){
                secondBallRight[x].classList.add("visibility");
            } else {
                secondBallRight[x].classList.remove("visibility");
            }
        }
    }

    var firstBall = firstRow.getElementsByClassName("third-ball");
    var firstballRight = firstRowRight.getElementsByClassName("third-ball")
    for (x=0;x<firstBall.length;x++){
        if(firstNumber == 3 || firstNumber == 4 || firstNumber == 6 || firstNumber == 5){
            firstBall[x].classList.add("visibility");
        } else {
            firstBall[x].classList.remove("visibility");
        }
        for (x=0;x<firstballRight.length;x++){
            if(secondNumber == 3 || secondNumber == 4 || secondNumber == 6 || secondNumber == 5){
                firstballRight[x].classList.add("visibility");
            } else {
                firstballRight[x].classList.remove("visibility");
            }
        }
    }

    var secondBall = secondRow.getElementsByClassName("third-ball");
    var secondBallRight = secondRowRight.getElementsByClassName("third-ball");
    for (x=0;x<secondBall.length;x++){
        if(firstNumber == 6){
            secondBall[x].classList.add("visibility");
        } else {
            secondBall[x].classList.remove("visibility");
        } 
        for (x=0;x<secondBallRight.length;x++){
            if(secondNumber == 6){
                secondBallRight[x].classList.add("visibility");
            } else {
                secondBallRight[x].classList.remove("visibility");
            }
        }
    }

    var thirdBall = thirdRow.getElementsByClassName("third-ball");
    var thirdBallRight = thirdRowRight.getElementsByClassName("third-ball");
    for (x=0;x<thirdBall.length;x++){
        if(firstNumber == 2 || firstNumber == 4 || firstNumber == 6 || firstNumber == 5){
            thirdBall[x].classList.add("visibility");
        } else {
            thirdBall[x].classList.remove("visibility");
        }
        for (x=0;x<thirdBallRight.length;x++){
            if(secondNumber == 2 || secondNumber == 4 || secondNumber == 6 || secondNumber == 5){
                thirdBallRight[x].classList.add("visibility");
            } else {
                thirdBallRight[x].classList.remove("visibility");
            }
        }
    }

    var totalResult = firstNumber + secondNumber;
    document.getElementById("result").innerHTML = totalResult;
});