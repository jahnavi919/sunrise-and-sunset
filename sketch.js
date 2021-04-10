const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var hour;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg){
background(backgroundImg);
    }
else {
    background(0);
}
    Engine.update(engine);

    // write code to display time in correct format here
    if(hour == 12) {
        text("Time : 12 PM ");
    }
    else if(hour == 00) {
        text("Time : 12 AM ");
    }
    else if(hour > 12) {
        text("Time : " + hour%12 + " PM ");
    }
    else {
        text("Time : " + hour + " AM ");
    }
}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    //change the data in JSON format
    var responseJSON=await response.json();
    // write code slice the datetime
    var datetime= responseJSON.datetime;
        hour=datetime.slice(11, 13);
    // add conditions to change the background images from sunrise to sunset
    if(hour>=04 && hour<=06)
    {
    bg="sunrise1.png";
    }
    else if(hour>06 && hour<=08)
    {
    bg="sunrise2.png";
    }
    else if(hour>08 && hour<=11)
    {
    bg="sunrise3.png";
    }
    else if(hour>11 && hour<=13)
    {
    bg="sunrise4.png";
    }
    else if(hour>13 && hour<=15)
    {
    bg="sunrise5.png";
    }
    else if(hour>15 && hour<=17)
    {
    bg="sunrise6.png";
    }
    else if(hour>17 && hour<=18)
    {
    bg="sunset7.png";
    }
    else if(hour>18 && hour<=20)
    {
    bg="sunset8.png";
    }
    else if(hour>20 && hour<=23)
    {
    bg="sunset9.png";
    }
    else if(hour>23 && hour<=00)
    {
    bg="sunset10.png";
    }
    else if(hour>00 && hour<=03)
    {
    bg="sunset11.png";
    }
    else {
        bg="sunset12.png";
    }
    //load the image in backgroundImg variable here
    backgroundImg=loadImage(bg);
}
