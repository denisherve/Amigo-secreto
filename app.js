let amigos = [];
let nome;
let input;
let indiceAleatorio;

// Função para adicionar amigo à lista
function adicionarAmigo() {
    input = document.getElementById('amigo'); // Captura o campo de entrada
    nome = input.value.trim(); // Remove espaços em branco antes e depois do nome

    // Validação para garantir que o campo não esteja vazio
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    // Adiciona o nome ao array de amigos
    amigos.push(nome);

    // Limpa o campo de entrada
    input.value = "";

    // Atualiza a lista de amigos no HTML
    atualizarListaAmigos();
}

// Função para atualizar a lista de amigos no HTML
function atualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    for (let amigo of amigos) {
        const item = document.createElement('li');
        item.textContent = amigo;
        lista.appendChild(item);
    }
}

// Função para sortear um amigo aleatoriamente
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Não há amigos na lista para sortear.");
        return;
    }

    indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    const elementoResultado = document.getElementById('resultado');
    elementoResultado.innerHTML = `<li>🎉 Amigo sorteado: <strong>${amigoSorteado}</strong> 🎉</li>`;
}
