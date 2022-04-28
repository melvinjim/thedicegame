document.getElementById('hold').addEventListener('click', function() {
    var firstFace = document.getElementById("boxs");
    firstFace.classList.remove("none");

    var secondFace = document.getElementById("image-gif");
    secondFace.classList.remove("flex");

    aleatorioUno = Math.round(Math.random()*6);
    console.log(aleatorioUno);

    uno = aleatorioUno;
    tres = aleatorioUno;
    cuatro = aleatorioUno;
    cinco = aleatorioUno;
    seis = aleatorioUno;
    siete = aleatorioUno;
    nueve = aleatorioUno;

    if(uno == 2 || uno == 4 || uno == 5 || uno == 6){
        ladoDos = document.getElementById("uno");
        ladoDos.classList.add("visibility");
    } else if(uno != 2 || uno != 3 || uno != 4 || uno != 5 || uno != 6){
        ladoDos = document.getElementById("uno");
        ladoDos.classList.remove("visibility");
    }

    if(tres== 3 || tres == 6 || tres == 5 || tres == 4){
        ladoTres = document.getElementById("tres")
        ladoTres.classList.add("visibility");
    }else if(tres != 6 || tres != 5 || tres != 4){
        ladoTres = document.getElementById("tres")
        ladoTres.classList.remove("visibility")
    }

    if(cuatro == 6){
        ladoCuatro = document.getElementById("cuatro")
        ladoCuatro.classList.add("visibility");
    } else if(cuatro != 6){
        ladoCuatro = document.getElementById("cuatro")
        ladoCuatro.classList.remove("visibility")
    }

    if(cinco == 1 || cinco == 3 || cinco == 5){
        ladoUno = document.getElementById("cinco")
        ladoUno.classList.add("visibility");
    }else if(cinco != 1){
        ladoUno = document.getElementById("cinco")
        ladoUno.classList.remove("visibility")
    }

    if(seis == 6){
        ladoSeis = document.getElementById("seis")
        ladoSeis.classList.add("visibility");
    } else if(seis != 6){
        ladoSeis = document.getElementById("seis")
        ladoSeis.classList.remove("visibility")
    }

    if(siete == 6 || siete == 3 || siete == 4 | siete == 5){
        ladoSiete = document.getElementById("siete")
        ladoSiete.classList.add("visibility");
    } else if(siete != 6 || siete != 3 || siete != 4 || siete != 5){
        ladoSiete = document.getElementById("siete")
        ladoSiete.classList.remove("visibility")
    }

    if(nueve == 6 || nueve == 4 || nueve == 2 | nueve == 5){
        ladoNueve = document.getElementById("nueve")
        ladoNueve.classList.add("visibility");
    } else if(nueve != 6 || nueve != 4 || nueve != 2 || nueve != 5){
        ladoNueve = document.getElementById("nueve")
        ladoNueve.classList.remove("visibility")
    }

    aleatorioDos = Math.round(Math.random()*6);
    console.log(aleatorioDos);

    unoD = aleatorioDos;
    tresD = aleatorioDos;
    cuatroD = aleatorioDos;
    cincoD = aleatorioDos;
    seisD = aleatorioDos;
    sieteD = aleatorioDos;
    nueveD = aleatorioDos;

    if(unoD == 2 || unoD == 4 || unoD == 5 || unoD == 6){
        ladoDos = document.getElementById("uno-d");
        ladoDos.classList.add("visibility");
    } else if(unoD != 2 || unoD != 3 || unoD != 4 || unoD != 5 || unoD != 6){
        ladoDos = document.getElementById("uno-d");
        ladoDos.classList.remove("visibility");
    }

    if(tresD == 3 || tresD == 6 || tresD == 5 || tresD == 4){
        ladoTres = document.getElementById("tres-d")
        ladoTres.classList.add("visibility");
    }else if(tresD != 6 || tresD != 5 || tresD != 4){
        ladoTres = document.getElementById("tres-d")
        ladoTres.classList.remove("visibility")
    }

    if(cuatroD == 6){
        ladoCuatro = document.getElementById("cuatro-d")
        ladoCuatro.classList.add("visibility");
    } else if(cuatroD != 6){
        ladoCuatro = document.getElementById("cuatro-d")
        ladoCuatro.classList.remove("visibility")
    }

    if(cincoD == 1 || cincoD == 3 || cincoD == 5){
        ladoUno = document.getElementById("cinco-d")
        ladoUno.classList.add("visibility");
    }else if(cincoD != 1 || cincoD != 3 || cincoD != 5){
        ladoUno = document.getElementById("cinco-d")
        ladoUno.classList.remove("visibility")
    }

    if(seisD == 6){
        ladoSeis = document.getElementById("seis-d")
        ladoSeis.classList.add("visibility");
    } else if(seisD != 6){
        ladoSeis = document.getElementById("seis-d")
        ladoSeis.classList.remove("visibility")
    }

    if(sieteD == 6 || sieteD == 3 || sieteD == 4 | sieteD == 5){
        ladoSiete = document.getElementById("siete-d")
        ladoSiete.classList.add("visibility");
    } else if(sieteD != 6 || sieteD != 3 || sieteD != 4 || sieteD != 5){
        ladoSiete = document.getElementById("siete-d")
        ladoSiete.classList.remove("visibility")
    }

    if(nueveD == 6 || nueveD == 4 || nueveD == 2 | nueveD == 5){
        ladoNueve = document.getElementById("nueve-d")
        ladoNueve.classList.add("visibility");
    } else if(nueveD != 6 || nueveD != 4 || nueveD != 2 || nueveD != 5){
        ladoNueve = document.getElementById("nueve-d")
        ladoNueve.classList.remove("visibility")
    }

    var suma = aleatorioUno + aleatorioDos;
    document.getElementById("result").innerHTML = suma;
});