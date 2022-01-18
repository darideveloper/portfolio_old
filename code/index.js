var scrollableElement = document.body;
let windows_height = window.screen.height;
let current_screen = 1
let max_screens = 3
scrollableElement.addEventListener('wheel', checkScrollDirection);

console.log (windows_height)

function checkScrollDirection(event) {
    if (checkScrollDirectionIsUp(event)) {
        // Scroll up
        
        // Update screen counter
        current_screen -= 1
        if (current_screen < 1) {
            current_screen = 1
        }
    } else {
        // Scroll down
        
        // Update screen counter
        current_screen += 1
        if (current_screen > max_screens) {
            current_screen = max_screens
        }
    }

    console.log (current_screen)

    // Made scroll
    window.scroll(0, windows_height * (current_screen - 1))
  }
  
function checkScrollDirectionIsUp(event) {
    if (event.wheelDelta) {
        return event.wheelDelta > 0;
    }
    return event.deltaY < 0;
}

window.addEventListener('scroll', function(e) {
    return None
})