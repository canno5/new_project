console.log("Script running");
const navbar = document.getElementsByClassName("navbar");
window.addEventListener("scroll", () => {
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
    if (scrollTop > 10) {
        navbar[0].classList.replace("background", "backgrounds")
    } else if (scrollTop == 0) {
        navbar[0].classList.replace("backgrounds", "background")
    }
});
