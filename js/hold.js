document.getElementById('hold').addEventListener('click', function() {
    var firstFace = document.getElementById("boxs");
    firstFace.classList.remove("none");

    var secondFace = document.getElementById("image-gif");
    secondFace.classList.remove("flex");

    randomData = Math.round(Math.random()*6);
    console.log(randomData);

    if(randomData == 0){
        randomData = 1;
    }

    firstBall = randomData;
    thirdBall = randomData;
    fourthBall = randomData;
    fifthBall = randomData;
    sixthBall = randomData;
    seventhBall = randomData;
    ninthBall = randomData;

    if(firstBall == 2 || firstBall == 4 || firstBall == 5 || firstBall == 6){
        sideOne = document.getElementById("first-icon");
        sideOne.classList.add("visibility");
    } else if(firstBall != 2 || firstBall != 3 || firstBall != 4 || firstBall != 5 || firstBall != 6){
        sideOne = document.getElementById("first-icon");
        sideOne.classList.remove("visibility");
    }

    if(thirdBall == 3 || thirdBall == 6 || thirdBall == 5 || thirdBall == 4){
        sideThree = document.getElementById("third-icon");
        sideThree.classList.add("visibility");
    }else if(thirdBall != 6 || thirdBall != 5 || thirdBall != 4){
        sideThree = document.getElementById("third-icon");
        sideThree.classList.remove("visibility");
    }

    if(fourthBall == 6){
        sideFour = document.getElementById("fourth-icon");
        sideFour.classList.add("visibility");
    } else if(fourthBall != 6){
        sideFour = document.getElementById("fourth-icon");
        sideFour.classList.remove("visibility");
    }

    if(fifthBall == 1 || fifthBall == 3 || fifthBall == 5){
        sideFive = document.getElementById("fifth-icon");
        sideFive.classList.add("visibility");
    }else if(fifthBall != 1 || fifthBall != 3 || fifthBall != 5){
        sideFive = document.getElementById("fifth-icon");
        sideFive.classList.remove("visibility");
    }

    if(sixthBall == 6){
        sideSix = document.getElementById("sixth-icon");
        sideSix.classList.add("visibility");
    } else if(sixthBall != 6){
        sideSix = document.getElementById("sixth-icon");
        sideSix.classList.remove("visibility");
    }

    if(seventhBall == 6 || seventhBall == 3 || seventhBall == 4 | seventhBall == 5){
        sideSeven = document.getElementById("seventh-icon");
        sideSeven.classList.add("visibility");
    } else if(seventhBall != 6 || seventhBall != 3 || seventhBall != 4 || seventhBall != 5){
        sideSeven = document.getElementById("seventh-icon");
        sideSeven.classList.remove("visibility");
    }

    if(ninthBall == 6 || ninthBall == 4 || ninthBall == 2 | ninthBall == 5){
        sideNine = document.getElementById("ninth-icon");
        sideNine.classList.add("visibility");
    } else if(ninthBall != 6 || ninthBall != 4 || ninthBall != 2 || ninthBall != 5){
        sideNine = document.getElementById("ninth-icon");
        sideNine.classList.remove("visibility");
    }

    secondRandomData = Math.round(Math.random()*6);
    console.log(secondRandomData);

    if(secondRandomData == 0){
        secondRandomData = 3;
    }

    firstRightBall = secondRandomData;
    rightThirdBall = secondRandomData;
    rightFourthBall = secondRandomData;
    rightFifthBall = secondRandomData;
    rightSixthBall = secondRandomData;
    rightSeventhBall = secondRandomData;
    rightNinthBall = secondRandomData;

    if(firstRightBall == 2 || firstRightBall == 4 || firstRightBall == 5 || firstRightBall == 6){
        sideOneRight = document.getElementById("first-right-icon");
        sideOneRight.classList.add("visibility");
    } else if(firstRightBall != 2 || firstRightBall != 3 || firstRightBall != 4 || firstRightBall != 5 || firstRightBall!= 6){
        sideOneRight = document.getElementById("first-right-icon");
        sideOneRight.classList.remove("visibility");
    }

    if(rightThirdBall == 3 || rightThirdBall == 6 || rightThirdBall == 5 || rightThirdBall == 4){
        sideThreeRight = document.getElementById("third-right-icon");
        sideThreeRight.classList.add("visibility");
    } else if(rightThirdBall != 6 || rightThirdBall != 5 || rightThirdBall != 4){
        sideThreeRight = document.getElementById("third-right-icon");
        sideThreeRight.classList.remove("visibility");
    }

    if(rightFourthBall == 6){
        sideFourRight = document.getElementById("fourth-right-icon");
        sideFourRight.classList.add("visibility");
    } else if(rightFourthBall != 6){
        sideFourRight = document.getElementById("fourth-right-icon");
        sideFourRight.classList.remove("visibility");
    }

    if(rightFifthBall == 1 || rightFifthBall == 3 || rightFifthBall == 5){
        sideFiveRight = document.getElementById("fifth-right-icon");
        sideFiveRight.classList.add("visibility");
    } else if(rightFifthBall != 1 || rightFifthBall != 3 || rightFifthBall != 5){
        sideFiveRight = document.getElementById("fifth-right-icon");
        sideFiveRight.classList.remove("visibility");
    }

    if(rightSixthBall == 6){
        sideSixRight = document.getElementById("sixth-right-icon");
        sideSixRight.classList.add("visibility");
    } else if(rightSixthBall != 6){
        sideSixRight = document.getElementById("sixth-right-icon");
        sideSixRight.classList.remove("visibility");
    }

    if(rightSeventhBall == 6 || rightSeventhBall == 3 || rightSeventhBall == 4 || rightSeventhBall == 5){
        sideSevenRight = document.getElementById("seventh-right-icon");
        sideSevenRight.classList.add("visibility");
    } else if(rightSeventhBall != 6 || rightSeventhBall!= 3 || rightSeventhBall != 4 || rightSeventhBall != 5){
        sideSevenRight = document.getElementById("seventh-right-icon");
        sideSevenRight.classList.remove("visibility");
    }

    if(rightNinthBall == 6 || rightNinthBall == 4 || rightNinthBall == 2 | rightNinthBall == 5){
        sideNineRight = document.getElementById("ninth-right-icon");
        sideNineRight.classList.add("visibility");
    } else if(rightNinthBall != 6 || rightNinthBall != 4 || rightNinthBall != 2 || rightNinthBall != 5){
        sideNineRight = document.getElementById("ninth-right-icon");
        sideNineRight.classList.remove("visibility");
    }

    var totalResult = randomData + secondRandomData;
    document.getElementById("result").innerHTML = totalResult;
});