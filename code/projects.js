// Section
const projects = document.querySelector (".projects") 

// Details elements
const details_title = document.querySelector ("div.projects > div.wrapper-info > .info h2")
const details_description = document.querySelector ("div.projects > div.wrapper-info > .info p")

// Images elements
var image_right
var image_left
var image_active
var images_wrapper

// Json data variables
const projects_data = JSON.parse (data)
var current_image = 1
const max_images = projects_data.length

// screen type
var vertical = false

function update_listeners () {
    
    image_right = document.querySelector ("div.projects > div.wrapper-images > .images > .wrapper-img.right")
    image_left = document.querySelector ("div.projects > div.wrapper-images > .images > .wrapper-img.left")
    image_active = document.querySelector ("div.projects > div.wrapper-images > .images > .wrapper-img.active")
    images_wrapper = document.querySelector ("div.projects > div.wrapper-images > .images")
    
    image_right.addEventListener ("click", function (e) {
        slide_projects (next=true, last_image=image_left, new_image=image_right)
    })
    image_left.addEventListener ("click", function (e) {
        slide_projects (next=false, last_image=image_right, new_image=image_left)
    })
}

function update_details () {
    // Update title and description
    details_title.innerHTML = projects_data[current_image]["title"]
    details_description.innerHTML = projects_data[current_image]["description"]
}

update_listeners ()
update_details ()

// Detect screen type
if (window.screen.height > window.screen.width) {
    images_wrapper.classList.add ("vertical")
    projects.classList.add ("vertical")
    vertical = true
} else {
    images_wrapper.classList.add ("horizontal")
    projects.classList.add ("horizontal")
}

// Set default images
image_active.firstElementChild.setAttribute ("src", projects_data[current_image]["image"])
image_right.firstElementChild.setAttribute ("src", projects_data[current_image + 1]["image"])
image_left.firstElementChild.setAttribute ("src", projects_data[current_image - 1]["image"])

function sleep(sec) {
    // Wait time
    return new Promise(resolve => setTimeout(resolve, sec * 1000));
}

async function slide_projects (next, last_image, new_image) {

    // Update status
    sliding = true

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

    added_image = projects_data[added_image_index]["image"]
    
    // Hide last image and title
    last_image.classList.add ("slide")
    details_title.classList.add ("on-change")
    if (!vertical) {
        await sleep(0.5)
    }
    
    // Hide image and description
    last_image.classList.add ("no-width")
    details_description.classList.add ("on-change")
    await sleep(0.5)

    update_details ()

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
    if (!vertical) {
        await sleep(0.5)
    }
    
    // Show title
    details_title.classList.remove ("on-change")

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
    let added_image_elem = document.querySelector (selector)
    if (vertical) {
        await sleep(0.02)
    } else {
        await sleep(0.1)        
    }

    added_image_elem.classList.remove ("no-width")
    if (!vertical) {
        await sleep(0.5)
    }

    added_image_elem.classList.remove ("slide")

    // Show description
    details_description.classList.remove ("on-change")

    update_listeners ()

    // Update status
    sliding = false
}