const projects_btn = document.querySelector (".menu > ul > li:nth-child(1)")
const contact_btn = document.querySelector (".menu > ul > li:nth-child(2)")

projects_btn.addEventListener ("click", function () {
    current_screen = 2
    change_screen ()
})

contact_btn.addEventListener ("click", function () {
    current_screen = 3
    change_screen ()
})