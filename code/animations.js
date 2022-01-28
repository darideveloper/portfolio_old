// Fixed elements
const anim_logo = document.querySelector ("header .logo")
const anim_socials = document.querySelector ("main .socials")
const anim_menu = document.querySelector ("header .menu")
const anim_scroll = document.querySelector ("main .scroll")

// Main elements
const anim_main_up = document.querySelector ("main .iam .wrapper-up")
const anim_main_title = document.querySelector ("main .iam .wrapper-title")
const anim_main_down = document.querySelector ("main .iam .wrapper-down")

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
        anim_logo.classList.remove ("fade")
    }

    if (get_display (anim_menu) != "none") {
        await sleep(.25/2)
        anim_menu.classList.remove ("fade")
    }

    if (get_display (anim_socials) != "none") {
        await sleep(.25/2)
        anim_socials.classList.remove ("fade")
    }


    if (get_display (anim_scroll) != "none") {
        await sleep(.25/2)
        anim_scroll.classList.remove ("fade")
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

    await sleep (0.5)
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
}

async function fade_in_main () {
    await sleep(.5)
    anim_main_title.classList.remove ("fade")

    await sleep(.5)
    anim_main_up.classList.remove ("fade")
    anim_main_down.classList.remove ("fade")
}

async function fade_out_main () {
    await sleep(.5)
    anim_main_up.classList.add ("fade")
    anim_main_down.classList.add ("fade")
    
    await sleep(.5)
    anim_main_title.classList.add ("fade")

}


anim_fixed_elems ()