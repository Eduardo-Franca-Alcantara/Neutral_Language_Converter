let textoNormal;
let textoJaConvertido;
function pegarTexto() {
    textoNormal = document.getElementById("textoNaoConvertido").value;
    textoJaConvertido = document.getElementById("textoConvertido");
    textoJaConvertido.value = "";

    const VOGAIS = ["a", "e", "i", "o", "u"];
    let textoNeutro = [];

    arraySeparado = textoNormal.split(" ");

    arraySeparado.map((item, indice) => {

        let posicaoArraySeparada = item.split("");

        posicaoArraySeparada = posicaoArraySeparada.reverse();


        for (let i = 0; i <= posicaoArraySeparada.length; i++) {
            if (VOGAIS.includes(posicaoArraySeparada[i])) {
                posicaoArraySeparada[i] = "e";
                break;
            }

        }

        posicaoArraySeparada = posicaoArraySeparada.reverse();
        posicaoArraySeparada = posicaoArraySeparada.join("");
        posicaoArraySeparada += " ";
        console.log(posicaoArraySeparada);
        textoJaConvertido.value += posicaoArraySeparada;
    })
}