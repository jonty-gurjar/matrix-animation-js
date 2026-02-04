const para = document.querySelector("p");
const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");


const characters =
  "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+-=[]{}|;:',.<>/?`~";

const originalText = para.innerText;
const originalTextH1 = h1.innerText;
const originalTextH2 = h2.innerText;

let interval = null;

para.addEventListener("mouseenter", () => {
  let iteration = 0;

  clearInterval(interval);

  interval = setInterval(() => {
    h1.innerText = originalTextH1
      .split("")
      .map((char, index) => {
        if (index < iteration) {
          return originalTextH1[index];
        }
        return characters[Math.floor(Math.random() * characters.length)];
      })
      .join("");
      
    para.innerText = originalText
      .split("")
      .map((char, index) => {
        if (index < iteration) {
          return originalText[index];
        }
        return characters[Math.floor(Math.random() * characters.length)];
      })
      .join("");

    iteration += 1 / 3;

    if (iteration >= originalText.length) {
      clearInterval(interval);
      para.innerText = originalText;
    }
  }, 50);
});
