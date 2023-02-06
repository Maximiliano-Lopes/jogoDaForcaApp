var wordsAll = [];
let result = [];
let randomWord = "";
let erros = -1;
let letrasPossiveis = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let letrasUsadas = [];
var letra = "";

async function buscaDados() {
  const words = await fetch("/jogoDaForcaApp/data/word.json").then((res) => res.json());

  selectRamdomWord(words);
}
buscaDados();

function selectRamdomWord(words) {
  /*JOGO NO MODO FÁCIL*/
  let randomNumber = Math.floor(Math.random() * 68);
  randomWord = words.bancoDePalavras[randomNumber];

  for (i = 0; i < randomWord.length; i++) {
    result.push("_");
  }
}

function jogoForca(letra) {
    var divEscolhas = document.getElementById("areaDeEscolhas")
    divEscolhas.classList.remove("desabilitado")
    

  if (letra == "inicial") {
    const tracosLetras = `
        <div id='tracosLetras' style="font-size: 5vw;">
            <p id="tracosContent">${result.join(" ")}</p>
        </div>`;

    var divteste = document.getElementById("divteste");
    divteste.innerHTML = tracosLetras;

    var buttonJogar = document.getElementById("buttonJogar")
    buttonJogar.classList.add("desabilitado")

    var areaDeEscolhas = document.getElementById("areaDeEscolhas")

    var inputs = `<input
    type="button"
    value="a"
    onclick="jogoForca(this.value)"
    class="inputLetra"
  />
  <input
    type="button"
    value="b"
    onclick="jogoForca(this.value)"
    class="inputLetra"
  />
  <input
    type="button"
    value="c"
    onclick="jogoForca(this.value)"
    class="inputLetra"
  />
  <input
    type="button"
    value="d"
    onclick="jogoForca(this.value)"
    class="inputLetra"
  />
  <input
    type="button"
    value="e"
    onclick="jogoForca(this.value)"
    class="inputLetra"
  />
  <input
    type="button"
    value="f"
    onclick="jogoForca(this.value)"
    class="inputLetra"
  />
  <input
    type="button"
    value="g"
    onclick="jogoForca(this.value)"
    class="inputLetra"
  />
  <input
    type="button"
    value="h"
    onclick="jogoForca(this.value)"
    class="inputLetra"
  />
  <input
    type="button"
    value="i"
    onclick="jogoForca(this.value)"
    class="inputLetra"
  />
  <input
    type="button"
    value="j"
    onclick="jogoForca(this.value)"
    class="inputLetra"
  />
  <input
    type="button"
    value="k"
    onclick="jogoForca(this.value)"
    class="inputLetra"
  />
  <input
    type="button"
    value="l"
    onclick="jogoForca(this.value)"
    class="inputLetra"
  />
  <input
    type="button"
    value="m"
    onclick="jogoForca(this.value)"
    class="inputLetra"
  />
  <input
    type="button"
    value="n"
    onclick="jogoForca(this.value)"
    class="inputLetra"
  />
  <input
    type="button"
    value="o"
    onclick="jogoForca(this.value)"
    class="inputLetra"
  />
  <input
    type="button"
    value="p"
    onclick="jogoForca(this.value)"
    class="inputLetra"
  />
  <input
    type="button"
    value="q"
    onclick="jogoForca(this.value)"
    class="inputLetra"
  />
  <input
    type="button"
    value="r"
    onclick="jogoForca(this.value)"
    class="inputLetra"
  />
  <input
    type="button"
    value="s"
    onclick="jogoForca(this.value)"
    class="inputLetra"
  />
  <input
    type="button"
    value="t"
    onclick="jogoForca(this.value)"
    class="inputLetra"
  />
  <input
    type="button"
    value="u"
    onclick="jogoForca(this.value)"
    class="inputLetra"
  />
  <input
    type="button"
    value="v"
    onclick="jogoForca(this.value)"
    class="inputLetra"
  />
  <input
    type="button"
    value="w"
    onclick="jogoForca(this.value)"
    class="inputLetra"
  />
  <input
    type="button"
    value="x"
    onclick="jogoForca(this.value)"
    class="inputLetra"
  />
  <input
    type="button"
    value="y"
    onclick="jogoForca(this.value)"
    class="inputLetra"
  />
  <input
    type="button"
    value="z"
    onclick="jogoForca(this.value)"
    class="inputLetra"
  />`

  areaDeEscolhas.innerHTML = inputs
  }

  let numeroDeLetras = randomWord.length;

  let tracosJogo = randomWord.toLowerCase().split("");

  verificarResposta(tracosJogo, letra);
}

