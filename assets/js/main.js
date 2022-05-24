let zeichen = document.getElementById('zeichenfolge');
let schlussel = document.getElementById('schlussel');
let output = document.getElementById('output');

let arrKlarAbc = [{ letter: "a" }, { letter: "b" }, { letter: "c" }, { letter: "d" }, { letter: "e" }, { letter: "f" }, { letter: "g" }, { letter: "h" }, { letter: "i" }, { letter: "j" }, { letter: "k" }, { letter: "l" }, { letter: "m" }, { letter: "n" }, { letter: "o" }, { letter: "p" }, { letter: "q" }, { letter: "r" }, { letter: "s" }, { letter: "t" }, { letter: "u" }, { letter: "v" }, { letter: "w" }, { letter: "x" }, { letter: "y" }, { letter: "z" }];

const caesarCipher = () => {
    let zeichenVal = zeichen.value;
    for (let k = 0; k < Number(zeichenVal.length); k++) {
        for (let i = 0; i < Number(arrKlarAbc.length); i++) {
            if (zeichenVal[k] == arrKlarAbc[i].letter) {
                console.log(arrKlarAbc[i + Number(schlussel.value)].letter.toUpperCase());
                output.innerHTML += arrKlarAbc[i + Number(schlussel.value)].letter.toUpperCase();
            }
        }
    }
}


