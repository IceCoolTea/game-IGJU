//since we only need centers of elements x y will be center
//var myTimer = setInterval(req, 5);
//function req(){requestAnimationFrame(test);}
//var firstArc=function(canvas,context,x, y, size, radians1, radians2, bool){

var canvas;
var context;
var hexaMap;

//not sure why these used
var angle=Math.random()*360;
var differentSpeed=angle;
var differentSpeed2=angle;
var x=0;
var y=0;

var firstArc={
	x:0,
	y:0,
	size:0, 
	rad1:0, 
	rad2:0, 
	clockwise:true,
	
	execute:function(x,y,size,rad1,rad2){
		context.beginPath();
		context.arc(x,y,size,rad1,rad2,this.clockwise);
		context.lineWidth = 3;
		context.strokeStyle = hexaMap[Math.floor(Math.random())];
		context.stroke();
		context.closePath();
	}
};

var mouse = {x: 0, y: 0};

document.addEventListener('mousemove', function(e){ 
    mouse.x = e.clientX || e.pageX; 
    mouse.y = e.clientY || e.pageY 
}, false);


function start(){
	canvas=document.getElementById("igju");
	context=canvas.getContext("2d");
	hexaMap=newHexMap(1000);
	animate();
}
 
function animate(){
	draw();
	window.requestAnimationFrame(animate);
}

function draw(){	
	angle+=1;
	if(angle>=360){angle=0;}
	if(differentSpeed>=360){differentSpeed=0;}
	var size=15;	

	differentSpeed+=0.03;
	differentSpeed2+=0.02;
	
	//alert(angle);
	var radians = angle * (Math.PI/180);
	var r1=Math.random();
	var r2=Math.random();

	context.clearRect(0, 0, canvas.width, canvas.height);
	x=Math.cos(radians)*50.1+mouse.x;
	y=Math.sin(radians)*50.1+mouse.y;
	
	firstArc.execute(x,y,size,0,2*Math.PI);
	
	x=Math.cos(radians-Math.PI/3*2)*50.1+mouse.x;
	y=Math.sin(radians-Math.PI/3*2)*50.1+mouse.y;
	firstArc.execute(x,y,size,0,2*Math.PI);
	
	x=Math.cos(radians+Math.PI/3*2)*50.1+mouse.x;
	y=Math.sin(radians+Math.PI/3*2)*50.1+mouse.y;
	firstArc.execute(x,y,size,0,2*Math.PI);

	x=mouse.x;
	y=mouse.y;
	firstArc.clockwise=true;
	firstArc.execute(x,y,size+65,differentSpeed-0.2,differentSpeed+0.2);
	
	firstArc.execute(x,y,size,differentSpeed2-0.3,differentSpeed2+0.3);
	shootLaser(angle, mouse.x,mouse.y, 10);
	
}


function draw3(){
	//window.requestAnimationFrame(animate);
	updateObjects();
	drawObjects();
}

function updateObjects(){
	updateCircle();
	if(shoot()){updateLaser();}
	updateBoss();
}

function testState(){isColliding();}

//SOURCE or TARGET

var source = {
	x: "",
	y: "",
	w: "",
	h: "",
	facingAngle:"" //to determine which way is aiming
	
};



	


function shootLaser(angle, toX,toY, length){
	var radians =0;
	var x=0;
	var y=0;
	
	for(var i=0;i<length;i++){
		check(radians);
		radians=angle * (Math.PI/180);
		x=Math.cos(radians)*(i+i*15)+toX;
		y=Math.sin(radians)*(i+i*15)+toY;

		context.beginPath();
		//getAngleForArc(radians);
		context.arc(x, y, length, radians-0.2, radians+0.2, true);
		//context.fillStyle = hexaMap2[i];
		//context.fill();
		context.lineWidth = 3;
		context.strokeStyle = hexaMap[i];
		context.stroke();		
	}
}

function getAngleForArc(angle){

	return angle;
}

function shoot(source,target){
	
}

function boxColission(source,target){
	if (source.x < target.x + target.width &&
		source.x + source.width > target.x &&
		source.y < target.y + target.height &&
		source.height + source.y > target.y) {
		return true;
	}
}

function circleColission(source,target){
	var dx = (source.x + source.radius) - (target.x + target.radius);
	var dy = (source.y + source.radius) - (target.y + target.radius);
	var distance = Math.sqrt(dx * dx + dy * dy);
	if (distance < source.radius + target.radius) {
		return true;
	}
}


//each time you shoot, detect collisions
//so maybe no need for interval
//but boss might need interval when he is shooting
//each time boss shoots, detect collisions

//function detectCollisions(){
//	setInterval(detectCollision,33,source,lazerAngle,arrayOfLocations);
//}

//what is source is an object ?


//NEED average minimum required to fit in to gap, because 100% aim is not possible
function isAimingRight(x1,y1,aimAngle,x2,y2,precision){
	
}

function isColliding(sourceObject,targetObject){
	
}


function isColliding2(source,lazerAngle,arrayOfLocations){
	//detect collision with what...
  source=source.split(",");
	
	var id=arrayOfLocations[0].split(",");
	var x=arrayOfLocations[1].split(",");
	var y=arrayOfLocations[2].split(",");
	//check angles of each location
	//check if lazer angle ¬ each location angle
	//for(var i=0;i<arrayOfLocations.length;i++){
		//if(lazer angle ¬ calculate angle source vs array of locations){
			//execute damagethis(current id);
		//}
	//}
}

//this function might be helpful when deciding which quadrant what angle
function angleConvertor(angle){
	var incrementor={
		x:0,
		y:0
	};
	if(angle===360){angle=0;}
	
	if(angle<=89 && angle >=0){
		
	}
	
	if(angle<=179 && angle >=90){
		angle-=90;
	}
	
	if(angle<=269 && angle >=180){
		angle-=180;
	}
	
	if(angle<=359 && angle >=270){
		angle-=270;
	}
	
	//var angel=
	return incrementor;
}

function randomDivLocation(idIn){
	positionDiv(idIn,Math.floor(Math.random()*1600),Math.floor(Math.random()*800));
}

function positionDiv(idIn,x,y){
	document.getElementById(idIn).style.left=x+"px";
	document.getElementById(idIn).style.top=y+"px";
}

function rotateDiv(idToRotate,angle) {
	// transform rotate for all browsers woohoo
	document.getElementById(idToRotate).style.WebkitTransform = "rotate("+angle+"deg)";
	document.getElementById(idToRotate).style.msTransform = "rotate("+angle+"deg)";
	document.getElementById(idToRotate).style.transform = "rotate("+angle+"deg)";	
}

function getAngle(sourceX,sourceY,targetX,targetY){
	var x=targetX-sourceX;
	var y=targetY-sourceY;
	var radians=Math.atan2(y, x);//x y to radians
	var angle=radians * 180/Math.PI; //radians to degrees
	return angle;
}

function getDivCenterX(idIn){
	var element=document.getElementById(idIn);
	var offset = element.offsetLeft;
	var width = element.offsetWidth ;
	var x = offset + (width / 2);
	return x;
}

function getDivCenterY(idIn){
	var element=document.getElementById(idIn);
	var offset = element.offsetTop;
	var height = element.offsetHeight ;
	var y = offset + (height / 2);
	return y;
}

//mite be useful later since it gives correct quadrants
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

// OBJECTS LOCATION

var firstArc2=function(x, y, size, radians1, radians2){
		context.beginPath();
		context.arc(x, y, size, radians1, radians2, true);
		context.lineWidth = 3;
		context.strokeStyle = "#ffffff";
		context.stroke();
		context.closePath();
}
