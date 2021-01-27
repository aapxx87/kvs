// для articles htrwr

const modal = document.querySelector('#mob-menu-overlay--articles-htrwr')

const btn = document.querySelector('#btn_mob-menu-articles-htrwr')

const span = document.querySelector('#mob-menu-close-articles-htrwr')

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
