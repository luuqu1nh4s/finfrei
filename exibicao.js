import prompt from 'prompt-sync';
let ler = prompt();

export function message (mensagem){
    console.log (mensagem)
    return message
}

export function lerInfo (mensagem){
    console.log (mensagem)
    let info = ler()
    return info
}

export function lerNumero (mensagem){
    console.log (mensagem)
    let num = Number(ler())
    return num
}
