const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var drops;
function preload(){
    
}

function setup(){
 createCanvas(500,650);
 engine = Engine.create();  
 world = engine.world;   
}

function draw(){
    background(0);
    Engine.update(engine); 
    ellipse();
}   
function ellipse(){
if(this.rain.position.y>height){
    Matter.Body.setPosition(this.rain, {x:random(0,400),y:random(0,400)})}
}