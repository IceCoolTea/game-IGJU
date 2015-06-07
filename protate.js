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
//var rotationSpeed=Math.random()*fullRadian;
//var slowRotation=rotationSpeed;
//var fastRotation=rotationSpeed;
var sourceBullets=[];
var shootingDistance=140;
var bulletSpeed=0.1;

var speedModifier=0;

var testIncrementor=0;

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
var special=0;
function draw(){
	clearCanvas();//clear each frame
	//reset rotation for drawing, when it reach full rotation of radian
	resetRotations();
	//position igju, later for each listOfIgju item, relocate each
	
	igjuLocation(igju,mouse.x,mouse.y);
	
	check(laserColor(igju));
	//currentLaserColor();
	//laserColor(); just a test
	//igju.laser.color=hexaMap[special];
	//draw igju, later: for each igju, draw each igju
	drawIgju(igju);
	
	//mouseclick-> bullets
	
	if(mouse.clicked){
		//set up bullet
		bullet.distance=shootingDistance;
		bullet.isShot=true;
		bullet.x=mouse.x;
		bullet.y=mouse.y;
		bullet.size=igju.laser.w*30;
		bullet.angle=igju.laser.angle;
		bullet.color=igju.laser.color;  //bullet color should be current laser color
		special++;
		if(special>=hexaMap.length){special=0;}

		//add bullet to the list
		sourceBullets.push(new bulletObject(bullet));
		
		//this is an option to spam bullets if disabled
		//mouse.clicked=false;
	}
	
	//for each bullet in list
	for(var i=0;i<sourceBullets.length;i++){
		drawBullet(sourceBullets[i]);
		//substract the distance traveled so far for next draw
		sourceBullets[i].distance=sourceBullets[i].distance-bulletSpeed;//bullet distance and speed should be determined by source properties
		//remove bullets which travelled their maximum distance
		if(sourceBullets[i].distance<=0){
			sourceBullets.splice(i,1);
			i--;
		}
	}

	//speedModifier++;
	//if(speedModifier>100){speedModifier=0;}
	//rotate
	laserRotation(igju,igju.laser.speed+0.02);//+(speedModifier/100));
	//laserRotation(igju,Math.PI/6*3);//+(speedModifier/100));
	shieldRotation(igju,igju.shield.speed+0.01);
	colorRotation(igju,igju.first.speed+0.03);
	//colorRotation(igju,(Math.PI/6*6)*1);
}

function laserColor(targetObject){
	var r=0;
	var g=0;
	var b=0;
	
	var first=0;
	var second=0;
	var third=0;
	
	var firstSecondAngle=getAngle(targetObject.first.x,targetObject.first.y,targetObject.second.x,targetObject.second.y);
	var secondThirdAngle=getAngle(targetObject.second.x,targetObject.second.y,targetObject.third.x,targetObject.third.y);
	var thirdFirstAngle=getAngle(targetObject.third.x,targetObject.third.y,targetObject.first.x,targetObject.first.y);
	
	var laserDegrees=targetObject.laser.speed;
	var laserAngleDegrees=targetObject.laser.angle;
	var laserAngle="Laser angle "+laserDegrees+" laser speed "+laserAngleDegrees+"</br>";
	
	var temp=[];
	var angleDifference=[];
	
	var firstDifference=laserAngleDegrees-firstSecondAngle;//-(Math.PI/6*3);//-60;
	var secondDifference=laserAngleDegrees-secondThirdAngle;//-(Math.PI/6*3);//-60;
	var thirdDifference=laserAngleDegrees-thirdFirstAngle;//-(Math.PI/6*3);//-60;
	
	angleDifference.push(firstDifference);
	angleDifference.push(secondDifference);
	angleDifference.push(thirdDifference);
	
	temp.push(firstDifference);
	temp.push(secondDifference);
	temp.push(thirdDifference);
	
	for(var i=0;i<angleDifference.length;i++){if(angleDifference[i]<0){angleDifference[i]=angleDifference[i]+(2*Math.PI);}}//if difference is negative, we need positive
	for(var i=0;i<temp.length;i++){if(temp[i]<0){temp[i]=temp[i]+(2*Math.PI);}}
	
	temp.sort();//to find the minimum distance from desired angle (which is 90 from laser)
	
	var min=temp[2];
	var item=0;
	//for(var i=0;i<angleDifference.length;i++){
		//if(angleDifference[i]===min){item=i+1;}
	//}
	
	var searching=true;
	var count=0;
	
	while(searching){
		
		if(angleDifference[count]===min){item=count+1;searching=false;}
		else{count++;}
		
	}
	
	var differences="</br>laser-rg "+angleDifference[0]+"</br>laser-gb "+angleDifference[1]+"</br>laser-br "+angleDifference[2];
	
	var allAgles="min angle difference "+item+"</br>"+laserAngle+"1. red green "+firstSecondAngle+"</br>2. green blue "+secondThirdAngle+"</br>3. blue red "+thirdFirstAngle+differences;
	
	var laserRGB="rgb(155, 102, 102)";
	if(item===1){targetObject.laser.color=targetObject.second.color;targetObject.shield.color=targetObject.first.color;}
	if(item===2){targetObject.laser.color=targetObject.third.color;targetObject.shield.color=targetObject.second.color;}
	if(item===3){targetObject.laser.color=targetObject.first.color;targetObject.shield.color=targetObject.third.color;}

	return allAgles;
}

