const btn = document.querySelector(".btn");
const text = document.querySelector(".text");
const tab = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

let colorFlipper = () => {
  let hexCode = "#";
  for (let i = 0; i < 6; i++) {
    let randomNumber = Math.floor(Math.random() * 16);
    hexCode += tab[randomNumber];
    text.textContent = hexCode;
  }
  document.querySelector(".text").style.color = hexCode;
  document.querySelector(".main-box").style.backgroundColor = hexCode;
};
btn.addEventListener("click", colorFlipper);
