import prompt from 'prompt-sync';
let ler = prompt();
import {menu} from './menu.js'
import {depositar, sacar, exibirSaldo, investir} from "./financeiro.js";
import {message, lerNumero} from "./exibicao.js";

let inicio = message(
`Olá! Seja muito bem-vindo(a) ao FINFREI! 
Desde já, agradecemos pela sua preferência.`)

let meu = lerNumero ("Informe o seu saldo:")

let seguir = true

while (seguir){
    let option = menu()
    if (option == "5"){
        seguir = false
    }

    else{
        if (option == "1"){
            let um = depositar(meu)
            console.log (um)
        }
        else if (option == "2"){
            let dois = sacar(meu)
            console.log (dois)
        }
        else if (option == "3"){
            let tres = exibirSaldo(meu)
            console.log (tres)
        }
        else if (option == "4"){
            let quatro = investir(meu)
            console.log (quatro)
        }
    }
}