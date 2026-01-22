//the variables
var money = 1;
var vodka = 0;
var potatoes = 0;
var keg = 0;
var cooldownsvodka = 2000;

//upgradable variables
var vodkaprice = 15;
var potatoclick = 1;
var maxcooldownsvodka = 2000;
var cooldownskeg = 0;



function preload() {
  sovietpotato = loadImage('potato.png');
  vodkabottle = loadImage('vodka.png');
  sellpotato = loadImage('sellpotato.jpeg');
  sellvodka = loadImage('sellvodka.jpeg');
  lesscooldown = loadImage('lesscooldown.png');
  moremoney = loadImage('moremoney.png');
  morepotato = loadImage('morepotato.png');
}
function setup() {
  createCanvas(1500, 835);
}
function draw() {
  background(0, 0, 0);
  //the econ images
  image(sovietpotato, 0, 0, 250, 250);
  image(vodkabottle, 0, 250, 250, 250);

  //the sell buttons
  image(sellpotato, 1300, 0, 100, 100);
  image(sellvodka, 1400, 0, 100, 100);
  
  //the upgrade images
  image(lesscooldown, 1350, 700, 50, 50);
  image(moremoney, 1400, 700, 50, 50);
  image(morepotato, 1450, 700, 50, 50);


textSize(32);
fill(255, 0, 0);
text("Soviet Potato Farmer 3 beta", 300, 50);

//display the variables
textSize(25);
fill(255, 255, 255);      
text("Potatoes: " + potatoes, 300, 100);
text("Vodka: " + vodka, 300, 150);
text("Kegs: " + keg, 300, 200);
text("Money: " + money,  300, 250);
//cooldowns
textSize(20);
fill(255, 255, 0);      
text("Vodka Cooldown: " + cooldownsvodka, 300, 300);

if (cooldownsvodka > 0) {
cooldownsvodka = cooldownsvodka - 1;
}else {
  cooldownsvodka = 0;
}


//cred
 stroke(255, 255, 255);
 fill(255, 255, 255);
 
  textSize(15);
  text("game made by @fuzzy_foxf", 0, 830);

}


//function to click
function mousePressed() {
//sell buttons  
  //sell potato
  if (mouseX > 1300 && mouseX < 1400 && mouseY > 0 && mouseY < 100&&potatoes>=1) {
    money = money + 2.5;
    potatoes = potatoes - 1;
  }
  //sell vodka
  if (mouseX > 1400 && mouseX < 1500 && mouseY > 0 && mouseY < 100&&vodka>=1) {
    money = money + vodkaprice;
    vodka = vodka - 1;
  }

//buy/make
  //if you click on the potato
  if (mouseX > 0 && mouseX < 250 && mouseY > 0 && mouseY < 250&&money>=1) {
    potatoes = potatoes + potatoclick;
    money = money - 1;
 
  }
  //if you click on the vodka bottle
  if (mouseX > 0 && mouseX < 250 && mouseY > 250 && mouseY < 500&&potatoes>=5&&cooldownsvodka<=0) {
    vodka = vodka + 1;
    potatoes = potatoes - 5;
    cooldownsvodka = maxcooldownsvodka; 
  }
// upgrades
  //less vodka cooldown
  if (mouseX > 1350 && mouseX < 1400 && mouseY > 700 && mouseY < 750&&money>=100) {
    money = money - 100;
    maxcooldownsvodka = maxcooldownsvodka - 10;
  }
  //more potato per click
  if (mouseX > 1450 && mouseX < 1500 && mouseY > 700 && mouseY < 750&&money>=500) {
    money = money - 500;
    potatoclick = potatoclick + 1;
  }
  //more money per vodka sold
  if (mouseX > 1400 && mouseX < 1450 && mouseY > 700 && mouseY < 750&&money>=1000) {
    money = money - 1000;
    vodkaprice = vodkaprice + 5;
  }
  
}

//function to key press