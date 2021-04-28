const btn = document.getElementById('btn');
const p = document.getElementById('paragraph');
let clickCount = 0;

btn.addEventListener('click', () => {
  clickCount += 1;
  p.innerText = clickCount;
});
