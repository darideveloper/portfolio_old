const projects_btn = document.querySelector (".menu > ul > li:nth-child(1)")
const contact_btn = document.querySelector (".menu > ul > li:nth-child(2)")

projects_btn.addEventListener ("click", async function () {
    if (current_screen != 2) {
        last_screen = current_screen
        current_screen = 2
        await anim_fade_out ()
        change_screen ()
        update_scroll_buttons ()
    }
})

contact_btn.addEventListener ("click", async function () {
    if (current_screen != 3) {
        last_screen = current_screen
        current_screen = 3
        await anim_fade_out ()
        change_screen ()
        update_scroll_buttons ()
    }
})