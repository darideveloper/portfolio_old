// Reload page when width change
const initial_width = window.innerWidth
function refresh() {
    let current_width = window.innerWidth
    if (initial_width != current_width) {
        window.location.reload()
    }

}
  
window.onresize = refresh;