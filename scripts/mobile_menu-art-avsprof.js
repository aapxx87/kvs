// для articles amateurs vs prof

const modal = document.querySelector('#mob-menu-overlay--articles-amvsprof')

const btn = document.querySelector('#btn_mob-menu-articles-amvsprof')

const span = document.querySelector('#mob-menu-close-articles-amvsprof')

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
