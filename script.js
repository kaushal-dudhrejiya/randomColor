const newColorBtn = document.querySelector(".newColorBtn");
const previousColorBtn = document.querySelector(".previousColorBtn");
const colorCodeSpan = document.querySelector(".colorCodeSpan");

let i = 0;

newColorBtn.addEventListener("click", function () {
  const randomColor = randomColorFn();
  i++;
  document.body.style.backgroundColor = randomColor;
  colorCodeSpan.textContent = randomColor;
  sessionStorage.setItem("color" + i, randomColor);
});

const randomColorFn = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
};

previousColorBtn.addEventListener("click", function () {
  const previousColor = sessionStorage.getItem(`color${i - 1}`);
  document.body.style.backgroundColor = previousColor;
  colorCodeSpan.textContent = previousColor;
});
