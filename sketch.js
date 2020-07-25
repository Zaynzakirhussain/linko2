var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

var particles;
var plinkos = [];
var divisions = [];

var gameState = play;
var play;
var end;

var divisionHeight = 300;
var score = 0;
var turn = 0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width / 2, height, width, 20);


  for (var k = 0; k <= width; k = k + 80) {
    divisions.push(new Division(k, height - divisionHeight / 2, 10, divisionHeight));
  }


  for (var j = 75; j <= width; j = j + 50) {

    plinkos.push(new Plinko(j, 75));
  }

  for (var j = 50; j <= width - 10; j = j + 50) {

    plinkos.push(new Plinko(j, 175));
  }

  for (var j = 75; j <= width; j = j + 50) {

    plinkos.push(new Plinko(j, 275));
  }

  for (var j = 50; j <= width - 10; j = j + 50) {

    plinkos.push(new Plinko(j, 375));
  }




}



function draw() {
  background("black");
  textSize(20)
  //text("Score : "+score,20,30);
  Engine.update(engine);

  text("200", 25, 520);
  text("120", 105, 520);
  text("100", 185, 520);
  text("50", 265, 520);
  text("50", 345, 520);
  text("50", 425, 520);
  text("50", 505, 520);
  text("100", 585, 520);
  text("120", 665, 520);
  text("200", 745, 520);
  text("Score: " + score, 30, 30);

  for (var i = 0; i < plinkos.length; i++) {

    plinkos[i].display();

  }

  for (var k = 0; k < divisions.length; k++) {

    divisions[k].display();
  }

  if (particles != null) {
    particles.display();
    if (particles.body.position.y > 520 && particles.body.position.x < 80 && particles.body.position.x > 0 && particles.body.position.y < 527) {
      score = score + 200;
      if (turn >= 5) {
        gameState = "end";
      }
    }
    if (particles.body.position.y > 520 && particles.body.position.x > 80 && particles.body.position.x < 160 && particles.body.position.y < 527) {
      score = score + 120;
      if (turn >= 5) {
        gameState = "end";
      }
    }
    if (particles.body.position.y > 520 && particles.body.position.x > 160 && particles.body.position.x < 240 && particles.body.position.y < 527) {
      score = score + 100;
      if (turn >= 5) {
        gameState = "end";
      }
    }
    if (particles.body.position.y > 520 && particles.body.position.x > 240 && particles.body.position.x < 560 && particles.body.position.y < 527) {
      score = score + 50;
      if (turn >= 5) {
        gameState = "end";
      }
    }
    if (particles.body.position.y > 520 && particles.body.position.x > 560 && particles.body.position.x < 640 && particles.body.position.y < 527) {
      score = score + 100;
      if (turn >= 5) {
        gameState = "end";
      }
    }
    if (particles.body.position.y > 520 && particles.body.position.x > 640 && particles.body.position.x < 720 && particles.body.position.y < 527) {
      score = score + 120;
      if (turn >= 5) {
        gameState = "end";
      }
    }
    if (particles.body.position.y > 520 && particles.body.position.x > 720 && particles.body.position.x < 800 && particles.body.position.y < 527) {
      score = score + 200;
      if (turn >= 5) {
        gameState = "end";
      }
    }
  }

  if (gameState === "end") {
    textSize(70);
    text("GAME OVER!!", 200, 350);
  }
}

function mousePressed() {
  if (gameState !== "end") {
    turn++;
    particles = new Particle(mouseX, 5, 11, 11)
  }
}