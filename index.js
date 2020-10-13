const btn = document.querySelector('button');

btn.addEventListener('click', (e) => {
  document.querySelector(
    'body'
  ).style.background = `rgb(${randonNum()},${randonNum()},${randonNum()})`;
});

const randonNum = () => {
  return Math.floor(Math.random() * (255 - 0 + 1) + 0);
};

window.addEventListener('load', () => {
  document.querySelector(
    'body'
  ).style.background = `rgb(${randonNum()},${randonNum()},${randonNum()})`;
});
