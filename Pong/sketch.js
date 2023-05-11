// variaveis da Bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2;
let colidiu = false 

// velocidade da Bolinha
let velocidadexBolinha = 6;
let velocidadeyBolinha = 6;

// variaveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

// variaveis do oponente 
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let raqueteComprimentoOponente = 10;
let raqueteAlturaOponente = 90;
let velocidadeyOponente;

// variaveis placar
let meusPontos = 0;
let pontosOponente = 0;

// variaveis sons
let trilha
let ponto
let raquetada

function preload(){
  trilha = loadSound ("trilha.mp3");
 ponto = loadSound ("ponto.mp3");
raquetada = loadSound("raquetada.mp3")
}

function setup() {
  createCanvas(600, 400);
 trilha.loop();
}

function draw() {
  background(0);
  mostraBolinha();
  mostraRaquete(xRaquete,yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
 movimentaBolinha();
 movimentaMinhaRaquete();
  verificaColisaoBorda();
  //verificaColisaoRaquete();
  movimentaRaqueteOponente();
  //movimentaRaqueteOponenteManual();
  colisaoRaqueteBiblioteca(xRaquete,yRaquete);
  colisaoRaqueteBiblioteca(xRaqueteOponente, yRaqueteOponente);
  incluirPlacar();
  marcarPonto();
}
  
  function mostraRaqueteOponente(){
    rect(xRaqueteOponente, yRaqueteOponente, raqueteComprimento, raqueteAltura)
  }


function mostraBolinha(){
  circle(xBolinha,yBolinha,diametro);
}
function movimentaBolinha(){
 xBolinha += velocidadexBolinha;
  yBolinha += velocidadeyBolinha;
  
}
function verificaColisaoBorda()
{if (xBolinha + raio > width || 
     xBolinha - raio <0 ){ 
    velocidadexBolinha *=-1;
  }              
  if (yBolinha + raio > height ||
    yBolinha - raio  < 0 ){
  velocidadeyBolinha *=- 1;
  }
}
function mostraRaquete(x,y){
  rect(x,y,raqueteComprimento,raqueteAltura)
}

function movimentaMinhaRaquete(){
  if(keyIsDown(UP_ARROW)){
  yRaquete -= 10;
  }
if(keyIsDown(DOWN_ARROW)){
  yRaquete += 10;
}
}
  
function movimentaRaqueteOponenteManual(){
  if(keyIsDown(87)){
  yRaqueteOponente -= 10;
  }
if(keyIsDown(83)){
  yRaqueteOponente += 10;
}
}
function verificaColisaoRaquete(){
    if (xBolinha - raio < xRaquete + raqueteComprimento 
        && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yraquete){
        velocidadexBolinha *=-1;
        }
                                  }
function movimentaRaqueteOponente (){
  velocidadeyOponente = yBolinha - yRaqueteOponente - raqueteComprimento / 2 - 30;
  yRaqueteOponente += velocidadeyOponente
  
}

function colisaoRaqueteBiblioteca(x,y){ 
  colidiu = collideRectCircle(x,y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio)
  if (colidiu){
    velocidadexBolinha *= -1;
    raquetada.play();
  }
}

function incluirPlacar (){
  stroke(255)
  textAlign(CENTER)
  textSize (16)
  fill(color(255,40,0))
  rect (150,10,40,20)
  fill(color(255,40,0))
  rect (450,10,40,20)
  fill (255)
  text (meusPontos, 170,26)
  text (pontosOponente,470,26)
}
                
function marcarPonto(){
  if (xBolinha > 590 ){
    meusPontos += 1;
  ponto.play()
  }
  if (xBolinha < 10){
    pontosOponente += 1;
    ponto.play();
  }
}
  