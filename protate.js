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
//setSource(x,y,size,radians,shieldSpeed,laserSpeed,colorSpeed,laserWidth,shieldWidth,shieldColor,first,second,third,clockwise); SHOULD INSTEAD ACCEPT SOURCE OBJECT WHICH HAS ALL THESE VARIABLES

//VARIABLES
var canvas;
var context;
var hexaMap;
var angle=Math.random()*360;
var differentSpeed=angle;
var differentSpeed2=angle;

//OBJECTS
var mouse = {x:0, y:0, clicked:false};
var source = {x:"",y:"",w:"",h:"",angle:"",shieldColor:"",first:"",second:"",third:""};//each circle color in hex
var target = {x:"",y:"",w:"",h:"",angle:"",shieldColor:"",first:"",second:"",third:""};
var sourceLaser = {x:"",y:"",w:"",h:"",angle:"",color:""};
var targetLaser = {x:"",y:"",w:"",h:"",angle:"",color:""};

function start(){
	canvas=document.getElementById("igju");
	context=canvas.getContext("2d");
	hexaMap=newHexMap(1000);
	listenMouse();
	//------------------------------------------------------
	//this is just to test collisions
	source.w=100;
	source.h=100;
	
	target.w=100;
	target.h=100;
	//------------------------------------------------------
	setInterval(listenCollisions, 100);
	animate();
}
 
function animate(){
	draw();
	window.requestAnimationFrame(animate);
}

function draw(){
	context.clearRect(0, 0, canvas.width, canvas.height);
	var radians = angle * (Math.PI/180);
	angle+=1;
	differentSpeed+=0.03;
	differentSpeed2+=0.02;
	if(angle>=360){angle=0;}
	if(differentSpeed>=2*Math.PI){differentSpeed=0;}	
	
	setSource(mouse.x,mouse.y,20,radians,differentSpeed2,differentSpeed,differentSpeed2,0.3,0.3,hexaMap[0],hexaMap[1],hexaMap[2],hexaMap[3],true);
	
	//------------------------------------------------------
	//this is just to test target colission (not with laser)
	var tarX=Math.random()*200+100;
	var tarY=Math.random()*200+100;
	setSource(tarX,tarY,20,radians,differentSpeed2,differentSpeed,differentSpeed2,0.3,0.3,hexaMap[6],hexaMap[7],hexaMap[8],hexaMap[9],true);
	source.x=mouse.x;
	source.y=mouse.y;
	target.x=tarX;
	target.y=tarY;
	//------------------------------------------------------
	//set the source object variable, should be done everywhere instead of functions accepting so many parameters
	source.angle=differentSpeed;
	if(mouse.clicked){shootLaser(source.angle, mouse.x,mouse.y,10, 100);}
}

function setSource(x,y,size,radians,shieldSpeed,laserSpeed,colorSpeed,laserWidth,shieldWidth,shieldColor,first,second,third,clockwise){
	drawArc(x,y,size,shieldSpeed+shieldWidth,shieldSpeed-shieldWidth,shieldColor,clockwise);//shield
	drawArc(x,y,size+60,laserSpeed+laserWidth,laserSpeed-laserWidth,shieldColor,clockwise);//laser
	//first
	drawArc(Math.cos(radians)*50.1+x,Math.sin(radians)*50.1+y,size,0,2*Math.PI,first,clockwise);
	//second
	drawArc(Math.cos(radians-Math.PI/3*2)*50.1+x,Math.sin(radians-Math.PI/3*2)*50.1+y,size,0,2*Math.PI,second,clockwise);
	//third
	drawArc(Math.cos(radians+Math.PI/3*2)*50.1+x,Math.sin(radians+Math.PI/3*2)*50.1+y,size,0,2*Math.PI,third,clockwise);
}

function drawArc(x,y,size,rad1,rad2,color,clockwise){
	context.beginPath();
	context.arc(x,y,size,rad1,rad2,this.clockwise);
	context.lineWidth = 5;//add parameter line width !!!
	context.strokeStyle = color;
	context.stroke();
	context.closePath();
}

function shootLaser(angle,toX,toY,size,length){
	var radians =0;
	var x=0;
	var y=0;
	
	for(var i=0;i<length;i++){
		//check(radians);
		radians=angle * (Math.PI/180);
		radians=angle;
		x=Math.cos(radians)*(i+i*15)+toX;
		y=Math.sin(radians)*(i+i*15)+toY;

		context.beginPath();
		//getAngleForArc(radians);
		context.arc(x, y, size, radians-0.2, radians+0.2, true);
		//context.fillStyle = hexaMap[i];
		//context.fill();
		context.lineWidth = 5;
		context.strokeStyle = hexaMap[i];
		context.stroke();		
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
