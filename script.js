score=0;
cross=true;
notOver=true;
music= new Audio('music.mp3');
audiogo=new Audio('gameover.mp3');
win= new Audio('win.mp3');
setTimeout(()=>{
    music.play();
},1000)
document.onkeydown = function(e){
    console.log("Key code is:", e.keyCode)
    if(e.keyCode == 38 && notOver==true ){
        man = document.querySelector('.man');
        man.classList.add('animateMan')
        setTimeout(() => {
            man.classList.remove('animateMan')
        }, 700);
    }
    if(e.keyCode == 39 && notOver==true){
        man = document.querySelector('.man');
        mx= parseInt(window.getComputedStyle(man,null).getPropertyValue('left'));
        man.style.left = mx + 70 + "px";        

    }
    if(e.keyCode == 37 && notOver==true){
        man = document.querySelector('.man');
        mx= parseInt(window.getComputedStyle(man,null).getPropertyValue('left'));
        man.style.left = mx - 70 + "px";        

    }
}
setInterval(() => {
    man= document.querySelector('.man');
    gameOver= document.querySelector('.gameOver');
    covid=document.querySelector('.covid');

    mx= parseInt(window.getComputedStyle(man,null).getPropertyValue('left'));
    my= parseInt(window.getComputedStyle(man,null).getPropertyValue('top'));

    cx= parseInt(window.getComputedStyle(covid,null).getPropertyValue('left'));
    cy= parseInt(window.getComputedStyle(covid,null).getPropertyValue('top'));

    offsetX= Math.abs(mx-cx);
    offsetY= Math.abs(my-cy);
    if(offsetX < 93 && offsetY < 55 && notOver==true){
        gameOver.innerHTML= "Game over";
        covid.classList.remove('animateCovid');
        audiogo.play();
        music.pause();
        setTimeout(()=>{
            audiogo.pause();
        },1000)
    }
    else if(offsetX<55 && cross && gameOver.innerHTML!="Game over"){
        score+=101;
        updateScore(score);
        cross=false;
        setTimeout(() => {
            cross=true;
        }, 1000);
    }

    if(score >=0 &&  score <2020 && gameOver.innerHTML!="Game over"){
        gameOver.innerHTML= "Welcome to 2020, Score '2020' to survive" ;
    }
    if(score >=2020 && gameOver.innerHTML!="Game over"){
        notOver=false;
        covid.classList.remove('animateCovid');
        gameOver.innerHTML="Hey,you survived 2020!!<br> I know this year has been hard and not what you planned for<br> but do not lose HOPE.<br>If we believe that tomorrow will be better,<br> we can bear hardship today<br> ALL THE BEST FOR 2021!!";
        win.play();
        music.pause();
    }
}, 100);

function updateScore(score){
    scoreCount.innerHTML="Your score is :" + score;
}