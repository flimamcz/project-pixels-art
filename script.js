const getElementColor = document.querySelectorAll('.color');

function createListPixelsBoard() {
  const pixelsBoard = document.getElementById('pixel-board');

  for (let index = 0; index < 25; index += 1) {
    const li = document.createElement('li');
    li.classList.add('pixel');
    pixelsBoard.appendChild(li);
  }
}

function backgroundAplly(rgb) {
  const pixel = document.querySelectorAll('.pixel');
  pixel.forEach((item) => {
    item.addEventListener('click', (event) => {
      event.currentTarget.style.backgroundColor = rgb
    });
  });
}

function getBackgroundColor() {
  getElementColor.forEach((element) => {
    element.addEventListener('click', () => {
      const item = element;
      const cssObjStyle = window.getComputedStyle(item, null);
      const backgroundColor = cssObjStyle.getPropertyValue('background-color');
      backgroundAplly(backgroundColor);
    });
  });
}

function selectColorPallete() {
  getElementColor[0].classList.add('selected');

  getElementColor.forEach((element) => {
    element.addEventListener('click', (event) => {
      getElementColor.forEach((item) => {
        item.classList.remove('selected');
      });
      event.target.classList.add('selected');
    });
  });
}

window.onload = () => {
  createListPixelsBoard();
  selectColorPallete();
  getBackgroundColor();
  backgroundAplly('rgb(0, 0, 0)');
};
