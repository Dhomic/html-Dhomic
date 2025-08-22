// Selecionando os elementos do HTML
const botaoCadastro = document.getElementById('botao-cadastro');
const miniAbaCadastro = document.getElementById('mini-aba-cadastro');
const inputNomeJogador = document.getElementById('input-nome-jogador');
const salvarNome = document.getElementById('salvar-nome');
const perfilJogador = document.getElementById('perfil-jogador');
const nomeJogadorSpan = document.getElementById('nome-jogador');
const rankJogadorSpan = document.getElementById('rank-jogador');
const pontosJogadorSpan = document.getElementById('pontos-jogador');
const iconePerfil = document.getElementById('icone-perfil');
const miniAbaPerfil = document.getElementById('mini-aba-perfil');
const fotosPerfil = document.querySelectorAll('.foto-perfil');
let fotoSelecionadaSrc = 'img/user-default.png'; // Define uma foto padrão

// Lógica para selecionar a foto de perfil
fotosPerfil.forEach(foto => {
    foto.addEventListener('click', () => {
        // Remove a classe 'selecionada' de todas as fotos
        fotosPerfil.forEach(f => f.classList.remove('selecionada'));
        // Adiciona a classe 'selecionada' à foto clicada
        foto.classList.add('selecionada');
        // Guarda a URL da foto selecionada
        fotoSelecionadaSrc = foto.dataset.src;
    });
});

// Lógica para mostrar a aba de cadastro ao clicar no botão
botaoCadastro.addEventListener('click', () => {
    miniAbaCadastro.style.display = 'flex'; // Usamos 'flex' para exibir a caixa centralizada
});

// Função para salvar o nome e mostrar o perfil
function salvarNomeJogador() {
    const nome = inputNomeJogador.value;

    if (nome.trim() !== '') {
        // Guarda o nome no perfil
        nomeJogadorSpan.textContent = nome;

        // Torna o contêiner principal do perfil visível (o que segura o ícone)
        perfilJogador.style.display = 'block';

        // Atribui a foto escolhida ao ícone de perfil no canto superior
        iconePerfil.src = fotoSelecionadaSrc;
        
        // Torna o ícone de perfil visível
        iconePerfil.style.display = 'block';

        // Esconde a aba de cadastro
        miniAbaCadastro.style.display = 'none';

        // Esconde o botão de cadastro
        botaoCadastro.style.display = 'none';

    } else {
        alert("Por favor, digite seu nome!");
    }
}

// Selecionando os novos elementos para a lógica do jogo
const botaoComecar = document.getElementById('botao-comecar');
const telaJogo = document.getElementById('tela-jogo');
const menuBotoes = document.querySelector('.menu-botoes');
const logo = document.querySelector('.logo');
const perguntaCarta = document.getElementById('pergunta-carta');
const cartasRespostas = document.querySelectorAll('.carta-resposta');

let indicePergunta = 0;
let pontos = 0; // Adiciona variável de pontuação

// Função para atualizar o placar na tela
function atualizarPlacar() {
    pontosJogadorSpan.textContent = pontos;
}

// Função para mostrar pergunta e alternativas
function mostrarPergunta(indice) {
    const perguntaObj = perguntasFaceis[indice];
    perguntaCarta.textContent = perguntaObj.pergunta;

    // Junta e embaralha alternativas
    let alternativas = [perguntaObj.respostaCorreta, ...perguntaObj.respostasFalsas];
    embaralharArray(alternativas);

    cartasRespostas.forEach((botao, i) => {
        botao.textContent = alternativas[i] || '';
        botao.style.display = alternativas[i] ? 'inline-block' : 'none';
        botao.onclick = () => {
            if (botao.textContent === perguntaObj.respostaCorreta) {
                pontos += 100; // Adiciona 10 pontos por acerto
                
                atualizarPlacar();
            }
            indicePergunta++;
            if (indicePergunta < perguntasFaceis.length) {
                mostrarPergunta(indicePergunta);
            } else {
                perguntaCarta.textContent = `Fim das perguntas! Você fez ${pontos} pontos.`;
                cartasRespostas.forEach(b => b.style.display = 'none');
                
            }
        };
    });
}

// Lógica para mostrar a tela de jogo ao clicar no botão "Começar"
botaoComecar.addEventListener('click', () => {
    // Esconde a tela inicial
    menuBotoes.style.display = 'none';
    logo.style.display = 'none';

    // Mostra a tela de jogo
    telaJogo.style.display = 'flex';
    indicePergunta = 0;
    pontos = 0; // Zera pontos ao iniciar
    atualizarPlacar();
    mostrarPergunta(indicePergunta);
});

// Lógica para salvar o nome quando clicar no botão
salvarNome.addEventListener('click', salvarNomeJogador);

// Lógica para salvar o nome quando pressionar Enter
inputNomeJogador.addEventListener('keydown', function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Evita quebra de linha
        salvarNomeJogador();
    }
});;
    ;

    // Lógica para mostrar/esconder a mini aba de perfil
iconePerfil.addEventListener('click', () => {
    if (miniAbaPerfil.style.display === 'none') {
        miniAbaPerfil.style.display = 'block';
    } else {
        miniAbaPerfil.style.display = 'none';
    }
});
// Lógica para fechar a mini aba de perfil ao clicar fora dela
document.addEventListener('click', (event) => {
    const isClickInside = miniAbaPerfil.contains(event.target) || iconePerfil.contains(event.target);
    const isAbaOpen = miniAbaPerfil.style.display === 'block';

    if (isAbaOpen && !isClickInside) {
        miniAbaPerfil.style.display = 'none';
    }
});
function jogoperguntas() {
    // Lógica do jogo de perguntas
    on.click
    console.log("Iniciando o jogo de perguntas...");
    // Aqui você pode adicionar a lógica para iniciar o jogo de perguntas
}
