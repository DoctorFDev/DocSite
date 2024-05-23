const background = document.querySelector('.background');

let currentPosition = 0;
let direction = 'right';
let timeoutLeft = 20;
let timeoutRight = 20;

function moveBackground() {
    if (direction === 'left') {
        currentPosition--;
        setTimeout(moveBackground, timeoutLeft);
    } else {
        currentPosition++;
        setTimeout(moveBackground, timeoutRight);
    }

     background.style.backgroundPositionX = currentPosition + 'px';

    if (currentPosition === background.clientWidth / 2) {
        direction = 'left';
        if (timeoutRight > 5) {
            timeoutRight -= 0.1;
        }
        
        } else if (currentPosition === 0) {
            direction = 'right';
            if (timeoutLeft > 5) {
                timeoutLeft -= 0.1;
            }
        }
    }

     moveBackground();

document.addEventListener("DOMContentLoaded", function() {
    const changeBtn = document.getElementById("changeBtn");
    const background = document.querySelector(".background");
    const container = document.querySelector(".main-container");
    let flag = false;
    
    changeBtn.addEventListener("click", function() {

        if (flag === false) {
            const otherBackground = 'url("static/bg.png")';
            const otherColor = '#000000'
            const  otherMainColor = '#FFFFFF'
        
            background.style.backgroundImage = otherBackground;
            container.style.backgroundColor = otherColor;
            document.body.style.color = otherMainColor;
            flag = true;
        } else if (flag === true) {
            const otherBackground = 'url("static/bg_alt.png")';
            const otherColor = '#FFFFFF'
            const otherMainColor = '#000000'
        
            background.style.backgroundImage = otherBackground;
            container.style.backgroundColor = otherColor;
            document.body.style.color = otherMainColor;
            flag = false;
        }
    });
});
