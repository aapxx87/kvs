// для about.html

const modal = document.querySelector('#mob-menu-overlay--about')

const btn = document.querySelector('#btn_mob-menu-about')

const span = document.querySelector('#mob-menu-close-about')

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
