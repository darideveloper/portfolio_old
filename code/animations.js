// Fixed elements
const elem_logo = document.querySelector("header .logo")
const elem_socials = document.querySelector("main .socials")
const elem_menu = document.querySelector("header .menu")
const elem_scroll = document.querySelector("main .scroll")

// Main elements
const elem_main_up = document.querySelector("main .iam .up")
const elem_main_title = document.querySelector("main .iam .title")
const elem_main_down = document.querySelector("main .iam .down")

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


function sleep(s) {
    return new Promise(resolve => setTimeout(resolve, s*1000));
}

function get_display (elem) {
    display = elem.computedStyleMap().get("display")["value"]
    return display
}

async function anim_fixed_elems () {
    await sleep(0.5)

    if (get_display (elem_logo) != "none") {
        await sleep(.25/2)
        anime({
            targets: [elem_logo],
            opacity: [0, 1],
            translateX: [-50, 0]
        });
    }

    if (get_display (elem_menu) != "none") {
        await sleep(.25/2)
        anime({
            targets: elem_menu,
            opacity: 1,
            translateX: 0
        });
    }

    if (get_display (elem_socials) != "none") {
        await sleep(.25/2)
        anime({
            targets: elem_socials,
            opacity: 1,
            translateX: 0
        });
    }

    if (get_display (elem_scroll) != "none") {
        await sleep(.25/2)
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
        console.log ("out projects") 
    } else if (last_screen == 3) {
        console.log ("out contact")
    }

    await sleep (.25)
}

async function anim_fade_in () {
    if (current_screen == 1) {
        console.log ("in main")
        await fade_in_main ()
    } else if (current_screen == 2) {
        console.log ("out projects") 
    } else if (current_screen == 3) {
        console.log ("out contact")
    }

    restart_displays ()
}

async function fade_in_main () {
    await sleep(.5)
    anime({
        targets: elem_main_title,
        opacity: 1,
        translateY: 0
    });

    await sleep(.5)
    anime({
        targets: [elem_main_up, elem_main_down],
        opacity: 1,
        translateX: 0,
    });
}

async function fade_out_main () {
    await sleep(.5)
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
    
    await sleep(.5)
    anime({
        targets: elem_main_title,
        opacity: 0,
        translateY: 50,
    });
}

anim_fixed_elems ()