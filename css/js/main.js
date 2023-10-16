// main.js
let swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
    },
});


document.body.onmousemove = function (e) {
    document.documentElement.style.setProperty(
        '--x', (
            e.clientX + window.scrollX
        )
    + 'px'
    );
    document.documentElement.style.setProperty(
        '--y', (
            e.clientY + window.scrollY
        )
    + 'px'
    );
}

const customCursor = document.getElementById('custom-cursor');
const hoverContainer = document.querySelector('.hover-container');
//const hoverContainer2 = document.querySelector('.hover-container2');
const hoverContainer3 = document.querySelector('.hover-container3');

const updateCursorPosition = (event) => {
    customCursor.style.top = `${event.clientY}px`;
    customCursor.style.left = `${event.clientX}px`;
}

window.addEventListener('mousemove', (event) => {
    updateCursorPosition(event)

    if (hoverContainer.matches(':hover') || hoverContainer3.matches(':hover')) {
        customCursor.classList.add('zoom')
    } else {
        customCursor.classList.remove('zoom')
    }
})

// When the user scrolls the page, execute myFunction
window.onscroll = function () { myFunction() };

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
