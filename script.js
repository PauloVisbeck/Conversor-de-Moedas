//Variavel recebe o que está sendo digitado no input
let moeda1 = document.getElementById("vlrMoeda1")
// Altera virgula por ponto e converte para float o valor informado no input
let valor = parseFloat(moeda1.value.replace(',', '.'))
// Cada vez que o input recebe um evento, chama a função
moeda1.addEventListener("input", calculaValor)

//IMPORTANTE: Quando uma função for chamada dentro de um evento (como no evento de input acima), a chamada deve ser feita sem os parênteses, pois nesse caso se tiver os parênteses a função seria chamada imediatamente quando a linha fosse executada, independente de ter um evento de input ou não, o que ocasionaria um erro. Da forma como a função está sendo chamada (invocada) acima, fará que a sua execução SOMENTE OCORRA quando tiver o evento.


// Valor padrão (caso o usuário não faça nenhuma escolha ao carregar a página)
let opcEscolhida = "dolar"
//Mostra qual opção está setada ao carregar a página
console.log(opcEscolhida) 
//Recebe o valor escolhido no select
let opcao = document.getElementById("escolha")


function escolheMoeda() {
    opcEscolhida = opcao.value
    console.log(opcEscolhida)
    calculaValor()
}
//Quando o select sofrer alguma mudança, chama a função
opcao.addEventListener ("change", escolheMoeda)

 


//let valorMoedaNumerico = 0
function calculaValor() {
    //Lê o que está no input
    moeda1 = document.getElementById("vlrMoeda1")
    // Atualiza o valor digitado no input e o converte para número
    valor = parseFloat(moeda1.value.replace(',', '.'))

    if (isNaN(valor)) {
        console.log("O valor digitado não é um número válido.")
        return
    }

   let valorMoeda
    // Acessando a célula da tabela que contém o valor da moeda (formato de texto)
    if (opcEscolhida === "dolar") {
        valorMoeda = document.querySelector("table.cotacao tbody:nth-of-type(1) td:nth-of-type(3)").textContent;
    }
    else if (opcEscolhida === "euro") {
        valorMoeda = document.querySelector("table.cotacao tbody:nth-of-type(2) td:nth-of-type(3)").textContent;
    }
    else {
        valorMoeda = document.querySelector("table.cotacao tbody:nth-of-type(3) td:nth-of-type(3)").textContent;
    }

    // Altera virgula por ponto e converte valor da moeda de texto para float
    valorMoedaNumerico = parseFloat(valorMoeda.replace(',', '.'));
    
    
    console.log("Valor digitado: ", valor)
    console.log("Valor da moeda: ", valorMoedaNumerico)

    let resultadoConversao = valor / valorMoedaNumerico; 
    console.log("Resultado da conversão: ", resultadoConversao)
    
    let moeda2 = document.getElementById("vlrMoeda2")
    moeda2.value = resultadoConversao.toFixed(2)
}



    
    

    
    

    // Converte o valor de texto inserido em um número
    //let valorInserido = parseFloat(valor);

    


   
    

