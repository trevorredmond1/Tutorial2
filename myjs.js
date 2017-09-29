document.getElementById("TopButton").addEventListener("click",
function(){
    document.getElementById("control").style.left = "0px";
});



document.getElementById("BottomButton").addEventListener("click",
function(){
    document.getElementById("control").style.left = "-200px";
});


document.getElementById("bg1").addEventListener("click",
function(){
    
    document.getElementById("backgroundImage").style.backgroundImage = "url(img/bg1.jpg)"; 
});



document.getElementById("bg2").addEventListener("click",
function(){
    
    document.getElementById("backgroundImage").style.backgroundImage = "url(img/bg2.png)"; 
});



document.getElementById("bg3").addEventListener("click",
function(){
    
    document.getElementById("backgroundImage").style.backgroundImage = "url(img/bg3.jpg)"
});



document.getElementById("bg4").addEventListener("click",
function(){
    
    document.getElementById("backgroundImage").style.backgroundImage = "url(img/bg4.jpg)"
});