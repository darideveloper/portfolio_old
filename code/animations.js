const anim_logo = document.querySelector ("header .logo")
const anim_socials = document.querySelector ("main .socials")
const anim_menu = document.querySelector ("header .menu")
const anim_scroll = document.querySelector ("main .scroll")

function sleep(s) {
    return new Promise(resolve => setTimeout(resolve, s*1000));
}

function get_display (elem) {
    display = elem.computedStyleMap().get("display")["value"]
    return display
}

async function anim_fixed_elems () {
    await sleep(0.5)

    if (get_display (anim_logo) != "none") {
        await sleep(.25/2)
        anim_logo.classList.remove ("fade-in")
    }

    if (get_display (anim_menu) != "none") {
        await sleep(.25/2)
        anim_menu.classList.remove ("fade-in")
    }

    if (get_display (anim_socials) != "none") {
        await sleep(.25/2)
        anim_socials.classList.remove ("fade-in")
    }


    if (get_display (anim_scroll) != "none") {
        await sleep(.25/2)
        anim_scroll.classList.remove ("fade-in")
    }
    
}

async function anim_fade_out () {
    if (current_screen == 1) {
        console.log ("out main")
    } else if (current_screen == 2) {
        console.log ("out projects") 
    } else if (current_screen == 3) {
        console.log ("out contact")
    }

    await sleep (0.5)
}

async function anim_fade_in () {
    console.log ("page in")
    await sleep (0.5)
    console.log ("done")
}


anim_fixed_elems ()