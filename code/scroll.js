const scrollableElement = document.body;
const scroll_button_up = document.querySelector ("main .scroll .up")
const scroll_button_down = document.querySelector ("main .scroll .down")
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
    // Click in scroll up button
    if ( !scroll_button_up.classList.contains ("transparent")) {
        decress_screen_counter ()
    }
    change_screen ()
})

scroll_button_down.addEventListener ("click", function (e) {
    // Click in scroll up button
    if ( !scroll_button_down.classList.contains ("transparent")) {
        incress_screen_counter ()
        change_screen ()
        console.log (!scroll_button_down.classList.contains ("transparent"))
    }
})

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

    // Made scroll
    window.scroll(0, window.innerHeight * (current_screen - 1))
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
    } else if (current_screen == 2) {
        scroll_button_up.classList.remove ("transparent")
        scroll_button_down.classList.remove ("transparent")
    } else if (current_screen == 3) {
        scroll_button_down.classList.add ("transparent")
    }
}