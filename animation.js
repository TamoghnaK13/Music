

function slideIn(element) {
    document.getElementById(element).style.display = 'block'

    document.getElementById(element).style.animation = 'slideIn 0.5s'

}

function slideOut(element) {
    document.getElementById(element).style.display = 'block'

    document.getElementById(element).style.animation = 'slideOut 0.5s'
    setTimeout(() => {
        document.getElementById(element).style.display = 'none'


    }, 500);
}
function movePage(from, to) {
    document.body.style.overflow = 'hidden'

    slideOut(from)
    slideIn(to)

    setTimeout(() => {

        document.body.style.overflow = 'auto'

    }, 500);
}

function albumMove(from, to, json, bg) {
  if(bg) {

  }
    document.body.style.overflow = 'hidden'
    if(document.getElementById('albumSongs')) {
        document.getElementById('albumSongs').remove()
    }
    if(document.getElementById('ALBUMSANDSTUFF')) {
    document.getElementById('ALBUMSANDSTUFF').remove()
    }
    let div = document.createElement('div')
    div.classList.add('SONGSCROLLER')
    div.setAttribute('id', 'albumSongs')
    div.classList.add('albumMenu')
    div.style.height = window.innerHeight - 90 + 'px'

    document.getElementById('albumPG').appendChild(div)
    slideOut(from)
    slideIn(to)
    

    itemsAdd(json, 'albumSongs')

    setTimeout(() => {
        
        document.body.style.overflow = 'auto'

    }, 550);
}