function verificarResposta(tracosJogo, letra) {
  var divteste = document.getElementById("divteste");
  var areaDaForca = document.getElementById("areaDaForca")
  var spanChances = document.getElementById("spanChances")
  var posicoes = [];
  var i = -1;
  var bonecoEnforcado = ""
  let letraCertas = [];
  var chances = 6
  

  if (tracosJogo.includes(letra) == true) {
    tracosJogo.forEach((letraPalavra) => {
      i += 1;
      if (letraPalavra == letra) {
        posicoes.push(i);
        letraCertas.push(letra);

        posicoes.forEach((indexCerto) => {
          result[parseInt(indexCerto)] = letra;
        });       
      }
    });
    const tracosLetras = `
         <div id='tracosLetras' style="font-size: 5vw;">
             <p id="tracosContent">${result.join(" ")}</p>
         </div>`;

    divteste.innerHTML = tracosLetras;

    if (result.join("") == Array.from(randomWord).join("").toLowerCase()) {
     alert("ACERTOU! \n A palavra era: " + randomWord)
     location.reload();
    }
  } else {
    if (erros == -1) {
     bonecoEnforcado = `
            <span id="spanChances">Chances: ${chances}</span>
                <div id="forca">
                    
                    <div id='bonecoEnforcado' style="font-size: 5vw;">
                        <div id="head"></div>
                        <div id="tronco">
                            <div id="leftArm"> </div>
                            <div id="bodyBoneco"> </div>
                            <div id="rightArm"> </div>
                        </div>
                        <div id="pernas">
                            <div id="leftLeg"> </div>
                            <div id="rightLeg"> </div>
                        </div>
                    </div>
                </div>`;
                areaDaForca.innerHTML = bonecoEnforcado;
    }
    else if (erros == 0) {
        var cabeca = document.getElementById("head")
        cabeca.classList.add("headOn")
        chances -= 1
        spanChances.innerHTML = `Chances: ${chances}`
    } else if (erros == 1) {
        var corpo = document.getElementById("bodyBoneco")
        corpo.classList.add("bodyOn")
        spanChances.innerHTML = `Chances: ${chances-2}`
    } else if (erros == 2) {
        var bracoDireito = document.getElementById("rightArm")
        bracoDireito.classList.add("rightArmOn")
        spanChances.innerHTML = `Chances: ${chances-3}`
    } else if (erros == 3) {
        var bracoEsq = document.getElementById("leftArm")
        bracoEsq.classList.add("leftArmOn")
        spanChances.innerHTML = `Chances: ${chances-4}`
    } else if (erros == 4) {
        var pernaEsq = document.getElementById("leftLeg")
        pernaEsq.classList.add("leftLegOn")
        spanChances.innerHTML = `Chances: ${chances-5}`
    } else if (erros == 5) {
        var pernaDir = document.getElementById("rightLeg")
        pernaDir.classList.add("rightLegOn")
        spanChances.innerHTML = `Chances: última chance!!`
    } else if (erros == 6) {
      alert("Poxa vida, você perdeu...\n A palavra era: "+ randomWord +"\nTente novamente!");
      reiniciarJogo(erros);
    }
    erros += 1;
  }
  
}

function reiniciarJogo(erros) {
  if (erros == 6) {
    location.reload();
  }
}
