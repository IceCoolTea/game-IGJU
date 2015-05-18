//since we only need centers of elements x y will be center
//HOW TO CREATE OBJECTS


//var myTimer = setInterval(req, 5);
//function req(){requestAnimationFrame(test);}
 
//var firstArc=function(canvas,context,x, y, size, radians1, radians2, bool){

var canvas;
var context;
var hexaMap;

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


	var angle=Math.random()*360;
	var differentSpeed=angle;
	var differentSpeed2=angle;
	var x=0;
	var y=0;
	


function shootLaser(angle, from, length){
	for(var i=from;i<to;i++){
		x=Math.cos(radians)*(i+i*15)+400;
		y=Math.sin(radians)*(i+i*15)+300;

		context.beginPath();
		//getAngleForArc(radians);
		context.arc(x, y, size, radians-0.2, radians+0.2, true);
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

function test77(){
	var hexaMap=newHexMap(100);
	var x=100;
	var y=300;
	var arr=[10,20,30,40,50,60,10,2,3,4,1,9,6,3,10,2,4,6,8,4,2,1,2,30,5,70,8,20,20,4,6,7,2,2,30,40,60,90,0,7,4];
	var arr2=[6,8,4,2,1,2,30,5,70,8,20,20,4,70,20,30,40,50,60,10,2,3,4,1,9,6,3,10,2,4,6,7,2,2,30,40,60,90,0,7,4];
	
	// 500 50
	var angle=Math.random()*360;
	var size=25;	
	for(var i=0;i<100;i++){
		
		
		//x=Math.cos(this._angle)*b,a.body.velocity.y=Math.sin(this._angle)*b,this._angle
		//q 3
		//35%;
		//90'- 1.0
		//35'- x
		//35/90
		//
		
		//CIRCLE
		//var angle=120;
		//x=Math.cos(i/5)*100+300;
		//y=Math.sin(i/5)*100+300;
		
		//SPIRAL STAR
		//var angle=120;
		//x=Math.cos(i)*i*3+300;
		//y=Math.sin(i)*i*3+300;
		
		//SPIRAL
		//var angle=120;
		//x=Math.cos(i/5)*i+300;
		//y=Math.sin(i/5)*i+300;
		
		//make bigger
		//var angle=120;
		//x=Math.cos(i)*i*5+300;
		//y=Math.sin(i)*i*5+300;
		
		//draw line
		var angle=180;
		var radians = angle * (Math.PI/180);
		x=Math.cos(radians)*(i)*10+400;
		y=Math.sin(radians)*(i)*10*-1+400;
		//x+=100;
		//y+=100;

		newDiv("source"+i);
		newStyle("source"+i,"backgroundColor",hexaMap[i]);
		newStyle("source"+i,"borderRadius","50%");
		newStyle("source"+i,"position","absolute");
		newStyle("source"+i,"height",size+"px");
		newStyle("source"+i,"width",size+"px");
		newStyle("source"+i,"left",x+"px");
		newStyle("source"+i,"top",y+"px");

	}
}

function angelConvertoor(angle){
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

function test6(){
	newIdElement("");
	setInterval(randomTest, 1000);
	//generate color map
	var hexaMap=newHexMap(10000);
	
	for(var i=0;i<10000;i++){
		//source id creation
		newIdElement("source"+i);
		//newClass("source"+i,"itiSmall");
		//document.getElementById("source"+i).innerHTML='<div class="itiBlack"></div><div class="itiBlueH"></div><div class="itiGreen"></div><div class="itiRed"></div><div class="itiBlueV"></div><div class="itiYellow"></div><div class="itiWhite"></div>';
		newIdStyle("source"+i,"backgroundColor",hexaMap[i]);
		newIdStyle("source"+i,"zIndex","10");
		var size=UbabyEngine(mMap,1)+"px";
		newIdStyle("source"+i,"height",size);
		newIdStyle("source"+i,"width",size);
		newIdStyle("source"+i,"borderRadius","50%");
		newIdStyle("source"+i,"position","absolute");
		//document.getElementById("source"+i).innerHTML='<div style="position:absolute; height:10px; width:10px; border-radius:50%; background-color="'+hexaMap[i]+';></div>';
		randomDivLocation("source"+i);
		
		//lazer id creation
		newIdElement("lazor"+i);
		newClass("lazor"+i,"lazerStyle");
	}

}

function randomTest(){
		var hexaMap=newHexMap(100);
		randomDivLocation("target");
		newIdStyle("target","backgroundColor",hexaMap[0]);
		newIdStyle("target","zIndex","10");
		var size=UbabyEngine(mMap,1)+"px";
		newIdStyle("target","height",size);
		newIdStyle("target","width",size);
		newIdStyle("target","borderRadius","50%");
		newIdStyle("target","position","absolute");


	var targetX=getDivCenterX("target");
	var targetY=getDivCenterY("target");
	
	for(var i=0;i<100;i++){
		
		randomDivLocation("source"+i);
		
		var sourceX=getDivCenterX("source"+i);
		var sourceY=getDivCenterY("source"+i);
		var angle=getAngle(sourceX,sourceY,targetX,targetY);
		positionDiv("lazor"+i,sourceX,sourceY);
		newIdStyle("lazor"+i,"backgroundColor",hexaMap[i]);
		rotateDiv("lazor"+i,angle);
	}
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
