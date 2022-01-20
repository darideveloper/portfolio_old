// Detect vertial screen size
var project_images = document.querySelector (".projects > .wrapper-images > .images")
if (window.screen.height > window.screen.width) {
    project_images.classList.add ("vertical")
}

// window.addEventListener("resize", function(event) {
//     console.log("resize");
// })