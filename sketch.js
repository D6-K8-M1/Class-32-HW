//var ground;

var score=0;




function setup() {
  createCanvas(480,800);
  createSprite(600, 700, 1000, 50);

}

var particles = [];
var plinkos = [];
var division = [];
var divisionHeight = 300;

for(var k=0; k< width; k=k+80){
  division.push(new Divisions(k, height = divisionHeight/2, 10, divisionHeight ));
}

for (var j=40; j<particles.length; j++){  
  particles[j].display();
}

for (var k=40; k<divisions.length; k++){
  divisions[k].display();


  blocks1.score();
  blocks2.score();
  blocks3.score();
  blocks4.score();
  blocks5.score();
  blocks6.score();
  blocks7.score();
  blocks8.score();
  blocks9.score();





  


   

}

function draw() {
  background(255,255,255);

  text("Score :"+score,750,40);

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10, width/2+10), 10,10));
  }
  //ground.display();  
  drawSprites();

  getTime();
}

score(){
  if(this.visibility<0 && this.visibility>-150){
    score++;
  }
}

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=06 && hour<=19){
      bg = (47, 187, 244);
  }
  else{
      bg = (2, 94, 17);
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}

async function getTime(){

  
  var response = fetch("http://worldtimeapi.org/api/timezone/Europe/London");
  var responseJSON = await response.json();

  console.log(responseJSON);

}

