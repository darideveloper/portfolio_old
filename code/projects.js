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
    
    image_right.addEventListener ("click", function (e) {
        slide (next=true, last_image=image_left, new_image=image_right)
    })
    image_left.addEventListener ("click", function (e) {
        slide (next=false, last_image=image_right, new_image=image_left)
    })
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

async function slide (next, last_image, new_image) {
    if (next) {
        // Slide to next project

        // Update current image and details
        current_image += 1
        if (current_image == max_images) {
            current_image = 0
        }

        // Get next iumage from data 
        added_image_index = current_image + 1
        if (added_image_index == max_images) {
            added_image_index = 0
        }

        // Direction variables
        direction = "left"
        added_image_position = "right"
        
    } else {
        // Slide to back project

        // Update current image and details
        current_image -= 1
        if (current_image < 0) {
            current_image = max_images - 1
        }

        // Get next iumage from data 
        added_image_index = current_image - 1
        if (added_image_index < 0) {
            added_image_index = max_images - 1
        }

        // Direction variables
        direction = "right"
        added_image_position = "left"
    }

    update_details ()
    added_image = projects_data[added_image_index]["image"]

    // Hide last image
    last_image.classList.add ("slide")
    await sleep(0.5)
    last_image.classList.add ("no-width")
    await sleep(0.5)

    // Remove last image
    images_wrapper.removeChild (last_image)

    // Move active image to right
    image_active.classList.remove ("active")
    image_active.classList.add ("blur")
    image_active.classList.add (direction)

    // Convert left image to active image
    new_image.classList.add ("active")
    new_image.classList.remove ("blur")
    new_image.classList.remove ("left")
    new_image.classList.remove ("right")
    await sleep(0.5)

    // Create added image to right of left
    added_image_node = '<div class="wrapper-img flex-center blur slide no-width ' + added_image_position + '">'
    added_image_node += ' <img src="' + added_image + '" alt="project banner">'
    added_image_node += '</div>'
    
    // Insert added image
    if (next) {
        // Add image to the end
        images_wrapper.innerHTML += added_image_node
    } else {
        // Add image to the beginning
        last_inner = images_wrapper.innerHTML
        images_wrapper.innerHTML = added_image_node
        images_wrapper.innerHTML += last_inner
    }

    // Remove extra classed in ther added image
    selector =  "div.projects > div.wrapper-images > .images > .wrapper-img." + added_image_position
    console.log (selector)
    added_image_elem = document.querySelector (selector)
    console.log (added_image_elem)
    await sleep(0.1)
    added_image_elem.classList.remove ("no-width")
    await sleep(0.5)
    added_image_elem.classList.remove ("slide")

    update_listeners ()
}