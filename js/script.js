const jogadores = [
  // Exemplos internacionais
  {nome: "Messi", dicas: [
      "Sou argentino",
      "Ganhei a Copa de 2022",
      "Joguei no Barcelona e PSG",
      "Sou atacante habilidoso e criativo",
      "Tenho diversos recordes de gols e assistências"
    ], imagem: "img/messi.jpg"},
  {nome: "Cristiano Ronaldo", dicas: [
      "Sou português",
      "Ganhei 5 Champions League",
      "Joguei no Manchester United, Real Madrid e Juventus",
      "Sou famoso por minha força física e cabeceio",
      "Sou artilheiro histórico da seleção"
    ], imagem: "img/ronaldo.jpg"},
  {nome: "Neymar", dicas: [
      "Atuei no Santos e PSG",
      "Sou brasileiro",
      "Sou atacante rápido e habilidoso",
      "Participei da Copa de 2014",
      "Tenho números impressionantes de gols e assistências"
    ], imagem: "img/neymar.jpg"},
  {nome: "Pelé", dicas: [
      "Ganhei 3 Copas do Mundo",
      "Sou brasileiro",
      "Atuei no Santos e New York Cosmos",
      "Sou considerado o Rei do Futebol",
      "Marquei mais de 1000 gols na carreira"
    ], imagem: "img/pele.png"},
  {nome: "Mbappé", dicas: [
      "Sou francês",
      "Ganhei a Copa de 2018",
      "Sou atacante veloz e jovem prodígio",
      "Atuo no PSG",
      "Tenho destaque internacional em clubes e seleção"
    ], imagem: "img/mbappe.png"},
  {nome: "Endrick", dicas: [
      "Sou atacante do Real Madrid",
      "Fui revelado pelo Palmeiras",
      "Sou considerado uma joia do futebol brasileiro",
      "Tenho gols decisivos em clássicos",
      "Já fui convocado para a Seleção Brasileira"
    ], imagem: "img/endrick.png"},
  {nome: "Pedro", dicas: [
      "Sou centroavante de um dos Maiores do Rio de janeiro",
      "Fui revelado pelo Fluminense",
      "Fui artilheiro do Brasileirão",
      "Fui artilheiro da Libertadores",
      "Tenho passagem pelo Fluminense",
      "Sou conhecido pelo bom posicionamento e finalização",
      "Já fui convocado para a Seleção Brasileira"
    ], imagem: "img/pedro.png"},
  {nome: "Paulinho", dicas: [
      "Sou atacante de um dos 4 Maiores de SP",
      "Fui revelado pelo Vasco",
      "Fui destaque no Atlético Mineiro",
      "Tenho velocidade e bom chute",
      "Joguei ao lado de Hulk",
      "Já fui campeão estadual"
    ], imagem: "img/paulinho.png"},
  {nome: "Hulk", dicas: [
      "Sou atacante de um time de Minas Gerais",
      "Fui revelado pelo Vitória",
      "Tenho passagem pela Seleção Brasileira",
      "Joguei na Europa e na China",
      "Sou conhecido pela força física e chutes potentes",
      "Fui campeão brasileiro pelo Galo"
    ], imagem: "img/hulk.png"},
  {nome: "Raphael Veiga", dicas: [
      "Sou meia de um dos 4 Maiores de SP",
      "Fui revelado pelo Palmeiras",
      "Sou especialista em cobranças de pênalti",
      "Fui campeão da Libertadores",
      "Tenho muitos gols e assistências pelo Verdão",
      "Já fui convocado para a Seleção"
    ], imagem: "img/veiga.png"},
  {nome: "Renato Augusto", dicas: [
      "Fui meia do Corinthians",
      "Ultima passagem pelo Fluminense",
      "Tenho passagem pela Seleção Brasileira",
      "Joguei no Corinthians, Alemanha e China",
      "Sou conhecido pela visão de jogo e liderança",
      "Fui campeão brasileiro pelo Timão"
    ], imagem: "img/renatoaugusto.png"},
  {nome: "Calleri", dicas: [
      "Sou atacante de um dos 4 Maiores de SP",
      "Sou argentino",
      "Fui artilheiro da Copa do Brasil",
      "Tenho passagem pelo futebol espanhol",
      "Sou ídolo da torcida tricolor"
    ], imagem: "img/calleri.png"},
  {nome: "Lucas Moura", dicas: [
      "Sou atacante de um dos 4 Maiores de SP",
      "Sou calvo",
      "Fui revelado pelo próprio clube",
      "Joguei no PSG e Tottenham",
      "Fui herói em uma semifinal de Champions League",
      "Voltei ao Brasil em 2023"
    ], imagem: "img/lucas.png"},
  {nome: "Tiquinho Soares", dicas: [
      "Sou atacante do Santos",
      "Fui artilheiro do Brasileirão",
      "Tenho passagem pelo futebol português",
      "Sou referência ofensiva do Santos",
      "Tenho gols em clássicos cariocas"
    ], imagem: "img/tiquinho.png"},
  {nome: "Vitor Roque", dicas: [
    "Fui dispensado pelo meu tecnico em um Time internacional",
      "Sou atacante do Palmeiras",
      "Fui revelado pelo Athletico Paranaense",
      "Sou considerado uma promessa do futebol brasileiro",
      "Tenho gols em finais",
      "Já fui convocado para a Seleção"
    ], imagem: "img/vitorroque.png"},
  {nome: "Igor Coronado", dicas: [
      "Fui meia do Corinthians",
      "Cheguei ao clube em 2025",
      "Tenho passagem pelo futebol árabe",
      "Sou conhecido pela habilidade e visão de jogo",
      "Sou destaque no meio-campo alvinegro"
    ], imagem: "img/coronado.png"},
  {nome: "Ferreirinha", dicas: [
    "Tenho uma Aposta com o craque Neto",
      "Sou atacante de um dos 4 Maiores de SP",
      "Fui revelado pelo Grêmio",
      "Sou conhecido pela velocidade e dribles",
      "Tenho gols em Grenais",
      "Já fui campeão estadual"
    ], imagem: "img/ferreirinha.png"},
  {nome: "Marinho", dicas: [
      "Sou atacante de um time do Nordeste",
      "Jogo pelas Pontas",
      "Fui revelado pelo clube do Nordeste",
      "Joguei no Santos e Flamengo",
      "Sou conhecido pela irreverência e gols bonitos",
      "Tenho passagem pelo futebol asiático",
      "Sou destaque na Raposa"
    ], imagem: "img/marinho.png"},
  {nome: "Eduardo Sasha", dicas: [
      "Sou atacante do Red Bull Bragantino",
      "Fui revelado pelo Santos",
      "Joguei no Santos e Atlético Mineiro",
      "Sou conhecido pelo oportunismo",
      "Tenho gols em decisões",
      "Sou destaque do Massa Bruta"
    ], imagem: "img/sasha.png"}
];

