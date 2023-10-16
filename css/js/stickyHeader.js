const header = document.getElementById("myHeader");
const toggleClass = "sticky";

window.addEventListener("scroll", () => {

    const currentScroll = window.pageYOffset;

    if (currentScroll > 10) {

        header.classList.add(toggleClass);

    } else {

        header.classList.remove(toggleClass);

    }

});
