// JavaScript source code

const images = document.querySelectorAll('.transitioning');
var current = 0;

function showNextImage() {
    images[current].classList.remove('showing');
    current = (current + 1) % images.length; // loop back to first image
    images[current].classList.add('showing');
}

setInterval(showNextImage, 3000); // change image every 3 seconds

// Target all elements to save to constants
const page1btn = document.querySelector("#page1btn");
const page2btn = document.querySelector("#page2btn");
const page3btn = document.querySelector("#page3btn");
var allpages = document.querySelectorAll(".page");
// Select all subtopic pages
console.log(allpages);
hideall();

function hideall() { // Function to hide all pages
    for (var i = 0; i < allpages.length; i++) { // Go through all subtopic pages
        allpages[i].style.display = "none"; // Hide it
    }
}

function show(pgno) { // Function to show selected page no
    hideall();
    // Select the page based on the parameter passed in
    var onepage = document.querySelector("#page" + pgno);
    // Show the page
    onepage.style.display = "block";
}

/* Listen for clicks on the buttons, assign anonymous
eventhandler functions to call show function */
page1btn.addEventListener("click", function () {
    show(1);
});
page2btn.addEventListener("click", function () {
    show(2);
});
page3btn.addEventListener("click", function () {
    show(3);
});

const hamBtn = document.querySelector("#hamIcon");
hamBtn.addEventListener("click", toggleMenus);
const menuItemsList = document.querySelector("nav ul");

function toggleMenus() { /* Open and close menu */
    if (menuItemsList.style.display == "flex")
        menuItemsList.style.display = "none";
    else menuItemsList.style.display = "flex";
}

/* Game animation */

document.addEventListener("DOMContentLoaded", function () {
    const roach = document.getElementById('roach');
    const tongue = document.getElementById('tongue');
    const dragon = document.getElementById('dragon');
    const scoreboard = document.getElementById('scoreboard');
    const gameArea = document.getElementById('game-area');

    var score = 0;

    function updateScore() {
        score++;
        scoreboard.textContent = 'Score: ' + score;
    }

    function randomPosition() {
        const gameAreaRect = gameArea.getBoundingClientRect();
        const x = Math.random() * (gameAreaRect.width - roach.clientWidth);
        const y = Math.random() * (gameAreaRect.height - roach.clientHeight);
        roach.style.left = (x / gameAreaRect.width * 100) + '%';
        roach.style.top = (y / gameAreaRect.height * 100) + '%';
    }

    roach.addEventListener('click', function () {
        // Get the position of the roach
        const roachRect = roach.getBoundingClientRect();
        const gameAreaRect = gameArea.getBoundingClientRect();
        const dragonRect = dragon.getBoundingClientRect();

        // Calculate the end position for the tongue
        const targetX = ((roachRect.left - gameAreaRect.left) / gameAreaRect.width) * 100;
        const targetY = ((roachRect.top - gameAreaRect.top) / gameAreaRect.height) * 100;

        // Set initial position and size of the tongue (relative to the dragon's mouth)
        tongue.style.left = ((dragonRect.left - gameAreaRect.left + dragon.clientWidth / 2) / gameAreaRect.width * 100) + '%';
        tongue.style.top = ((dragonRect.top - gameAreaRect.top + dragon.clientHeight / 3) / gameAreaRect.height * 100) + '%';
        tongue.style.height = '0';

        // Trigger reflow to apply the initial position before animating
        void tongue.offsetHeight;

        // Animate the tongue to the roach
        tongue.style.height = '30vw';
        tongue.style.left = targetX + '%';
        tongue.style.top = targetY + '%';

        // Reset the tongue and respawn the roach after a short delay
        setTimeout(function () {
            tongue.style.height = '0';
            tongue.style.left = ((dragonRect.left - gameAreaRect.left + dragon.clientWidth / 2) / gameAreaRect.width * 100) + '%';
            tongue.style.top = ((dragonRect.top - gameAreaRect.top + dragon.clientHeight / 3) / gameAreaRect.height * 100) + '%';

            // Update score and respawn the roach
            updateScore();
            randomPosition();
        }, 500);
    });

    // Initialize the first random position of the roach
    randomPosition();

    // Move the roach to a new random position every 2 seconds
    setInterval(randomPosition, 2000);
});

document.addEventListener("DOMContentLoaded", function () {
    // Add event listeners for each button
    document.getElementById("beardButton").addEventListener("click", function () {
        showInfo('beardpart');
    });
    document.getElementById("eyesButton").addEventListener("click", function () {
        showInfo('eyespart');
    });
    document.getElementById("bodyScaleButton").addEventListener("click", function () {
        showInfo('bodyscalepart');
    });
    document.getElementById("sheddingButton").addEventListener("click", function () {
        showInfo('sheddingpart');
    });
});

function showInfo(partId) {
    // Hide all information boxes
    var boxes = document.querySelectorAll('.information-box');
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].style.display = 'none';
    }

    // Show the selected information box
    var selectedBox = document.getElementById(partId);
    if (selectedBox) {
        selectedBox.style.display = 'block';
    }
}
