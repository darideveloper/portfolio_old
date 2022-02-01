let wait_texts = [
    "Go slow!",
    "Wait a bit!",
    "My page is cute, enjoy it!",
    "Not so fast!",
    "Better slow than fast!",
    "Wait for the animations to finish to scroll",
    "Wait for the animations to finish to scroll",
    "Wait for the animations to finish to scroll",
    "Wait for the animations to finish to scroll",
    "Wait for the animations to finish to scroll",
    "Wait",
    "Wait",
    "Wait",
    "Wait",
    "Wait"
]

function wait_message () {
    rand_int = parseInt (Math.random()*15)
    alert (wait_texts[rand_int])
}

