let prompt = require('prompt-sync')()
let dataAtual = new Date();
participantes = 0
let cadastrar = [participantes]
let cadastrarOutro

console.log("------------BEM VINDO AO CADASTRADOR DE EVENTOS----------")
console.log("Siga os passos a seguir para cadastrar seu evento :D")


let ano = prompt("Informe o ANO do evento: ")
let mes = prompt("Informe o MES do evento: ")
let dia = prompt("Informe o DIA do evento: ")

let dataEvento = new Date (ano, mes, dia);

if(dataEvento >= dataAtual) {
    console.log("DATA VALIDA PARA O EVENTO")

} else {
    console.log("*****  DATA INVALIDA PARA CADASTRO  *****")
    console.log("*****  PROGAMA ENCERRADO  *****")
    process.exit(0);
}

let idade = prompt ("Agora, informe sua IDADE: ")
if (idade >= 18) {
    console.log("\nCADASTRO PERMITIDO")
} else {
    console.log("\nCADASTRO NAO PERMITIDO POR CAUSA DA IDADE")
}



    cadastrar = prompt ("Informe o nome do participante para cadastro: ")

    console.log("\nPARTICIPANTE CADASTRADO COM SUCESSO!!\n\n")
    participantes++;
   

    while (participantes < 100) {
        cadastrarOutro = prompt("Deseja cadastrar outro participante? SIM ou NAO? ")
    if (cadastrarOutro == "SIM") {
      cadastrar = prompt ("Informe o nome do participante para cadastro: ")
    console.log("\nPARTICIPANTE CADASTRADO COM SUCESSO!!\n\n")  
    participantes++;

    } else {
        console.log("\n\n\nTODOS OS CADASTROS FORAM FINALIZADOS COM SUCESSO\n")
        console.log("AGUARDO VOCE NO EVENTO :D")
        console.log("PROGRAMA FINALIZADO")
        process.exit(0);   
    }
}
    console.log("CADASTROS NÃO MAIS PERMITIDOS POR TER EXCEDIDO O LIMITE DE PARTICIPANTES")
    process.exit(0);


   




   
   
   
   
   
   
    
        

                    

           