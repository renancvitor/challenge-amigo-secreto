let amigos = [];

function exibeTextoTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirListaAmigos() {
    let listaAmigos = document.getElementById(`listaAmigos`);

    listaAmigos.innerHTML = ``;

    amigos.forEach(amigo => {
        let item = document.createElement(`li`);
        item.textContent = amigo;
        listaAmigos.appendChild(item);
    })
}

function adicionarAmigo() {
    let inputDoAmigo = document.getElementById(`amigo`);
    let nome = inputDoAmigo.value.trim();

    if (nome=== "") {
        alert(`Por favor, insira um nome válido.`);
        return;
    }

    if (amigos.includes(nome)) {
        alert(`Este nome já foi adicionado.`);
        return;
    }

    amigos.push(nome);
    exibirListaAmigos();
    limparCampo();
}

function exibirResultado(amigoSecretoSorteado) {
    let listaSorteado = document.getElementById(`resultado`);
    listaSorteado.innerHTML = ``;

    let li = document.createElement(`li`);
    li.textContent = `${amigoSecretoSorteado} foi o amigo secreto sorteado!.`;
    listaSorteado.appendChild(li);
}

function limparCampo() {
    inputDoAmigo = document.querySelector(`input`);
    inputDoAmigo.value = ``;
}

