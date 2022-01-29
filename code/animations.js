// Fixed elements
const elem_logo = document.querySelector("header .logo")
const elem_socials = document.querySelector("main .socials")
const elem_menu = document.querySelector("header .menu")
const elem_scroll = document.querySelector("main .scroll")

// Main elements
const elem_main_up = document.querySelector("main .iam .up")
const elem_main_title = document.querySelector("main .iam .title")
const elem_main_down = document.querySelector("main .iam .down")

// Projects elements
const elem_projects_imgs = document.querySelector(".projects .wrapper-images")
const elem_projects_title = document.querySelector(".projects .info .wrapper-title")
const elem_projects_text = document.querySelector(".projects .info .details")
const elem_projects_cta = document.querySelector(".projects .info .cta")

// Animations time
wait_time = 0.5

// Animations initial values for fixed elements
elem_logo.style.opacity = "0"
elem_socials.style.opacity = "0"
elem_menu.style.opacity = "0"
elem_scroll.style.opacity = "0"

elem_logo.style.transform = "translateX(-50px)"
elem_socials.style.transform = "translateX(-50px)"
elem_menu.style.transform = "translateX(50px)"
elem_scroll.style.transform = "translateX(50px)"

// Animations initial values for iam
elem_main_up.style.opacity = "0"
elem_main_down.style.opacity = "0"
elem_main_title.style.opacity = "0"

elem_main_up.style.transform = "translateX(-50px)"
elem_main_down.style.transform = "translateX(50px)"
elem_main_title.style.transform = "translateY(50px)"

// Animations initial values for projects
elem_projects_imgs.style.opacity = "0"
elem_projects_title.style.opacity = "0"
elem_projects_text.style.opacity = "0"
elem_projects_cta.style.opacity = "0"

elem_projects_imgs.style.transform = "translateX(-50px)"
elem_projects_title.style.transform = "translateX(50px)"
elem_projects_text.style.transform = "translateX(-50px)"
elem_projects_cta.style.transform = "translateX(50px)"


function sleep(s) {
    return new Promise(resolve => setTimeout(resolve, s*1000));
}

function get_display (elem) {
    display = document.defaultView.getComputedStyle(elem)["display"]
    return display
}

async function anim_fixed_elems () {
    await sleep(wait_time)

    if (get_display (elem_logo) != "none") {
        await sleep(wait_time/4)
        anime({
            targets: [elem_logo],
            opacity: [0, 1],
            translateX: [-50, 0]
        });
    }

    if (get_display (elem_menu) != "none") {
        await sleep(wait_time/4)
        anime({
            targets: elem_menu,
            opacity: 1,
            translateX: 0
        });
    }

    if (get_display (elem_socials) != "none") {
        await sleep(wait_time/4)
        anime({
            targets: elem_socials,
            opacity: 1,
            translateX: 0
        });
    }

    if (get_display (elem_scroll) != "none") {
        await sleep(wait_time/4)
        anime({
            targets: elem_scroll,
            opacity: 1,
            translateX: 0
        });
    }
    
    fade_in_main ()
}

async function anim_fade_out () {

    if (last_screen == 1) {
        await fade_out_main ()
    } else if (last_screen == 2) {
        await fade_out_projects ()
    } else if (last_screen == 3) {
        console.log ("out contact")
    }

    await sleep (.25)
}

async function anim_fade_in () {
    if (current_screen == 1) {
        await fade_in_main ()
    } else if (current_screen == 2) {
        await fade_in_projects ()
    } else if (current_screen == 3) {
        console.log ("out contact")
    }
}

async function fade_in_main () {
    await sleep(wait_time)
    anime({
        targets: elem_main_title,
        opacity: 1,
        translateY: 0
    });

    await sleep(wait_time)
    anime({
        targets: [elem_main_up, elem_main_down],
        opacity: 1,
        translateX: 0,
    });
}

async function fade_out_main () {
    await sleep(wait_time)
    anime({
        targets: elem_main_up,
        opacity: 0,
        translateX: -50,
    });

    anime({
        targets: elem_main_down,
        opacity: 0,
        translateX: 50,
    });
    
    await sleep(wait_time)
    anime({
        targets: elem_main_title,
        opacity: 0,
        translateY: 50,
    });
}

let anim_projects_imgs = anime({
    targets: elem_projects_imgs,
    opacity: [0, 1],
    translateX: [-50, 0],
    autoplay: false,
    duration: 1000
});

let anim_projects_title = anime({
    targets: elem_projects_title,
    opacity: [0, 1],
    translateX: [50, 0],
    autoplay: false,
    duration: 1000
});

let anim_projects_text = anime({
    targets: elem_projects_text,
    opacity: [0, 1],
    translateX: [-50, 0],
    autoplay: false,
    duration: 1000
});

let anim_projects_cta = anime({
    targets: elem_projects_cta,
    opacity: [0, 1],
    translateX: [-50, 0],
    autoplay: false,
    duration: 1000
});

async function fade_in_projects () {

    await sleep(wait_time)
    anim_projects_imgs.play()

    await sleep(wait_time)
    anim_projects_title.play()

    if (get_display (elem_projects_text) != "none") { 
        await sleep(wait_time)
        anim_projects_text.play()
    }

    await sleep(wait_time)
    anim_projects_cta.play()

    // Restart tyle attribute
    elem_projects_imgs.setAttribute ("style", "")
    elem_projects_title.setAttribute ("style", "")
    elem_projects_text.setAttribute ("style", "")
    elem_projects_cta.setAttribute ("style", "")

}

async function fade_out_projects () {
    
    // Invert animations
    anim_projects_imgs.reverse()
    anim_projects_title.reverse()
    anim_projects_text.reverse()
    anim_projects_cta.reverse()

    await sleep(wait_time)
    anim_projects_imgs.play()

    await sleep(wait_time)
    anim_projects_title.play()

    if (get_display (elem_projects_text) != "none") { 
        await sleep(wait_time)
        anim_projects_text.play()
    }

    await sleep(wait_time)
    anim_projects_cta.play()

    
    // Rset animations state
    await sleep(wait_time*4)
    anim_projects_imgs.reverse()
    anim_projects_title.reverse()
    anim_projects_text.reverse()
    anim_projects_cta.reverse()
}

anim_fixed_elems ()