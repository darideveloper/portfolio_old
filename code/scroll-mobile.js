let touchstartY = 0
let touchendY = 0
let start_height = window.outerHeight

let availHeight = window.screen.availHeight
console.log (availHeight)

const body = document.querySelector ("body")
const main = document.querySelector (".main-section")
main.style.height = availHeight



function vHandleGesture() {
  // Detect when user hide search bar
  let current_height = window.outerHeight
  if (start_height == start_height) {
    if (!sliding) {
      if (touchendY < touchstartY) {
        incress_screen_counter ()
        change_screen ()
      }
      if (touchendY > touchstartY) {
        decress_screen_counter ()
        change_screen ()
      }
    }
  }

}

body.addEventListener('touchstart', e => {
  touchstartY = e.changedTouches[0].screenY
})

body.addEventListener('touchend', e => {
  touchendY = e.changedTouches[0].screenY
  vHandleGesture ()
})
