// ======================================================
// Wedding Invitation Website
// File : script.js
// Easy to edit
// ======================================================


// ===============================================
// WEDDING DATE
// Change this date according to your wedding.
// Format:
// Month Day, Year HH:MM:SS
// ===============================================

const weddingDate = new Date("December 20, 2026 20:00:00").getTime();


// ===============================================
// COUNTDOWN TIMER
// ===============================================

const timer = setInterval(function () {

    const now = new Date().getTime();

    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60))
        / 1000
    );


    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;


    // Wedding Day

    if (distance < 0) {

        clearInterval(timer);

        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";

    }

}, 1000);



// ===============================================
// RSVP FORM
// ===============================================

const form = document.getElementById("rsvpForm");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    document.getElementById("successMessage").innerHTML =
        "❤️ Thank you! Your RSVP has been received.";

    form.reset();

});



// ===============================================
// IMAGE CLICK EFFECT
// ===============================================

const images = document.querySelectorAll(".gallery-grid img");

images.forEach(function (image) {

    image.addEventListener("click", function () {

        image.style.transform = "scale(1.15)";

        setTimeout(function () {

            image.style.transform = "scale(1)";

        }, 250);

    });

});



// ===============================================
// SCROLL ANIMATION
// ===============================================

const revealElements = document.querySelectorAll(
    ".person,.event-card,.gallery-grid img"
);

window.addEventListener("scroll", function () {

    const trigger = window.innerHeight * 0.85;

    revealElements.forEach(function (element) {

        const top = element.getBoundingClientRect().top;

        if (top < trigger) {

            element.style.opacity = "1";

            element.style.transform = "translateY(0px)";

        }

    });

});



// ===============================================
// INITIAL STYLE FOR ANIMATION
// ===============================================

revealElements.forEach(function (element) {

    element.style.opacity = "0";

    element.style.transform = "translateY(50px)";

    element.style.transition =
        "all 0.8s ease";

});



// ===============================================
// CONSOLE MESSAGE
// ===============================================

console.log("Wedding Invitation Website Loaded Successfully ❤️");