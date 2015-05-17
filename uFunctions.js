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
//
//
//
// THIS BELOW HAS TO BE RENEWED AND MERGED TO THIS THING ABOVE
//
//
//
//
/*################################# Ubaby Engine! ##########################################*/
function UbabyEngine(U,baby){var says = U.split(",");
var and=UbabyEngine2(says,baby);
return and;}
/*##########################################################################################*/
/*		@parameter  String which is item map separated by ,	it could be symbols or words	*/
/*		@parameter  int positive, if 1 is used you get back just 1 item						*/
/* 		@return		String of int size, joined randomly picked items from your map			*/
/*##########################################################################################*/

/*################################# Ubaby Engine2! ##########################################*/
function UbabyEngine2(says,baby){baby=Number(baby); var hi=new Array(baby);var and="";
for ( var I = 0; I < baby; I++){
hi[I]=(Math.floor(Math.random()*(says.length-0)))+0;}
for (var love = 0; love < baby; love++){
for (var you = 0; you < says.length; you++){
if (hi[love] == you){and+= says[you];}}}return and;}
/*##########################################################################################*/
/*		@parameter  Accepts String array													*/
/*		@parameter  int positive, if 1 is used you get back just 1 item						*/
/* 		@return		String of int size, joined randomly picked items from your map			*/
/*##########################################################################################*/


//random integer between
function newRanInt(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//return hex string of random colors 
function newHexMap(colorAmount){
	var colMap=new Array(colorAmount);
	for(var i=0;i<colorAmount;i++)
	{
		colMap[i]="#"+UbabyEngine(hexaMap,"6");
	}
	//convert array to string
	//colorMap=colMap.toString();
	return colMap;
}

//add id element
function newIdElement(idIn){
	var dv=document.createElement("div");
	dv.id=idIn;
	document.getElementsByTagName("body")[0].appendChild(dv);
}

//remove id element
function newIdRemove(idFrom,idWhat){
	document.getElementById(idFrom).removeChild(document.getElementById(idWhat));
}

//remove bodyRemove
function newBodyRemove(idIn){
	document.getElementsByTagName("body")[0].removeChild(document.getElementById(idIn));
}

//append id to another id
function newIdAppend(idTo,idIn){
document.getElementById(idTo).appendChild(document.getElementById(idIn));
}

//add id style
function newIdStyle(idIn,styleToEdit,value){
var s=document.getElementById(idIn).style;
s[styleToEdit]=value;
}

//replace class
function newClass(idIn,classNameIn){
	var c=document.getElementById(idIn);
	c.className=classNameIn;
}

//add action listener to id  (id, mouseclick,mouseover..., what function to run)
function newAction(idIn,listenTo,runFunction){
	var getId=document.getElementById(idIn);
	getId.addEventListener(listenTo, window[runFunction]);
}

//remove action from (id, mouseclick,mouseover..., what function to run)
function newActionRemove(idIn,listenTo,runFunction){
	var getId=document.getElementById(idIn);
	getId.removeEventListener(listenTo, window[functionNameIn]);
}

//returns time in milliseconds
function newTime(){
	var time = new Date();
	var milliseconds = time.getTime();
	return milliseconds;
}

//run audio
function newAudio(filename){
	audio=new Audio(filename);
	audio.play();
}

//change image
function newImage(idIn,path){
	document.getElementById(idIn).src=path;
}

//cursor
function newCursor(idIn,cursor){
document.getElementById(idIn).style.cursor=cursor;
}

//remove empty
function newCleanEmpty(strToClean){
	var clean=strToClean;
	upload=upload.replace(/\t+/g, '');
	upload=upload.replace(/\n+/g, '');
	upload=upload.replace(/\r+/g, '');
	return clean;
}
//sort
function sortaz(stringToSort, separator){
	var split=stringToSort.split(separator);
	var sorted=split.sort();
	return sorted;
}

//new text
function newText(idIn,text){
	document.getElementById(idIn).textContent=text;
}

//new text ADD
function newTextAdd(idIn,text){
	document.getElementById(idIn).textContent+=text;
}

//clean inside of id
function newCleanElement(idIn){
	document.getElementById(idIn).innerHTML="";
}
