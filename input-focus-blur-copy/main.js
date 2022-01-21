// INPUT
let divElem = document.createElement('div');
document.body.append(divElem)

divElem.insertAdjacentHTML('afterbegin',
    '<h1>Cобытия input, copy, focus и blur.</h1>')
divElem.insertAdjacentHTML('beforeend',
    `<p>Copy не дает явно скопировать текст, input показывает изменения немедленно, 
focus и blur отвечают за фокусировку и расфокусировку.</p>
<p>События blur и focus по умолчанию не всплывают. Но можно обойти через обработчик (focusin. focusout).</p>`)


let inputElem = document.createElement('input');
inputElem.style = 'outline:none;margin-top:10px;font-size:22px;height:40px'
inputElem.placeholder = 'Введите текст';
document.body.append(inputElem)

inputElem.oninput = () => {
    spanElem.innerHTML = inputElem.value
}

let spanElem = document.createElement('span')
spanElem.style = 'padding-left:20px;font-size:22px;'
document.body.append(spanElem)

// FOCUS, BLUR, COPY
inputElem.onfocus = () => {
    console.log('Фокус')
}

inputElem.onblur = () => {
    console.log('Фокус утерян')
}

document.body.oncopy = (e) => {
    e.preventDefault()
}

// всплытие
inputElem.addEventListener('focusin', () => {
    inputElem.classList.add('focused')
})

inputElem.addEventListener('focusout', () => {
    inputElem.classList.remove('focused')
})
