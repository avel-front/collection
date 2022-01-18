async function foo() {
    const response = await fetch('https://cdn-icons-png.flaticon.com/512/5968/5968292.png')
    const blob = await response.blob()

    const img = document.createElement('img')
    img.style = "position:fixed;top:60px;left:60px;width:600px;height:600px;"
    document.body.append(img)

    img.src = URL.createObjectURL(blob)
    setTimeout(() => {
        img.remove()
        URL.revokeObjectURL(blob)
    }, 2000)
}

foo()

// Blob - is a high-level binary object. I can use him for creating <img> <a href> e t.c.