let jogadorAtual;
let dicasEmbaralhadas = [];
let indiceDica;
let pontuacao = 0;
let recorde = localStorage.getItem("recorde") ? parseInt(localStorage.getItem("recorde")) : 0;
let ranking = JSON.parse(localStorage.getItem("ranking")) || [];

let blurMax; 
let blurStep;


let jogadoresRestantes = [];

function embaralharArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

document.addEventListener("DOMContentLoaded", () => {
  atualizarPontuacao();
  atualizarRanking();

  document.getElementById("resposta").addEventListener("keydown", function(event) {
    if (event.key === "Enter") verificar();
  });

  jogadoresRestantes = jogadores.slice();

  novaRodada();
});

function novaRodada() {
 
  if (jogadoresRestantes.length === 0) {
    document.getElementById("resultado").innerHTML = "Todos os jogadores já foram sorteados! Recarregue a página para jogar novamente.";
    document.getElementById("dicas").innerHTML = "";
    document.getElementById("imagem-jogador").src = "";
    document.getElementById("resposta").disabled = true;
    return;
  }


  const indice = Math.floor(Math.random() * jogadoresRestantes.length);
  jogadorAtual = jogadoresRestantes[indice];
  jogadoresRestantes.splice(indice, 1);

  dicasEmbaralhadas = embaralharArray(jogadorAtual.dicas.slice());
  indiceDica = 0;

  document.getElementById("dicas").innerHTML = "";
  document.getElementById("resultado").innerHTML = "";
  document.getElementById("resposta").value = "";
  document.getElementById("resposta").focus();
  document.getElementById("resposta").disabled = false;

  const img = document.getElementById("imagem-jogador");
  img.src = jogadorAtual.imagem;

  blurMax = Math.floor(Math.random() * 20) + 40;
  img.style.filter = `blur(${blurMax}px)`;

  blurStep = blurMax / (dicasEmbaralhadas.length * 3);

  document.getElementById("dicas").innerHTML = `Dica: ${dicasEmbaralhadas[indiceDica]}`;
  indiceDica++;
}

