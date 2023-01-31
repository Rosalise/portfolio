let click = 0
let text1 = "I choose tea"
let text2 = "I choose coffee"
let button = document.getElementById("btn")
let question = document.getElementById("question")

function changePhoto() {
    let image = document.querySelector("img")
    if (click % 2 == 0) {
        image.setAttribute("src", `images/tea.jpeg`);
        button.innerText = text2;
        button.style.backgroundColor = "#ef9b69";
        button.style.borderRightColor = "#ef9b69";
        button.style.borderLeftColor = "#ef9b69";
        question.style.color = "#ef9b69";

      } else {
        image.setAttribute("src", `images/coffee.jpeg`);
        button.innerText = text1;
        button.style.backgroundColor = "#915C4C";
        button.style.borderRightColor = "#915C4C";
        button.style.borderLeftColor = "#915C4C";
        question.style.color = "#6f483f";
      }
      click++;
}