function resetRotations(){
	if(igju.first.speed>=fullRadian){igju.first.speed=0;}
	if(igju.second.speed>=fullRadian){igju.second.speed=0;}
	if(igju.third.speed>=fullRadian){igju.third.speed=0;}
	if(igju.shield.speed>=fullRadian){igju.shield.speed=0;}
	if(igju.laser.speed>=fullRadian){igju.laser.speed=0;}	
	igju.laser.angle=igju.laser.speed;//currently whatever the speed, that is the angle of it because it is in radians
	igju.shield.angle=igju.shield.speed;
}

function drawBullet(bulletObject){
	var x=Math.cos(bulletObject.angle)+bulletObject.x;
	var y=Math.sin(bulletObject.angle)+bulletObject.y;
	drawCircle(x,y,bulletObject.size,bulletObject.angle+0.2, bulletObject.angle-0.2,bulletObject.color, false,true);
	drawCircle(x,y,bulletObject.size+10,bulletObject.angle+0.7, bulletObject.angle-0.7,bulletObject.color, true,false);	
	bulletObject.x=x;
	bulletObject.y=y;
}

function clearCanvas(){
	context.clearRect(0, 0, canvas.width, canvas.height);
}

function igjuLocation(igju,x,y){
	igju.laser.x=x;
	igju.laser.y=y;
	igju.shield.x=x;
	igju.shield.y=y;
	
	igju.first.x=Math.cos(igju.first.speed+Math.PI/6*1)*50.1+igju.laser.x;
	igju.second.x=Math.cos(igju.third.speed+Math.PI/6*5)*50.1+igju.laser.x;
	igju.third.x=Math.cos(igju.second.speed-Math.PI/6*3)*50.1+igju.laser.x;
	
	igju.first.y=Math.sin(igju.first.speed+Math.PI/6*1)*50.1+igju.laser.y;
	igju.second.y=Math.sin(igju.third.speed+Math.PI/6*5)*50.1+igju.laser.y;
	igju.third.y=Math.sin(igju.second.speed-Math.PI/6*3)*50.1+igju.laser.y;
}

function shieldRotation(igju,speed){
	igju.shield.speed=speed;
}

function laserRotation(igju,speed){
	igju.laser.speed=speed;
}

function colorRotation(igju,speed){
	igju.first.speed=speed;
	igju.second.speed=speed;
	igju.third.speed=speed;
	
	igju.first.x=Math.cos(igju.first.speed)*50.1+igju.laser.x;
	igju.second.x=Math.cos(igju.third.speed+Math.PI/3*2)*50.1+igju.laser.x;
	igju.third.x=Math.cos(igju.second.speed-Math.PI/3*2)*50.1+igju.laser.x;
	
	igju.first.y=Math.sin(igju.first.speed)*50.1+igju.laser.y;
	igju.second.y=Math.sin(igju.third.speed+Math.PI/3*2)*50.1+igju.laser.y;
	igju.third.y=Math.sin(igju.second.speed-Math.PI/3*2)*50.1+igju.laser.y;
}

function initSource(){
	var angle=Math.random()*(Math.PI*2);
	igju.laser.x=200;
	igju.laser.y=200;
	igju.laser.angle=angle;
	//igju.laser.angle=0;
	igju.laser.speed=0;
	igju.laser.color="white";
	igju.laser.w=0.3;
	igju.laser.r=80;
	
	igju.shield.x=200;
	igju.shield.y=200;
	igju.shield.angle=angle;
	igju.shield.speed=0;
	igju.shield.color="#FFC900";//yellow
	igju.shield.w=0.4;
	igju.shield.r=10;
	//test purpose
	angle=0;
	igju.first.speed=angle;
	igju.first.color="#FF2904";//red
	igju.first.angle=0;
	igju.first.r=20;
	igju.first.w=2*Math.PI;
	igju.first.fill=true;
	
	igju.second.speed=angle;
	igju.second.color="#97d72d"; //green
	igju.second.angle=0;
	igju.second.r=20;
	igju.second.w=2*Math.PI;
	igju.second.fill=true;
	
	igju.third.speed=angle;
	igju.third.color="#00B3D6"; //blue
	igju.third.angle=0;
	igju.third.r=20;
	igju.third.w=2*Math.PI;
	igju.third.fill=true;
}

