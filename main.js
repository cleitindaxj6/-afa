const caixaPrincial = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('texto-resultado');

const perguntas = [
    {
        enunciado: "texto01",
        alternativas: [
          {
            texto: "alternativa01",
            afirmacao: "afirmacao"
          },
          {
            texto: "alternativa01",
            afirmacao: "afirmacao"
          }
        ]
    },
    {
        enunciado: "texto02",
        alternativas: [
          {
            texto: "alternativa02",
            afirmacao: "afirmacao"
          },
          {
            texto: "alternativa02",
            afirmacao: "afirmacao"
          }
        ]
    },
    {
        enunciado: "texto03",
        alternativas: [
          {
            texto: "alternativa03",
            afirmacao: "afirmacao"
          },
          {
            texto: "alternativa03",
            afirmacao: "afirmacao"
          }
        ]
    },
    {
        enunciado: "texto04",
        alternativas: [
          {
            texto: "alternativa04",
            afirmacao: "afirmacao"
          },
          {
            texto: "alternativa04",
            afirmacao: "afirmacao"
          }
        ]
    },
    {
        enunciado: "texto05",
        alternativas: [
          {
            texto: "alternativa09",
            afirmacao: "afirmacao03"
          },
          {
            texto: "alternativa10",
            afirmacao: "afirmacao04"
          }
        ]
    }
];


let atual = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();

}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativa){
        const botaoAlternativas = document.createElement('button');
        botaoAlternativas.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas)  
   }
}
