let touchstartX = 0
let touchendX = 0

const slider = document.querySelector (".projects > .wrapper-images > .images")

slider.addEventListener('touchstart', e => {
  touchstartX = e.changedTouches[0].screenX
})

slider.addEventListener('touchend', e => {
  touchendX = e.changedTouches[0].screenX
  hHandleGesture()
})

function hHandleGesture() {
  if (!sliding) {
    if (touchendX < touchstartX) {
      slide_projects (next=true, last_image=image_left, new_image=image_right)
    }
    if (touchendX > touchstartX) {
      slide_projects (next=false, last_image=image_right, new_image=image_left)
    }
  }
}

