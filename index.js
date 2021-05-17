
var randomNumber1=Math.floor(Math.random()*6)+1;

var randomImage1= "dice" + randomNumber1 + ".png";

 var image1 =document.querySelectorAll("img")[0].setAttribute("src",randomImage1);


 var randomNumber2=Math.floor(Math.random()*6)+1;

 var randomImage2="dice"+ randomNumber2+".png";

 var image2= document.querySelectorAll("img")[1].setAttribute("src", randomImage2);

 if(randomNumber1>randomNumber2){
 document.querySelector("h1").textContent="Player 1 won!";
 }
 else if(randomNumber1<randomNumber2){
 document.querySelector("h1").textContent="Player 2 won!";
 }
 else{
 document.querySelector("h1").textContent="Draw!";
 }


 