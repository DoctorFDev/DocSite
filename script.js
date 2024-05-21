/*
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
*/