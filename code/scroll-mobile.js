let touchstartY = 0
let touchendY = 0
let start_height = window.outerHeight

let availHeight = window.screen.availHeight
console.log (availHeight)

const body = document.querySelector ("body")

function vHandleGesture() {
  // Detect when user hide search bar
  if (start_height == start_height) {
    if (!sliding) {
      if (touchendY < touchstartY) {
        incress_screen_counter ()
      }
      if (touchendY > touchstartY) {
        decress_screen_counter ()
      }
      console.log ("change")
      change_screen ()
    }
  }

}

body.addEventListener('touchstart', e => {
  touchstartY = e.changedTouches[0].screenY
})

body.addEventListener('touchend', e => {
  console.log ("here")
  touchendY = e.changedTouches[0].screenY
  vHandleGesture ()
})
