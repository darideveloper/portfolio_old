function sleep(s) {
    return new Promise(resolve => setTimeout(resolve, s*1000));
}

async function anim_fixed_elems () {
    asyncconsole.log ("fixed done")
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