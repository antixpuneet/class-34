var ball,database,position;

function setup(){
    database=firebase.database();
    createCanvas(500,500);
    ball = createSprite(250,250,50,50);
    ball.shapeColor = "red";
    var ballPosition=database.ref('ball/position');
    ballPosition.on("value",readPosition,showErr);
}

function draw(){
    background("white");
    if (position!==undefined){
    if(keyDown(LEFT_ARROW)){
        writePosition(-5,-0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(5,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-5);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+5);
    }
    drawSprites();
}
}

function writePosition(x,y){
    database.ref('ball/position').set({
        'x':position.x+x,
        'y':position.y+y

    })

}

function readPosition(data){
    position=data.val();
    ball.x=position.x;
    ball.y=position.y;
}

function showErr (){
    console.log("error in writtening database");
}