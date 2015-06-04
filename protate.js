//AVAILABLE FUNCTIONS
//var myTimer = setInterval(req, 5);
//start();	starts whole thing
//animate();	animates all
//draw();	draws once whatever is currently set up
//shootLaser(angle,toX,toY,size,length);
//listenMouse();
//boxColission(source,target);
//circleColission(source,target);
//radianToDegree(radian);
//getAngle(sourceX,sourceY,targetX,targetY);
//getTargetQuadrant(x,y);
//testCollisions();

//VARIABLES
var fullRadian=2*Math.PI;
var canvas;
var context;
var hexaMap;
var rotationSpeed=Math.random()*fullRadian;
var slowRotation=rotationSpeed;
var fastRotation=rotationSpeed;

function start(){
	canvas=document.getElementById("igju");
	context=canvas.getContext("2d");
	hexaMap=newHexMap(1000);
	listenMouse();
	initSource();
	//buildColorRotation();
	//setInterval(listenCollisions, 100);
	animate();
}
 
function animate(){
	draw();
	window.requestAnimationFrame(animate);
}

function draw(){
	clearCanvas();//clear each frame
	rotationSpeed+=0.01;
	slowRotation+=0.02;
	fastRotation+=0.03;

	if(rotationSpeed>=fullRadian){rotationSpeed=0;}
	if(slowRotation>=fullRadian){slowRotation=0;}
	if(fastRotation>=fullRadian){fastRotation=0;}	
	
	igjuLocation(igju,mouse.x,mouse.y);
	//currentLaserColor();
	//laserColor();
	laserRotation(igju,fastRotation);
	shieldRotation(igju,slowRotation);
	colorRotation(igju,rotationSpeed);
	drawIgju(igju);
	
	if(mouse.clicked){
		//shootBullet();
		shootLaser(fastRotation, mouse.x,mouse.y,10, 100);
	}
}

function shootBullet(x,y,i,angle){
		x=Math.cos(shootAngle)*(i+i*15)+mouse.x;
		y=Math.sin(shootAngle)*(i+i*15)+mouse.y;
		
		drawArc(x,y,10,shootAngle+0.2, shootAngle-0.2,hexaMap[12], false);
		drawArc(x,y,10+10,shootAngle+0.7, shootAngle-0.7,hexaMap[i], false);
}

function clearCanvas(){
	context.clearRect(0, 0, canvas.width, canvas.height);
}

function igjuLocation(igju,x,y){
	igju.laser.x=x;
	igju.laser.y=y;
	igju.shield.x=x;
	igju.shield.y=y;
}

function shieldRotation(igju,speed){
	igju.shield.angle=speed;
}

function laserRotation(igju,speed){
	igju.laser.angle=speed;
}

function colorRotation(igju,speed){
	igju.first.speed=speed;
	igju.second.speed=speed;
	igju.third.speed=speed;
}

function initSource(){
	var angle=Math.random()*(Math.PI*2);
	igju.laser.x=200;
	igju.laser.y=200;
	igju.laser.angle=angle;
	igju.laser.color="#5574B9";
	igju.laser.w=0.4;
	igju.laser.r=80;
	
	igju.shield.x=200;
	igju.shield.y=200;
	igju.shield.angle=angle;
	igju.shield.color="#FFF467";
	igju.shield.w=0.4;
	igju.shield.r=10;
	
	igju.first.speed=angle;
	igju.first.color="#F26C4F";
	igju.first.angle=0;
	igju.first.r=20;
	igju.first.w=2*Math.PI;
	igju.first.fill=true;
	
	igju.second.speed=angle;
	igju.second.color="#1ABBB4";
	igju.second.angle=0;
	igju.second.r=20;
	igju.second.w=2*Math.PI;
	igju.second.fill=true;
	
	igju.third.speed=angle;
	igju.third.color="#F26D7D";
	igju.third.angle=0;
	igju.third.r=20;
	igju.third.w=2*Math.PI;
	igju.third.fill=true;
}

function drawIgju(igju){
	var radians=igju.shield.angle;
	drawCircle(igju.shield.x,igju.shield.y,igju.shield.r,igju.shield.angle+igju.shield.w,igju.shield.angle-igju.shield.w,igju.shield.color,igju.shield.clockwise,igju.shield.fill);
	drawCircle(igju.laser.x,igju.laser.y,igju.laser.r,igju.laser.angle+igju.laser.w,igju.laser.angle-igju.laser.w,igju.laser.color,igju.laser.clockwise,igju.laser.fill);
	
	drawCircle(Math.cos(igju.first.speed)*50.1+igju.laser.x,Math.sin(igju.first.speed)*50.1+igju.laser.y,igju.first.r,igju.first.angle+igju.first.w,igju.first.angle-igju.first.w,igju.first.color,igju.first.clockwise,igju.first.fill);
	
	drawCircle(Math.cos(igju.second.speed-Math.PI/3*2)*50.1+igju.laser.x,Math.sin(igju.second.speed-Math.PI/3*2)*50.1+igju.laser.y,igju.second.r,igju.second.angle+igju.second.w,igju.second.angle-igju.second.w,igju.second.color,igju.second.clockwise,igju.second.fill);
	
	drawCircle(Math.cos(igju.third.speed+Math.PI/3*2)*50.1+igju.laser.x,Math.sin(igju.third.speed+Math.PI/3*2)*50.1+igju.laser.y,igju.third.r,igju.third.angle+igju.third.w,igju.third.angle-igju.third.w,igju.third.color,igju.third.clockwise,igju.third.fill);
}

