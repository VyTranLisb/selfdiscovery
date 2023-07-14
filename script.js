var form1 = document.getElementById('form1');
var form2 = document.getElementById('form2');
var form3 = document.getElementById('form3');
var form4 = document.getElementById('form4');
var form5 = document.getElementById('form5');

var next1 = document.getElementById('next1');
var next2 = document.getElementById('next2');
var next3 = document.getElementById('next3');
var next4 = document.getElementById('next4');
var back1 = document.getElementById('back1');
var back2 = document.getElementById('back2');
var back3 = document.getElementById('back3');
var back4 = document.getElementById('back4');

var progress = document.getElementById('progress')

next1.onclick = function(){
    form1.style.left = "-450px";
    form2.style.left = "40px";
    progress.style.width = "160px";
}

back1.onclick = function(){
    form1.style.left = "40px";
    form2.style.left = "450px";
    progress.style.width = "80px";
}

next2.onclick = function(){
    form2.style.left = "-450px";
    form3.style.left = "40px";
    progress.style.width = "240px";
}

back2.onclick = function(){
    form2.style.left = "40px";
    form3.style.left = "450px";
    progress.style.width = "160px";
}

next3.onclick = function(){
    form3.style.left = "-450px";
    form4.style.left = "40px";
    progress.style.width = "320px";
}

back3.onclick = function(){
    form3.style.left = "40px";
    form4.style.left = "450px";
    progress.style.width = "240px";
}

next4.onclick = function(){
    form4.style.left = "-450px";
    form5.style.left = "40px";
    progress.style.width = "400px";
}

back4.onclick = function(){
    form4.style.left = "40px";
    form5.style.left = "450px";
    progress.style.width = "320px";
}



