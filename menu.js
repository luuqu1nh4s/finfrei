import prompt from 'prompt-sync';
let ler = prompt();

export function menu(option){
    let opcao
    console.log ("Escolha entre as opções abaixo:");
    console.log ("1 - Depositar dinheiro.");
    console.log ("2 - Sacar dinheiro.");
    console.log ("3 - Exibir saldo.");
    console.log ("4 - Investir");
    console.log ("5 - Sair");
    opcao = ler()
    return opcao
}