function drawCircle(x,y,size,rad1,rad2,color,clockwise,fill){
	context.beginPath();
	context.arc(x,y,size,rad1,rad2,false);
	
	if(fill===true){
		context.fillStyle = color;
		context.fill();
		context.closePath();
	}
	if(fill===false){
		context.lineWidth = 5;//add parameter line width !!!
		context.strokeStyle = color;
		context.stroke();
		context.closePath();
	}
}

//LASER
function shootLaser(angle,toX,toY,size,length){
	var radians =0;
	var x=0;
	var y=0;
	
	for(var i=0;i<length;i++){
		radians=angle * (Math.PI/180);
		radians=angle;
		x=Math.cos(radians)*(i+i*15)+toX;
		y=Math.sin(radians)*(i+i*15)+toY;
		
		drawCircle(x,y,size,radians+0.2, radians-0.2,hexaMap[8],false,false);
		drawCircle(x,y,size,radians+0.7, radians-0.7,hexaMap[i],false,false);
	}
}

//MOUSE LISTENERS
function listenMouse(){
		document.addEventListener('mousemove', function(e){ 
		mouse.x = e.clientX || e.pageX; 
		mouse.y = e.clientY || e.pageY 
	}, false);

	document.addEventListener('mousedown', function(e){ 
		mouse.x = e.clientX || e.pageX; 
		mouse.y = e.clientY || e.pageY;
		mouse.clicked=true;	
	}, false);

	document.addEventListener('mouseup', function(e){ 
		mouse.x = e.clientX || e.pageX; 
		mouse.y = e.clientY || e.pageY;
		mouse.clicked=false;	
	}, false);
}

//COLLISION DETECTION
function listenCollisions(){if(boxColission(source,target)){check("Source and Target Collided");} else{check("No Collision");}}

function boxColission(source,target){
	if (source.x < target.x + target.w &&
		source.x + source.w > target.x &&
		source.y < target.y + target.h &&
		source.h + source.y > target.y) {
		return true;
	}
	return false;
}

function circleColission(source,target){
	var dx = (source.x + source.radius) - (target.x + target.radius);
	var dy = (source.y + source.radius) - (target.y + target.radius);
	var distance = Math.sqrt(dx * dx + dy * dy);
	if (distance < source.radius + target.radius) {
		return true;
	}
	return false;
}

//ANGLE DETECTION
function radianToDegree(radian){var degree=radian * 180/Math.PI;return degree;}

function getAngle(sourceX,sourceY,targetX,targetY){
	var x=targetX-sourceX;
	var y=targetY-sourceY;
	var radians=Math.atan2(y, x);//x y to radians
	return angle;
}

//gives quadrants
function getTargetQuadrant(x,y){
	if(x>0 && y>0){return 1;}//both positive
	if(x<0 && y<0){return 3;}//both negative
	if(x>0 && y<0){return 4;}//x positive
	if(x<0 && y>0){return 2;}//y positive
	//test for zeros
	if(x===0 && y>0){return 21;}//90% 90% above
	if(x===0 && y<0){return 34;}//270% 90% below
	if(x>0 && y===0){return 14;}//0% to the right
	if(x<0 && y===0){return 23;}//180% to the left
	if(x===0 && y===0){return 0;}//should not be allowed since it means on top of each
}

//OBJECTS
var mouse = {x:0, y:0, clicked:false};
var source = {x:"",y:"",w:"",h:"",angle:"",shieldColor:"",first:"",second:"",third:""};//each circle color in hex
var target = {x:"",y:"",w:"",h:"",angle:"",shieldColor:"",first:"",second:"",third:""};
var sourceLaser = {x:"",y:"",w:"",h:"",angle:"",color:""};
var targetLaser = {x:"",y:"",w:"",h:"",angle:"",color:""};

var laser = {x:"",y:"",w:"",h:"",angle:"",color:""};//to have wider set up for laser type and bullet type
var bullet = {x:"",y:"",w:"",h:"",angle:"",color:""};

var igju={
	shield:{x:"",y:"",w:"",h:"",r:"",angle:"",speed:"",color:"",opening:"",thickness:"",clockwise:false,fill:false},
	laser:{x:"",y:"",w:"",h:"",r:"",angle:"",speed:"",color:"",opening:"",thickness:"",clockwise:false,fill:false},
	first:{x:"",y:"",w:"",h:"",r:"",speed:"",color:"",opening:"",thickness:"",clockwise:false,fill:false},
	second:{x:"",y:"",w:"",h:"",r:"",speed:"",color:"",opening:"",thickness:"",clockwise:false,fill:false},
	third:{x:"",y:"",w:"",h:"",r:"",speed:"",color:"",opening:"",thickness:"",clockwise:false,fill:false}
};
