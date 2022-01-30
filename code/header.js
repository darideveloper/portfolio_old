const projects_btn = document.querySelector (".menu > ul > li:nth-child(1)")
const contact_btn = document.querySelector (".menu > ul > li:nth-child(2)")

projects_btn.addEventListener ("click", async function () {
    if (! animation_running) {
        if (current_screen != 2) {
            animation_running = true
            last_screen = current_screen
            current_screen = 2
            await anim_fade_out ()
            change_screen ()
            update_scroll_buttons ()
        }
    }
})

contact_btn.addEventListener ("click", async function () {
    console.log ("contact!")
    if (! animation_running) {
        if (current_screen != 3) {
            console.log ("valid")
            animation_running = true
            last_screen = current_screen
            current_screen = 3
            await anim_fade_out ()
            change_screen ()
            update_scroll_buttons ()
        }
    }
})

elem_fixed_logo.addEventListener ("click", async function () {
    if (! animation_running) {
        if (current_screen != 1) {
            animation_running = true
            last_screen = current_screen
            current_screen = 1
            await anim_fade_out ()
            change_screen ()
            update_scroll_buttons ()
        }
    }
})