
let display = document.getElementById('input')
let buttons = document.querySelectorAll(".input-button")
let clear = document.getElementById('clear')
let erase = document.getElementById('single-clear')
let equals = document.getElementById('equal')

window.onload = () => {
  display.value = ""
}

buttons.forEach((buttons_class) => {
  buttons_class.addEventListener("click", () => {
    if(display.value == 'ERR') {
      display.value = ""
    }
    display.value += buttons_class.value
  })
})

clear.addEventListener("click", () => {
  display.value = ""
})

erase.addEventListener("click", () => {
  let value = display.value
  display.value = value.substr(0, value.length - 1)
})

equals.addEventListener("click", () => {
  try {
    sol = eval(display.value)
    display.value = sol
  } catch(error) {
    display.value = "ERR"
  }
})
