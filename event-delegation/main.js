document.body.insertAdjacentHTML('afterbegin', `
<h1>Делегирование событий</h1>
<p>Это процесс присвоения общего обработчика событий.</p>
`)


document.addEventListener('click', (e) => {
    let counter = e.target.dataset.counter
    if (counter != undefined) {
        e.target.value++
    }
})

window.onload = () => {
    if (true) {
        document.body.classList.add('load')
    }
}
