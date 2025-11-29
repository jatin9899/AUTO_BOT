
const p = document.querySelector("p");
const originalText = p.innerText;

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let iteration = 0;
let interval = null;

function randomText() {
  const str = originalText.split("").map((char, index) => {
    if (index < iteration) return char;
    return characters[Math.floor(Math.random() * characters.length)];
  }).join("");

  p.innerText = str;
  iteration += 0.2;

  if (iteration >= originalText.length) clearInterval(interval);
}

p.addEventListener("mouseenter", () => {
  iteration = 0;
  clearInterval(interval);
  interval = setInterval(randomText, 30);
});

// spotlight + cursor dot update
const cursorDot = document.querySelector(".cursor-dot");

document.addEventListener("mousemove", (e) => {
  document.documentElement.style.setProperty('--x', e.clientX + 'px');
  document.documentElement.style.setProperty('--y', e.clientY + 'px');

  cursorDot.style.left = e.clientX + "px";
  cursorDot.style.top = e.clientY + "px";
});
