var selector = document.body.appendChild(
    document.createElement('input')
)
selector.type = 'file'
selector.multiple = true
selector.id = 'selectImages'
selector.style.display = 'none'

var label = document.body.appendChild(
    document.createElement('label')
)
label.htmlFor = 'selectImages'
label.innerText = 'Select images'


var promise = function (imageFile) {
    return new Promise(function (resolve, reject) {
        if (imageFile.type.indexOf("image/") !== -1)
            resolve(URL.createObjectURL(imageFile))
        else {
            alert("Выбранный файл не является изображением")
            reject(new Error("Выбранный файл не является изображением"))
        }
    })
}
selector.onchange = function (event) {
    for (var file of event.target.files) {
        promise(file)
            .then(result => {
                console.log(result)
                var picture = document.createElement("img")
                document.body.appendChild(picture)
                picture.src = result
            })
            .catch(error => console.error(error))
    }
}