function drawIgju(igju){
	var radians=igju.shield.angle;
	drawCircle(igju.shield.x,igju.shield.y,igju.shield.r,igju.shield.angle+igju.shield.w,igju.shield.angle-igju.shield.w,igju.shield.color,igju.shield.clockwise,igju.shield.fill);
	drawCircle(igju.laser.x,igju.laser.y,igju.laser.r,igju.laser.angle+igju.laser.w,igju.laser.angle-igju.laser.w,igju.laser.color,igju.laser.clockwise,igju.laser.fill);
	
	drawCircle(igju.first.x,igju.first.y,igju.first.r,igju.first.angle+igju.first.w,igju.first.angle-igju.first.w,igju.first.color,igju.first.clockwise,igju.first.fill);
	
	drawCircle(igju.second.x,igju.second.y,igju.second.r,igju.second.angle+igju.second.w,igju.second.angle-igju.second.w,igju.second.color,igju.second.clockwise,igju.second.fill);
	
	drawCircle(igju.third.x,igju.third.y,igju.third.r,igju.third.angle+igju.third.w,igju.third.angle-igju.third.w,igju.third.color,igju.third.clockwise,igju.third.fill);
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
	if(radians<=0){radians=radians+(Math.PI*2);}
	
	//var radians=radianToDegree(radians);
	return radians;
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

var bullet = {x:"",y:"",w:"",h:"",size:"",angle:"",color:"",distance:"",strength:"",isShot:false};

var igju={
	shield:{x:"",y:"",w:"",h:"",r:"",angle:"",speed:"",color:"",opening:"",thickness:"",clockwise:false,fill:false},
	laser:{x:"",y:"",w:"",h:"",r:"",angle:"",speed:"",color:"",opening:"",thickness:"",clockwise:false,fill:false},
	first:{x:"",y:"",w:"",h:"",r:"",angle:"",speed:"",color:"",opening:"",thickness:"",clockwise:false,fill:false},
	second:{x:"",y:"",w:"",h:"",r:"",angle:"",speed:"",color:"",opening:"",thickness:"",clockwise:false,fill:false},
	third:{x:"",y:"",w:"",h:"",r:"",angle:"",speed:"",color:"",opening:"",thickness:"",clockwise:false,fill:false}
};

function targetObject(target){
	this.shieldx=target.shield.x; this.shieldy=target.shield.y; this.shieldw=target.shield.w; this.shieldh=target.shield.h; this.shieldr=target.shield.r; this.shieldangle=target.shield.angle; this.shieldspeed=target.shield.speed; this.shieldcolor=target.shield.color; this.shieldopening=target.shield.opening; this.shieldthickness=target.shield.thickness; this.shieldclockwise=target.shield.clockwise; this.shieldfill=target.shield.fill;
	this.laserx=target.laser.x; this.lasery=target.laser.y; this.laserw=target.laser.w; this.laserh=target.laser.h; this.laserr=target.laser.r; this.laserangle=target.laser.angle; this.laserspeed=target.laser.speed; this.lasercolor=target.laser.color; this.laseropening=target.laser.opening; this.laserthickness=target.laser.thickness; this.laserclockwise=target.laser.clockwise; this.laserfill=target.laser.fill;
	this.firstx=target.first.x; this.firsty=target.first.y; this.firstw=target.first.w; this.firsth=target.first.h; this.firstr=target.first.r; this.firstangle=target.first.angle; this.firstspeed=target.first.speed; this.firstcolor=target.first.color; this.firstopening=target.first.opening; this.firstthickness=target.first.thickness; this.firstclockwise=target.first.clockwise; this.firstfill=target.first.fill;
	this.secondx=target.second.x; this.secondy=target.second.y; this.secondw=target.second.w; this.secondh=target.second.h; this.secondr=target.second.r; this.secondangle=target.second.angle; this.secondspeed=target.second.speed; this.secondcolor=target.second.color; this.secondopening=target.second.opening; this.secondthickness=target.second.thickness; this.secondclockwise=target.second.clockwise; this.secondfill=target.second.fill;
	this.thirdx=target.third.x; this.thirdy=target.third.y; this.thirdw=target.third.w; this.thirdh=target.third.h; this.thirdr=target.third.r; this.thirdangle=target.third.angle; this.thirdspeed=target.third.speed; this.thirdcolor=target.third.color; this.thirdopening=target.third.opening; this.thirdthickness=target.third.thickness; this.thirdclockwise=target.third.clockwise; this.thirdfill=target.third.fill;
}

function bulletObject(bulletIn){
	this.x=bulletIn.x;
	this.y=bulletIn.y;
	this.size=bulletIn.size;
	this.angle=bulletIn.angle;
	this.color=bulletIn.color;
	this.distance=bulletIn.distance;
	this.strength=bulletIn.strength;
}
