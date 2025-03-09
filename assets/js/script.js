function hamburg() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(0px)";
}

function cancel() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(-500px)";
}

// Typewriter Effect
const texts = [
    "DEVELOPER",
    "DATA SCIENTIST",
    "YOUTUBER"
];

let normalSpeed = 100;
let youtubeSpeed = 500;
let textElements = document.querySelector(".typewriter-text");
let youtubeLink = document.querySelector(".youtube-link"); // Select YouTube button link
let textIndex = 0;
let charcterIndex = 0;

function typeWriter() {
    let currentSpeed = texts[textIndex] === "YOUTUBER" ? youtubeSpeed : normalSpeed; // Set speed

    if (charcterIndex < texts[textIndex].length) {
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, currentSpeed);
    } else {
        if (texts[textIndex] === "YOUTUBER") {
            youtubeLink.style.display = "inline"; // Show YouTube button
            setTimeout(() => {
                setTimeout(eraseText, 2000); // Pause YouTube button for 2 seconds
            }, 2000);
        } else {
            setTimeout(eraseText, 1000);
        }
    }
}

function eraseText() {
    if (textElements.innerHTML.length > 0) {
        textElements.innerHTML = textElements.innerHTML.slice(0, -1);
        setTimeout(eraseText, 50);
    } else {
        youtubeLink.style.display = "none"; // Hide YouTube button when erasing
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter, 500);
    }
}

window.onload = typeWriter;
