const xhr = new XMLHttpRequest();

xhr.addEventListener('load', () => {
    const data = xhr.response

    console.log(JSON.parse(data))
})


xhr.open('GET', 'https://supersimplebackend.dev/products/first')
xhr.send()