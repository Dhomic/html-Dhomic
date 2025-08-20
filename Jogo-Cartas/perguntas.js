        // Informações do jogo
        let jogador = {
            nome: "",
            pontos: 0,
            vidas: 3
        };
        let pontos = 0;
        let vidas = 3;
        let perguntas = [
            {
                pergunta: "Qual é a linguagem de programação mais utilizada para desenvolvimento web?",
                opcoes: ["Java", "JavaScript", "Python"],
                resposta: 1
            },
            {
                pergunta: "O que significa HTML?",
                opcoes: ["HyperText Markup Language", "HighText Markup Language", "HyperText Markdown Language"],
                resposta: 0
            },
            {
                pergunta: "Qual é o comando para criar uma variável em JavaScript?",
                opcoes: ["var nome;", "variable nome;", "create nome;"],
                resposta: 0
            },
            {
                pergunta: "O que é um loop?",
                opcoes: ["Uma estrutura de repetição", "Uma função", "Um tipo de variável"],
                resposta: 0
            },
            {
                pergunta: "Qual é a função do console.log() em JavaScript?",
                opcoes: ["Exibir mensagens no console", "Criar uma variável", "Definir uma função"],
                resposta: 0
            },
            {
                pergunta: "O que é um array?",
                opcoes: ["Uma estrutura de dados que armazena múltiplos valores", "Uma função", "Um tipo de variável"],
                resposta: 0
            },
            {
                pergunta: "Qual é a sintaxe correta para declarar uma função em JavaScript?",
                opcoes: ["function nomeDaFuncao() {}", "func nomeDaFuncao() {}", "def nomeDaFuncao() {}"],
                resposta: 0
            },
            {
                pergunta: "O que significa DOM?",
                opcoes: ["Document Object Model", "Data Object Model", "Document Object Module"],
                resposta: 0
            },
            {
                pergunta: "Como você adiciona um comentário em JavaScript?",
                opcoes: ["// Este é um comentário", "<!-- Este é um comentário -->", "# Este é um comentário"],
                resposta: 0
            },
            {
                pergunta: "O que é JSON?",
                opcoes: ["JavaScript Object Notation", "JavaScript Online Notation", "JavaScript Object Network"],
                resposta: 0
            },
            {
                pergunta: "Qual é a diferença entre '==' e '===' em JavaScript?",
                opcoes: ["'==' compara valores, '===' compara valores e tipos", "'==' compara tipos, '===' compara valores", "'==' e '===' são iguais"],
                resposta: 0
            }
        ];
        function iniciarJogo() {
            // Obtém o nome do jogador
            const nomeJogador = document.getElementById("nome").value;
            if (nomeJogador) {
                jogador.nome = nomeJogador;
                alert(`Bem-vindo, ${jogador.nome}! Vamos começar o jogo.`);
                jogar();
            } else {
                alert("Por favor, insira seu nome.");
            }
        }
        function jogar() {
            while (vidas > 0) {
                const perguntaAtual = perguntas[Math.floor(Math.random() * perguntas.length)];
                // Exibe a pergunta e as opções
                }
                const respostaUsuario = prompt(`${perguntaAtual.pergunta}\n${perguntaAtual.opcoes.map((opcao, index) => `${index + 1}. ${opcao}`).join("\n")}`);
                if (respostaUsuario === null) { // Usuário cancelou o prompt
                    alert("Jogo encerrado.");
                    return;
                }
                const respostaIndex = parseInt(respostaUsuario) - 1;
                if (respostaIndex === perguntaAtual.resposta) {
                    pontos++;
                    alert(`Correto! Você ganhou 1 ponto. Pontos: ${pontos}`);
                } else {
                    vidas--;
                    alert(`Incorreto! Você perdeu uma vida. Vidas restantes: ${vidas}`);
                }
            }
        