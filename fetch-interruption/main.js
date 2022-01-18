async function foo() {
    const controller = new AbortController()
    setTimeout(() => controller.abort(), 10)

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments', {
            signal: controller.signal
        })
    } catch (err) {
        if (err.name === 'AbortError') {
            alert('Запрос прерван')
        } else {
            throw err
        }
    }
}

foo()