function verificar() {
  const resposta = document.getElementById("resposta").value.trim().toLowerCase();
  const img = document.getElementById("imagem-jogador");

  if (!jogadorAtual) return;

  // Acertou
  if (resposta === jogadorAtual.nome.toLowerCase()) {
    document.getElementById("resultado").innerHTML = "✅ Acertou! Era " + jogadorAtual.nome + "!";
    pontuacao += 10;
    atualizarPontuacao();
    salvarRanking(jogadorAtual.nome, true);
    img.style.filter = `blur(0px)`;
    setTimeout(novaRodada, 1000);
    return;
  }

  if (indiceDica < dicasEmbaralhadas.length) {
    document.getElementById("dicas").innerHTML += `<br>Dica: ${dicasEmbaralhadas[indiceDica]}`;
    document.getElementById("resultado").innerHTML = "❌ Tente novamente!";
    pontuacao -= 2;
    atualizarPontuacao();

    if (indiceDica === 0) {
      img.style.filter = `blur(${blurMax / 2}px)`; 
    } else {
      let blurAtual = parseFloat(img.style.filter.replace("blur(", "").replace("px)", ""));
      blurAtual -= blurStep;
      if (blurAtual < 0) blurAtual = 0;
      img.style.filter = `blur(${blurAtual}px)`;
    }

    indiceDica++;
  }

  if (indiceDica === dicasEmbaralhadas.length) {
    document.getElementById("resultado").innerHTML = "❌ Errou! O jogador era " + jogadorAtual.nome;
    pontuacao -= 5;
    atualizarPontuacao();
    salvarRanking(jogadorAtual.nome, false);
    img.style.filter = `blur(0px)`;
    setTimeout(novaRodada, 1000);
  }

  document.getElementById("resposta").value = "";
}

function atualizarPontuacao() {
  document.getElementById("pontuacao").innerText = "Pontuação: " + pontuacao;
  if (pontuacao > recorde) {
    recorde = pontuacao;
    localStorage.setItem("recorde", recorde);
  }
  document.getElementById("recorde").innerText = "🏆 Recorde: " + recorde;
}

function salvarRanking(nomeJogador, acertou) {
  const entrada = {
    jogador: nomeJogador,
    resultado: acertou ? "Acertou" : "Errou",
    pontos: pontuacao,
    data: new Date().toLocaleString()
  };

  ranking.push(entrada);
  if (ranking.length > 10) ranking.shift();

  localStorage.setItem("ranking", JSON.stringify(ranking));
  atualizarRanking();
}

function atualizarRanking() {
  const lista = document.getElementById("ranking");
  lista.innerHTML = "";
  ranking.slice().reverse().forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.data} - ${item.resultado} (${item.jogador}) | Pontos: ${item.pontos}`;
    lista.appendChild(li);
  });
}