
let fontFamily = "Georgia";
const familyArray = ['Roboto', 'Mansalva', 'Grenze', "Turret Road", 'Georgia'];
let click = 0;

function changeFamily() {
    fontFamily = document.body.style.fontFamily = familyArray[click % 5];
    click++;
    currentFont()
}

function currentFont() {
    current.innerHTML = `Fontti on nyt: ${fontFamily}`
}