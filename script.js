var display = document.getElementById('display');

var firstvalue = display.innerText;

var hist = document.getElementById('hist');

var button1 = document.getElementById('one');
var button2 = document.getElementById('two');
var button3 = document.getElementById('three');
var button4 = document.getElementById('four');
var button5 = document.getElementById('five');
var button6 = document.getElementById('six');
var button7 = document.getElementById('seven');
var button8 = document.getElementById('eight');
var button9 = document.getElementById('nine');
var button0 = document.getElementById('zero');
var buttondec = document.getElementById('decimal');
var buttonac = document.getElementById('ac');
var buttondev = document.getElementById('devide');
var buttonmul = document.getElementById('multiply');
var buttonplu = document.getElementById('plus');
var buttonmin = document.getElementById('minus');
var buttonplm = document.getElementById('plusminus');
var buttonper = document.getElementById('percentage');
var buttonequ = document.getElementById('equal');

button1.addEventListener("click",()=>{express("1")});
button2.addEventListener("click",()=>{express("2")});
button3.addEventListener("click",()=>{express("3")});
button4.addEventListener("click",()=>{express("4")});
button5.addEventListener("click",()=>{express("5")});
button6.addEventListener("click",()=>{express("6")});
button7.addEventListener("click",()=>{express("7")});
button8.addEventListener("click",()=>{express("8")});
button9.addEventListener("click",()=>{express("9")});
button0.addEventListener("click",()=>{express("0")});
buttonplm.addEventListener("click",plm);
buttonper.addEventListener("click",()=>{express("%")});
buttondec.addEventListener("click",()=>{express(".")})
buttonplu.addEventListener("click",()=>{express("+")});
buttonmin.addEventListener("click",()=>{express("-")});
buttonmul.addEventListener("click",()=>{express("*")});
buttondev.addEventListener("click",()=>{express("/")});
buttonequ.addEventListener("click",()=>{var temp = firstvalue;
	firstvalue = eval(firstvalue);
	hist.innerText=temp;
	display.innerText = firstvalue;
});

function plm(){
	var temp = -1*parseInt(firstvalue);
	console.log("hello")
	firstvalue = ""+temp;
	display.innerText = firstvalue;
}

buttonac.addEventListener("click",()=>{reset();});

function reset(){
	firstvalue = "0";
	display.innerText = "0";
	hist.innerText = "";
}


var express = function(value){
	if(firstvalue=="0" && value != "0"){
		firstvalue = value;
	}
	else if(firstvalue=="0" && value==".") {
		firstvalue+=value;
	}
	else{
		firstvalue +=value;
	}
	display.innerText = firstvalue;
}

