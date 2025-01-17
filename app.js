let amigos = [];

function exibeTextoTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMsgInicial() {
    exibeTextoTela('h1', `Jogo do amigo secreto!!`);
    listaAmigos(`ul`, amigos.push);
}

exibirMsgInicial();

function adicionarAmigo() {
    let adicionar = document.querySelector(`input`).value;
}

function verificarNome() {

}