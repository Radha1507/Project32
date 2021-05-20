const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;
var hour;
var pm;

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
    if(backgroundImg)
    background(backgroundImg);

    Engine.update(engine);


    if (hour=13){
        pm=01;
    }
    else if(hour=14){
        pm=02;
    }
    else if(hour=15){
        pm=03;
    }
    else if(hour=16){
        pm=04;
    }
    else if(hour=17){
        pm=05;
    }
    else if(hour=18){
        pm=06;
    }
    else if(hour=19){
        pm=07;
    }
    else if(hour=20){
        pm=08;
    }
    else if(hour=21){
        pm=09;
    }
    else if(hour=22){
        pm=10;
    }
    else if(hour=23){
        pm=11;
    }
    else if(hour=00){
        pm=12;
    }

    // write code to display time in correct format here
     if(hour<12){
        textSize(30);
        text ("Time:"+hour+" AM",30,90)
     }
     else{
        textSize(30);
        text ("Time:"+pm+" PM",30,90)
     }
    

    

}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    //change the data in JSON format
    var responseJSON = await response.json();
    var datetime = responseJSON.datetime;
    // write code slice the datetime
     hour = datetime.slice(11,13);

    // add conditions to change the background images from sunrise to sunset
    if(hour>=04 && hour<=06){
        bg = "sunrise1.png";
    }
    else if(hour>=06 && hour<=08){
        bg = "sunrise2.png";
    }
    else if(hour>=08 && hour<=11){
        bg = "sunrise3.png";
    }
    else if(hour>=11 && hour<=13){
        bg = "sunrise4.png";
    }
    else if(hour>=13 && hour<=15){
        bg = "sunrise5.png";
    }    
    else if(hour>=15 && hour<=17){
        bg = "sunrise6.png";
    }
    else if(hour>=17 && hour<=19){
        bg = "sunrise7.png";
    }
    else if(hour>=19 && hour<=21){
        bg = "sunrise4.png";
    }
    else if(hour>=21 && hour<=23){
        bg = "sunrise4.png";
    }
    else if(hour>=23 && hour==00){
        bg = "sunrise10.png";
    }
    else if(hour>=00 && hour<=03){
        bg = "sunset11.png";
    }
    else {
        bg = "sunset12.png";
    }


    //load the image in backgroundImg variable here

    backgroundImg = loadImage(bg);
    
}


