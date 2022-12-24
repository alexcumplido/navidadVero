import confetti from "https://cdn.skypack.dev/canvas-confetti";
const confettiButton = document.getElementById("getBetter");
const message = document.getElementById("message");
let intervalId;

const clearAsync = () =>  clearInterval(intervalId);

function confettiSequence() {
    intervalId = setInterval(function() {
        confetti();
    }, 60);

    setTimeout(function() {
        clearAsync();
    }, 500);
}

confettiButton.addEventListener("click", function(event) {
    confettiSequence(); 
    confettiButton.remove();
    message.classList.remove('hidden');
}); 
