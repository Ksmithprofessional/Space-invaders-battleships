const log = document.querySelector('.keypress');
const game = document.querySelector('.game-container');
const ship = document.querySelector("#ship");
let shipPos = 0;
const bullet = document.querySelector(".bullet");
let bulletPos = 5;
let remainingBullets = 10;
let remainingShips = 3;
const shipTotal = document.querySelector(".remaining");
shipTotal.textContent = "Ships remaining: " + remainingShips + " Remaining shots: " + remainingBullets;
const enemy1 = document.querySelector(".enemy-1");
const enemy2 = document.querySelector(".enemy-2");
const enemy3 = document.querySelector(".enemy-3");
const enemy1Ex = document.querySelector(".enemy-1-explode");
const enemy2Ex = document.querySelector(".enemy-2-explode");
const enemy3Ex = document.querySelector(".enemy-3-explode");
let leftNums = [0, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000];
let bottomNums = [55, 105, 155, 205, 255, 305, 355, 405, 455, 505];

let leftPos1 = leftNums[Math.floor(Math.random() * 20) + 1];
let bottomPos1 = bottomNums[Math.floor(Math.random() * 9) + 1];
let leftPos2 = leftNums[Math.floor(Math.random() * 20) + 1];
let bottomPos2 = bottomNums[Math.floor(Math.random() * 9) + 1];
let leftPos3 = leftNums[Math.floor(Math.random() * 20) + 1];
let bottomPos3 = bottomNums[Math.floor(Math.random() * 9) + 1];

enemy1.style.left = leftPos1 + "px";
enemy1.style.bottom = bottomPos1 + "px";
enemy1Ex.style.left = leftPos1 + "px";
enemy1Ex.style.bottom = bottomPos1 + "px";
enemy2.style.left = leftPos2 + "px";
enemy2.style.bottom = bottomPos2 + "px";
enemy2Ex.style.left = leftPos2 + "px";
enemy2Ex.style.bottom = bottomPos2 + "px";
enemy3.style.left = leftPos3 + "px";
enemy3.style.bottom = bottomPos3 + "px";
enemy3Ex.style.left = leftPos3 + "px";
enemy3Ex.style.bottom = bottomPos3 + "px";


document.addEventListener('keydown', logKey);

// still to do: enemy positions shouldn't be able to be the same, bug: remaining still goes down even if ship removed.

function logKey(e) {

    // log.textContent += ` ${e.keyCode}`;
    
    if (e.keyCode === 68) {

        if (shipPos === 1000) {

            e.preventDefault();
        } if (bulletPos > 5 && bulletPos < 505) {

            e.preventDefault();
        } else {
            shipPos += 50;
            // console.log('hello');
            ship.style.left = shipPos + "px";
        }

    } if (e.keyCode === 65) {

        if (shipPos === 0) {

            e.preventDefault();
        } if (bulletPos > 5 && bulletPos < 505) {

            e.preventDefault();
        } else {

            shipPos -= 50;
            // console.log('hello');
            ship.style.left = shipPos + "px";
        }
    } if (e.keyCode === 87) {

        if (bulletPos > 5 && bulletPos < 505) {

            e.preventDefault();
        } else {

            remainingBullets -= 1;
            shipTotal.textContent = "Ships remaining: " + remainingShips + " Remaining shots: " + remainingBullets;
            bulletPos = 5;
            bullet.style.left = shipPos + 4 + "px";
            bullet.style.display = "block";
            bullet.style.bottom = bulletPos + 50 + "px";

            for (let i=0; i<10; i++){

                // console.log('hello');
                setTimeout(function(){
                    bulletPos += 50;
                    bullet.style.bottom = bulletPos + "px";

                    if (bulletPos === bottomPos1 && shipPos === leftPos1) {

                        shipTotal.textContent = "Ships remaining: " + (remainingShips -= 1) + " Remaining shots: " + remainingBullets;
                        enemy1.style.left = "-20px";
                        enemy1.style.bottom = "495px";
                        enemy1.style.display = "block";
                        enemy1Ex.style.display = "block";

                    } if (bulletPos === bottomPos2 && shipPos === leftPos2) {

                        shipTotal.textContent = "Ships remaining: " + (remainingShips -= 1) + " Remaining shots: " + remainingBullets;
                        enemy2.style.left = "-20px";
                        enemy2.style.bottom = "475px";
                        enemy2.style.display = "block";
                        enemy2Ex.style.display = "block";

                    } if (bulletPos === bottomPos3 && shipPos === leftPos3) {

                        shipTotal.textContent = "Ships remaining: " + (remainingShips -= 1) + " Remaining shots: " + remainingBullets;
                        enemy3.style.left = "-20px";
                        enemy3.style.bottom = "455px";
                        enemy3.style.display = "block";
                        enemy3Ex.style.display = "block";

                    } if (remainingShips === 0) {
                        setTimeout(function(){
                        alert('You win! Please refresh to play again');
                    }, 1000);
                    } if (remainingBullets === -1) {

                        alert('You ran out of bullets! Please refresh to play again');
                    } 
                }, 300 * i);
            }

        }
       
    }


};