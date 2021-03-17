//wall
var wall;
var wallThickness;

//bullet
var bullet;
var bulletSpeed;
var bulletWeight;

//damage
var damage;

function setup(){
    //canvas
    createCanvas(1600,400);

    //wall
    wallThickness = Math.round(random(22,83));
    wall = createSprite(1200,200,wallThickness,height/2);
    //wall.shapeColor = "cyan"

    //bullet
    bulletSpeed = Math.round(random(223,321));
    bulletWeight = Math.round(random(30,52));
    bullet = createSprite(100,200,50,20);
    bullet.velocityX = bulletSpeed;   

    //damage
    var damage;
    damage = ((0.5 * bulletWeight * bulletSpeed * bulletSpeed)/
             (wallThickness * wallThickness  * wallThickness));
    //damage = 4;
}

function draw(){
    background(0,0,0);

    if(bullet.isTouching(wall)){
        bullet.velocityX = 0;
        damageSense();
    }

    drawSprites();
}

function damageSense(){
    if(damage <= 10){
        wall.shapeColor = "green";
    }
    else{
        wall.shapeColor =  "red";
    }
}