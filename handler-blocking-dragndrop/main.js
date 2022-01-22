document.addEventListener('DOMContentLoaded', () => {
    if (true) document.body.classList.add('focus')
})

// Добавить text node через JS

let text = document.createElement('div')
text.textContent = 'При захвате ползунка текст не выделяется, а квадрат не реагирует (блокировка обработчика).'
text.style.cssText = 'margin-bottom: 15px'
document.body.prepend(text)


let slider = document.querySelector('.slider')
let thumb = slider.querySelector('.thumb')

thumb.onpointerdown = (e) => {

    e.preventDefault()
    thumb.setPointerCapture(e.pointerId)
    let shiftX = e.clientX - thumb.getBoundingClientRect().left

    document.addEventListener('pointermove', onPointerMove)
    document.addEventListener('pointerup', onPointerUp)

    function onPointerMove(e) {
        let newLeft = e.clientX - shiftX - slider.getBoundingClientRect().left;
        if (newLeft < 0) newLeft = 0

        let rightEdge = slider.offsetWidth - thumb.offsetWidth
        if (newLeft > rightEdge) newLeft = rightEdge

        thumb.style.left = newLeft + 'px'
    }

    function onPointerUp() {
        document.removeEventListener('pointermove', onPointerMove)
        document.removeEventListener('pointerup', onPointerUp)
    }
}

thumb.ondragstart = () => {return false}

let box = document.querySelector('.box')
box.onpointerover = () => {box.style.background = '#46458a'}
box.onpointerout = () => {box.style.background = ''}