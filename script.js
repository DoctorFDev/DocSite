const background = document.querySelector('.background');

let currentPosition = 0;
let direction = 'right';
let timeoutLeft = 20;
let timeoutRight = 20;


window.addEventListener('DOMContentLoaded', () => {
    const background = document.getElementById('infinite-background');

    function moveBackground() {
      let currentOffset = parseInt(getComputedStyle(background).backgroundPositionX);
  
      currentOffset++;
  
      background.style.backgroundPositionX = currentOffset + 'px';
  
      requestAnimationFrame(moveBackground);
    }
    moveBackground();
});

document.addEventListener("DOMContentLoaded", function() {
    const changeBtn = document.getElementById("changeBtn");
    const background = document.querySelector(".background");
    const container = document.querySelector(".main-container");
    const link = document.querySelector(".a-itchio");
    let flag = false;
    
    changeBtn.addEventListener("click", function() {

        if (flag === false) {
            const otherBackground = 'url("bg.png")';
            const otherColor = '#000000'
            const  otherMainColor = '#FFFFFF'
        
            background.style.backgroundImage = otherBackground;
            container.style.backgroundColor = otherColor;
            link.style.color = otherMainColor;
            document.body.style.color = otherMainColor;
            flag = true;
        } else if (flag === true) {
            const otherBackground = 'url("bg_alt.png")';
            const otherColor = '#FFFFFF'
            const otherMainColor = '#000000'
        
            background.style.backgroundImage = otherBackground;
            container.style.backgroundColor = otherColor;
            link.style.color = otherMainColor;
            document.body.style.color = otherMainColor;
            flag = false;
        }
    });
});
