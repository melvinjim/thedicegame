var buttonDisable = document.getElementById("hold")
buttonDisable.classList.add("disabled-button")

document.getElementById('roll').addEventListener('click', function() {
    var firstFace = document.getElementById("dices");
    firstFace.classList.add("none");

    var secondFace = document.getElementById("image-gif");
    secondFace.classList.add("flex");

    buttonDisable.classList.remove("disabled-button")
});