//error check
//List Of Functions available
/*
check(message);
ranStr(arr);
ranInt(min,max);
newDiv(idIn,targetId);
newClass(idIn,classNameIn);
newStyle(idIn,styleToEdit,value);
removeDiv(idIn,targetId);
cleanDiv(idIn);
textDiv(idIn,text);
innerDiv(idIn,text);
textInput(idIn,text);
getTime();
newImg(imgIdIn,path);
newDivImage(idIn,path);
cleanEmpty(strToClean);
*/

function check(message){
	if(!document.getElementById("test2")){
		newDiv("test2");
		newStyle("test2","position","absolute");
		newStyle("test2","top","0px");
		newStyle("test2","left","0px");
		newStyle("test2","backgroundColor","white");
		newStyle("test2","zIndex","100");
	}
	document.getElementById("test2").innerHTML+=message;
}

//quick test
function test5(){
var test=0;

check(test);test++;
check(test);test++;
	
	newDiv("toContainer");
	newDiv("newDivs","toContainer");
	removeDiv("toContainer");
}


//random
function ranStr(arr){
	return arr[Math.floor(Math.random()*(string.length))];
}

function ranInt(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//divs
function newDiv(idIn,targetId){
	//not exists, create it
	if(!document.getElementById(idIn)){
		var div=document.createElement("div")
		div.id=idIn;
		document.getElementsByTagName("body")[0].appendChild(div);
	}
	//target defined, append it
	if(targetId!==undefined){document.getElementById(targetId).appendChild(document.getElementById(idIn));}	
}

function newClass(idIn,classNameIn){
	var cls=document.getElementById(idIn);
	cls.className=classNameIn;
}

function newStyle(idIn,styleToEdit,value){
	var st=document.getElementById(idIn).style;
	st[styleToEdit]=value;
}

function removeDiv(idIn,targetId){
	if(targetId!==undefined){document.getElementById(targetId).removeChild(document.getElementById(idIn));}	
	else{document.getElementsByTagName("body")[0].removeChild(document.getElementById(idIn));}
}

function cleanDiv(idIn){document.getElementById(idIn).innerHTML="";}

function textDiv(idIn,text){document.getElementById(idIn).textContent=text;}
function innerDiv(idIn,text){document.getElementById(idIn).innerHTML=text;}
function textInput(idIn,text){document.getElementById(idIn).value=text;}

function getTime(){
	var time = new Date();
	var milliseconds = time.getTime();
	return milliseconds;
}

function newImg(imgIdIn,path){
	document.getElementById(imgIdIn).src=path;
}

function newDivImage(idIn,path){
	document.getElementById(idIn).style.src=path;
}

function cleanEmpty(strToClean){
	var clean=strToClean;
	upload=upload.replace(/\t+/g, '');
	upload=upload.replace(/\n+/g, '');
	upload=upload.replace(/\r+/g, '');
	return clean;
}
