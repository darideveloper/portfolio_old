// Animation elements
const elem_loading = document.querySelector (".loading")
const elem_logo = document.querySelector (".logo")
const elem_socials = document.querySelector (".socials")
const elem_title = document.querySelector ("h1")
const elem_text = document.querySelector ("p")
const elem_link = document.querySelector ("a")

// Animations time
const wait_time = 0.5

// Initail values for animations
elem_logo.style.opacity = "0"
elem_socials.style.opacity = "0"
elem_title.style.opacity = "0"
elem_text.style.opacity = "0"
elem_link.style.opacity = "0"

elem_logo.style.transform = "translateX(-50px)"
elem_socials.style.transform = "translateX(-50px)"
elem_title.style.transform = "translateY(50px)"
elem_text.style.transform = "translateY(50px)"
elem_link.style.transform = "translateY(50px)"

const anim_loading = anime({
    targets: elem_loading,
    opacity: [1, 0],
    autoplay: false,
    duration: wait_time * 1000 / 10
});

const anim_logo = anime({
    targets: elem_logo,
    opacity: [0, 1],
    translateX: [-50, 0],
    autoplay: false,
    duration: wait_time * 1000 * 2
});

const anim_socials = anime({
    targets: elem_socials,
    opacity: [0, 1],
    translateX: [-50, 0],
    autoplay: false,
    duration: wait_time * 1000 * 2
});

const anim_title = anime({
    targets: elem_title,
    opacity: [0, 1],
    translateY: [50, 0],
    autoplay: false,
    duration: wait_time * 1000 * 2
});

const anim_text = anime({
    targets: elem_text,
    opacity: [0, 1],
    translateY: [50, 0],
    autoplay: false,
    duration: wait_time * 1000 * 2
});

const anim_link = anime({
    targets: elem_link,
    opacity: [0, 1],
    translateY: [50, 0],
    autoplay: false,
    duration: wait_time * 1000 * 2
});



function sleep(s) {
    // Wait time
    return new Promise(resolve => setTimeout(resolve, s*1000));
}

function get_display (elem) {
    // Get display status of the current element
    display = document.defaultView.getComputedStyle(elem)["display"]
    return display
}

async function anim_on_load () {
    // Animations time-line
    await sleep (wait_time)
    anim_loading.play ()
    anim_logo.play ()
    anim_socials.play ()
    await sleep (wait_time)
    anim_title.play ()
    await sleep (wait_time)
    anim_text.play ()
    await sleep (wait_time)
    anim_link.play ()
}

anim_on_load()

