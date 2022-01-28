const scrollableElement = document.body;
const scroll_button_up = document.querySelector ("main .scroll .up")
const scroll_button_down = document.querySelector ("main .scroll .down")
const header_logo = document.querySelector ("header .logo")
const header_projects = document.querySelector ("header .menu ul a:nth-child(1)")
const header_contact = document.querySelector ("header .menu ul a:nth-child(2)")
const section_main = document.querySelector ("main.main-section > .iam")
const section_projects = document.querySelector (".main-section.projects")
const section_contact = document.querySelector (".main-section.contact")
let current_screen = 1
let max_screens = 3

scrollableElement.addEventListener('wheel', function (event) {
    if (scroll_up(event)) {
        // Scroll up
        decress_screen_counter ()
    } else {
        // Scroll down
        incress_screen_counter ()
    }

    change_screen ()
})

scroll_button_up.addEventListener ("click", function (e) {
    // Click in scroll up button: update counters and screen
    if ( !scroll_button_up.classList.contains ("transparent")) {
        decress_screen_counter ()
    }
    change_screen ()
})

scroll_button_down.addEventListener ("click", function (e) {
    // Click in scroll down button: update counters and screen
    if ( !scroll_button_down.classList.contains ("transparent")) {
        incress_screen_counter ()
        change_screen ()
    }
})

header_logo.addEventListener ("click", function (e) {
    go_contact ()
})

header_projects.addEventListener ("click", function (e) {
    go_projects ()    
})

header_contact.addEventListener ("click", function (e) {
    go_contact ()
})

function go_contact () {
    // Update screen when go to contact form
    current_screen = 3
    update_scroll_buttons ()
}

function go_projects () {
    current_screen = 2
    update_scroll_buttons ()
}


function decress_screen_counter () {
    // Update screen counter
    current_screen -= 1
    if (current_screen < 1) {
        current_screen = 1
    }
}

function incress_screen_counter () {
    // Update screen counter
    current_screen += 1 
    if (current_screen > max_screens) {
        current_screen = max_screens
    }
}

function change_screen () {
    // Transparency buttons
    update_scroll_buttons ()

    // Hide all screens
    section_main.classList.add ("hide")
    section_projects.classList.add ("hide")
    section_contact.classList.add ("hide")

    // Show active screen
    if (current_screen == 1) {
        section_main.classList.remove ("hide")
    } else if (current_screen == 2) {
        section_projects.classList.remove ("hide")
    } else if (current_screen == 3) {
        section_contact.classList.remove ("hide")
    }
}
  
function scroll_up(event) {
    if (event.wheelDelta) {
        return event.wheelDelta > 0;
    }
    return event.deltaY < 0;
}


function update_scroll_buttons () {
    // Update transparency of the scroll buttons

    if (current_screen == 1) {
        scroll_button_up.classList.add ("transparent")
        scroll_button_down.classList.remove ("transparent")
    } else if (current_screen == 2) {
        scroll_button_up.classList.remove ("transparent")
        scroll_button_down.classList.remove ("transparent")
    } else if (current_screen == 3) {
        scroll_button_up.classList.remove ("transparent")
        scroll_button_down.classList.add ("transparent")
    }
}