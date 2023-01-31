
let fontSize = 16;
const current = document.querySelector('#current')


function changeFont() {
    if (fontSize === 32) {
        fontSize = 12
    }
    
    fontSize = (fontSize + 4)
    document.body.style.fontSize = fontSize + 'px';

    currentFontSize()

}

function currentFontSize() {
    current.innerHTML = `Fonttikoko on nyt: ${fontSize}px`
}