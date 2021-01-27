// для index.html
const modal = document.querySelector('.mob-menu-overlay')

const btn = document.querySelector('.js--nav-icon')

const span = document.querySelector('.mob-menu-close-icon')

btn.onclick = function() {
  modal.style.display = "block"
}

span.onclick = function() {
  modal.style.display = "none"
}

window.onclick = function(event) {
  if(event.target == modal) {
    modal.style.display = "none"
  }
}
