// Gellay buttons
var image_right
var image_left
var image_active
var images_wrapper

function sleep(sec) {
    return new Promise(resolve => setTimeout(resolve, sec * 1000));
}


async function slide_next () {
    // Hide left image
    image_left.classList.add ("slide")
    await sleep(0.5)
    image_left.classList.add ("no-width")
    await sleep(0.5)

    // Remove left image
    images_wrapper.removeChild (image_left)

    // Move active image to left
    image_active.classList.remove ("active")
    image_active.classList.add ("blur")
    image_active.classList.add ("left")

    // Convert right image to active image
    image_right.classList.add ("active")
    image_right.classList.remove ("blur")
    image_right.classList.remove ("right")
    await sleep(0.5)

    // Add new image to right
    images_wrapper.innerHTML += `<div class="wrapper-img flex-center blur right slide no-width">
                                    <img src="imgs/project-sample.png" alt="project banner">
                                </div>`
    image_right = document.querySelector ("div.projects > div.wrapper-images > .images > .wrapper-img.right")
    await sleep(0.1)
    image_right.classList.remove ("no-width")
    await sleep(0.5)
    image_right.classList.remove ("slide")

    update_listeners ()

}

async function slide_back () {
    // Hide right image
    image_right.classList.add ("slide")
    await sleep(0.5)
    image_right.classList.add ("no-width")
    await sleep(0.5)

    // Remove right image
    images_wrapper.removeChild (image_right)

    // Move active image to right
    image_active.classList.remove ("active")
    image_active.classList.add ("blur")
    image_active.classList.add ("right")

    // Convert left image to active image
    image_left.classList.add ("active")
    image_left.classList.remove ("blur")
    image_left.classList.remove ("left")
    await sleep(0.5)

    // Add new image to left
    last_inner = images_wrapper.innerHTML
    images_wrapper.innerHTML = `<div class="wrapper-img flex-center blur left slide no-width">
                                    <img src="imgs/project-sample.png" alt="project banner">
                                </div>`
    images_wrapper.innerHTML += last_inner

    image_left = document.querySelector ("div.projects > div.wrapper-images > .images > .wrapper-img.left")
    await sleep(0.1)
    image_left.classList.remove ("no-width")
    await sleep(0.5)
    image_left.classList.remove ("slide")

    update_listeners ()

}

function update_listeners () {
    
    image_right = document.querySelector ("div.projects > div.wrapper-images > .images > .wrapper-img.right")
    image_left = document.querySelector ("div.projects > div.wrapper-images > .images > .wrapper-img.left")
    image_active = document.querySelector ("div.projects > div.wrapper-images > .images > .wrapper-img.active")
    images_wrapper = document.querySelector ("div.projects > div.wrapper-images > .images")
    
    image_right.addEventListener ("click", slide_next)
    image_left.addEventListener ("click", slide_back)
}

update_listeners ()