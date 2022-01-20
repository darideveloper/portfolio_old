// Details elements
var details_title = document.querySelector ("div.projects > div.wrapper-info > .info h2")
var details_description = document.querySelector ("div.projects > div.wrapper-info > .info p")

// Images elements
var image_right
var image_left
var image_active
var images_wrapper

const projects_data = JSON.parse (data)
var current_image = 1
var max_images = projects_data.length

function update_listeners () {
    
    image_right = document.querySelector ("div.projects > div.wrapper-images > .images > .wrapper-img.right")
    image_left = document.querySelector ("div.projects > div.wrapper-images > .images > .wrapper-img.left")
    image_active = document.querySelector ("div.projects > div.wrapper-images > .images > .wrapper-img.active")
    images_wrapper = document.querySelector ("div.projects > div.wrapper-images > .images")
    
    image_right.addEventListener ("click", slide_next)
    image_left.addEventListener ("click", slide_back)
}

function update_details () {
    // Update title and description
    details_title.innerHTML = projects_data[current_image]["title"]
    details_description.innerHTML = projects_data[current_image]["description"]
}

update_listeners ()
update_details ()

// Set default images
image_active.firstElementChild.setAttribute ("src", projects_data[current_image]["image"])
image_right.firstElementChild.setAttribute ("src", projects_data[current_image + 1]["image"])
image_left.firstElementChild.setAttribute ("src", projects_data[current_image - 1]["image"])

function sleep(sec) {
    // Wait time
    return new Promise(resolve => setTimeout(resolve, sec * 1000));
}

async function slide_next () {
    // Update current image and details
    current_image += 1
    if (current_image == max_images) {
        current_image = 0
    }
    update_details ()

    // Get next iumage from data 
    next_image_index = current_image + 1
    if (next_image_index == max_images) {
        next_image_index = 0
    }
    next_image = projects_data[next_image_index]["image"]

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
    new_image = ""
    new_image += '<div class="wrapper-img flex-center blur right slide no-width">'
    new_image += ' <img src="' + next_image + '" alt="project banner">'
    new_image += '</div>'
    images_wrapper.innerHTML += new_image

    image_right = document.querySelector ("div.projects > div.wrapper-images > .images > .wrapper-img.right")
    await sleep(0.1)
    image_right.classList.remove ("no-width")
    await sleep(0.5)
    image_right.classList.remove ("slide")

    update_listeners ()

}

async function slide_back () {
    current_image -= 1
    if (current_image < 0) {
        current_image = max_images - 1
    }
    update_details ()

    // Get next iumage from data 
    last_image_index = current_image - 1
    if (last_image_index < 0) {
        last_image_index = max_images - 1
    }
    last_image = projects_data[last_image_index]["image"]

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
    new_image = ""
    new_image += '<div class="wrapper-img flex-center blur left slide no-width">'
    new_image += ' <img src="' + last_image + '" alt="project banner">'
    new_image += '</div>'
    images_wrapper.innerHTML = new_image
    images_wrapper.innerHTML += last_inner

    image_left = document.querySelector ("div.projects > div.wrapper-images > .images > .wrapper-img.left")
    await sleep(0.1)
    image_left.classList.remove ("no-width")
    await sleep(0.5)
    image_left.classList.remove ("slide")

    update_listeners ()

}
