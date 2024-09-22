let moeda1 = document.getElementById("vlrMoeda1")
let valor = parseFloat(moeda1.value.replace(',', '.'))

moeda1.addEventListener("input", calculaValor)


let opcEscolhida = "dolar"
//console.log(opcEscolhida) 

let opcao = document.getElementById("escolha")


function escolheMoeda() {
    opcEscolhida = opcao.value
    console.log(opcEscolhida)
    calculaValor()
}

opcao.addEventListener ("change", escolheMoeda)

 
function calculaValor() {   
    moeda1 = document.getElementById("vlrMoeda1")
    valor = parseFloat(moeda1.value.replace(',', '.'))

    if (isNaN(valor)) {
        console.log("O valor digitado não é um número válido.")
        return
    }

    let valorMoeda    
    if (opcEscolhida === "dolar") {
        valorMoeda = document.querySelector("table.cotacao tbody:nth-of-type(1) td:nth-of-type(3)").textContent;
    }
    else if (opcEscolhida === "euro") {
        valorMoeda = document.querySelector("table.cotacao tbody:nth-of-type(2) td:nth-of-type(3)").textContent;
    }
    else {
        valorMoeda = document.querySelector("table.cotacao tbody:nth-of-type(3) td:nth-of-type(3)").textContent;
    }

    
    valorMoedaNumerico = parseFloat(valorMoeda.replace(',', '.'));
    
    
    //console.log("Valor digitado: ", valor)
    //console.log("Valor da moeda: ", valorMoedaNumerico)

    let resultadoConversao = valor / valorMoedaNumerico; 
    //console.log("Resultado da conversão: ", resultadoConversao)
    
    let moeda2 = document.getElementById("vlrMoeda2")
    moeda2.value = resultadoConversao.toFixed(2)
}  