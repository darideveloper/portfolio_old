// Gellay buttons
var projects_next = document.querySelector ("div.projects > div.wrapper-images > .images > div:nth-child(4)")
var projects_back = document.querySelector ("div.projects > div.wrapper-images > .images > div:nth-child(2)")

function slide_next () {
    console.log ("next")
}

function slide_back () {
    console.log ("back")
}

projects_next.addEventListener ("click", slide_next)
projects_back.addEventListener ("click", slide_back)