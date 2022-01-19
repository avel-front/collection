const foo = async () => {
   const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
   const reader = response.body.getReader()

    const contentLength = response.headers.get('Content-Length')

   while (true) {
       const {done, value} = await reader.read()
       if (done) break;
       console.log(`Загружено ${value.length} из ${contentLength} байт`)
   }
}

foo()

// Заголовок ответа Content-Length ввел нарочно.
// Я не могу получить из него информацию, потому что для этого
// необходимо со стороны сервера ввести заголовок Access-Control-Expose-Headers
// value.length - это байты. Для конкретных значений нужно декодирование.