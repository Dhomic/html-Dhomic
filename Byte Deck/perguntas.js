let perguntasFaceis = [
  {
    pergunta: "Qual das seguintes opções melhor define o que é um algoritmo?",
    respostaCorreta: "Uma sequência de passos lógicos e finitos para resolver um problema.",
    respostasFalsas: [
      "Um tipo de hardware que ajuda o computador a processar dados.",
      "Uma linguagem de programação específica para criar sites."
    ]
  },
  {
    pergunta: "Em Lógica Computacional, o que é uma variável?",
    respostaCorreta: "Um espaço na memória do computador usado para armazenar dados.",
    respostasFalsas: [
      "Uma função que define a interface de um programa.",
      "Um tipo de erro que impede o programa de funcionar."
    ]
  },
  {
    pergunta: "Qual é a principal diferença entre Hardware e Software?",
    respostaCorreta: "Hardware é a parte física do computador, e Software é a parte lógica, ou os programas.",
    respostasFalsas: [
      "Hardware é usado apenas para a internet, e Software para jogos.",
      "Hardware é sempre mais caro que Software."
    ]
  },
  {
    pergunta: "O que significa a sigla 'HTML'?",
    respostaCorreta: "HyperText Markup Language.",
    respostasFalsas: [
      "High-level Technical Machine Language.",
      "Hyperlink and Textual Management Language."
    ]
  },
  {
    pergunta: "Qual é o resultado da operação lógica 'Verdadeiro' E 'Falso'?",
    respostaCorreta: "Falso.",
    respostasFalsas: [
      "Verdadeiro.",
      "Não se aplica."
    ]
  },
  {
    pergunta: "O que é um 'fluxograma'?",
    respostaCorreta: "Um diagrama que representa a sequência de passos de um algoritmo.",
    respostasFalsas: [
      "Um tipo de código de programação avançado.",
      "Um componente eletrônico dentro do computador."
    ]
  }
];

function embaralharArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}