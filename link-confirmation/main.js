context.addEventListener('click', (e) => {
    if (e.target.tagName != 'A') return
    let data = confirm('Вы действительно хотите перейти по ссылке?')
    if (!data) e.preventDefault()
})


// События страницы
// window.onbeforeunload = () => {
//     return false
// }

