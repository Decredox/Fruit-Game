
//---> VARIAVEIS
var px = 0;
var py = 0;
var dx = 0;
var dy = 0;
var obj;
var vel;
var fruta;
var teclas = {};
var count = Number(localStorage.getItem('Score'))

document.getElementById("Pontos").innerHTML = count

//---> CARREGADOR
function Iniciar() {
  obj = document.getElementById("player");
  fruta = document.getElementById("fruta");
  vel = 10
  document.addEventListener("keydown", Baixo)
  setInterval(Frames, 20)
}

//---> MOVIMENTAÇAO
function Baixo(event) {
  let key = event.keyCode
  teclas[key] = true;

  if (key === 87 || key == 38) {
    dy = -1
  }
  else if (key === 83 || key === 40) {
    dy = 1
  }
  if (key === 68 || key === 39) {
    dx = 1
  }
  else if (key === 65 || key === 37) {
    dx = -1
  }
}



//---> SOBRE FRUTA
function Colisao() {
  //PEGAR INFORMAÇOES IMPORTANTES DOS ELEMENTOS
  let b = fruta.getBoundingClientRect();
  let a = obj.getBoundingClientRect();

  //CAUCULAR COLISAO COM A FRUTA E ADICIONAR UM NOVO PONTO AO SCORE
  if (a.top < b.bottom && a.bottom > b.top && a.left < b.right && a.right > b.left) {
    if (localStorage.getItem('Score') !== null) {
      localStorage.setItem('Score', count += 1);
    }
    else {
      localStorage.setItem('Score', count += 1);
    }

    TpFruit()
    document.getElementById("Pontos").innerHTML = count
  }
}
function TpFruit() {
  //VALOR ALEATORIO PARA O CENARIO
  let n1 = Math.max(12, Math.floor(Math.random() * 375));
  let n2 = Math.max(12, Math.floor(Math.random() * 615));

  //SETAR O VALOR ALEATORIO PARA A FRUTA
  fruta.style.top = n1 + "px";
  fruta.style.left = n2 + "px";
}
function Parede() {
  //PAREDE DE CIMA E DE BAIXA
  if (py < 0) {
    py = 0.5
    obj.style.top = py + "px"
  }
  else if (py > 351) {
    py = 350
    obj.style.top = py + "px"
  }

  //PAREDE DA ESQUERDA E DIREITA
  if (px < 0) {
    px = 0
    obj.style.left = px + "px"
  }
  else if (px > 590) {
    px = 589.5
    obj.style.left = px + "px"
  }
}

//---> FRAMES
function Frames() {
  py += dy * vel
  px += dx * vel
  obj.style.top = py + "px"
  obj.style.left = px + "px"
  Colisao();
  Parede();
}

//---> CARREGAR FUNÇAO PRINCIPAL
window.addEventListener("load", Iniciar)


