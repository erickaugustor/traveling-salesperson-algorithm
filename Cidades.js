var distanciasCidades = [
  [0,   210,  150],
  [210,  0,   120],
  [150, 120,   0 ],
];

var nomesCidades = [
  "Nova York",
  "Boston",
  "Albany",
];

var coordenadasCidades = [
  {"X": 200, "Y": 100 },
  {"X": 230, "Y": 230 },
  {"X": 260, "Y": 160 },
];

console.log(`${nomesCidades[0]}: ${distanciasCidades[0]}`);


let recordDistancia = 0;

function setup(){
  createCanvas(500, 500);

  let distancia = calcularDistancia(distanciasCidades);
  recordDistancia = distancia;
}

function draw(){
  background(0);
  fill(255);
  for (let i = 0; i < nomesCidades.length; i++){
    ellipse(coordenadasCidades[i]['X'], coordenadasCidades[i]['Y'], 8, 8);
  }

  stroke(255);
  strokeWeight(2);
  noFill();
  beginShape();
  for (let i = 0; i < nomesCidades.length; i++){
    vertex(coordenadasCidades[i]['X'], coordenadasCidades[i]['Y']);
  }
  endShape();


  let i = floor(random(coordenadasCidades.length));
  let j = floor(random(coordenadasCidades.length)); 
  swap(coordenadasCidades, i, j);

  let distancia = calcularDistancia(distanciasCidades);
  if(distancia < recordDistancia){
    recordDistancia = distancia;
    console.log(distancia);
  }
}

const swap = (array, i, j) => {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};

const calcularDistancia = (points) => {
  let sum = 0;
  let d = 0;
  for (let i = 0; i < points.length - 1; i++) {
    d = points[i][i+1];
    sum += d;
  }
  
  return d;
}