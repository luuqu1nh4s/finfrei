import prompt from 'prompt-sync';
let ler = prompt();
import {lerInfo, lerNumero} from "./exibicao.js";

export function depositar(saldo){
    let novoSaldo = 0
    let cancel = false

    let depositado = lerInfo("Informe o valor que você deseja depositar:");

    while (depositado <= "0" && cancel){
        console.log ("O valor informado é inválido. Informe um valor maior que 0 (zero). Caso queira cancelar a operação, digite C:");
        depositado = ler()

        if (depositado == "C"){
            cancel = true
        }
    }

    if (depositado == "C"){
        depositado = "0"
    }

    depositado = Number(depositado)
    novoSaldo = saldo + depositado
    return `Seu saldo atual é R$${novoSaldo.toFixed(2)}`
}

export function sacar(saldo){
    let novoSaldo = 0
    let cancel = false

    let sacado = lerInfo ("Informe o valor que você deseja sacar:");

    while (sacado <= "0" && cancel){
        console.log ("O valor informado é inválido. Informe um valor maior que 0 (zero). Caso queira cancelar a operação, digite C:");
        sacado = ler()

        if (sacado == "C"){
            cancel = true
        }
    }

    if (sacado == "C"){
        sacado = "0"
    }

    sacado = Number(sacado)
    novoSaldo = saldo - sacado
    return `Seu saldo atual é R$${novoSaldo.toFixed(2)}`
}

export function exibirSaldo(saldo){
    return `Seu saldo atual é R$${saldo.toFixed(2)}`
}

export function investir(saldo, investido, tempo, taxa){
    investido = lerInfo ("Informe o valor que você deseja investir:");
    while (investido > saldo){
        console.log ("Você não tem saldo o suficiente. Informe outro valor ou digite C caso queira cancelar a operação");
        investido = ler()
    }
    
    if (investido == "C"){
        investido = "0"
    }

    else{
        investido = Number (investido)
        saldo = saldo - investido
        
        let tempo = lerNumero ("Informe o tempo de investimento (em meses):");
        let taxa = lerNumero ("Informe a porcentagem da taxa de juros:");

        investido = investido * ((1 + (taxa / 100)) ** tempo)

        console.log (`Seu lucro é de R$${investido.toFixed(2)}`)
    }
        
    saldo = saldo + investido
    return `Seu saldo atual é R$${saldo.toFixed(2)}`
}