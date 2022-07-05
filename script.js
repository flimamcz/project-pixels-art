const getElementColor = document.querySelectorAll('.color');
const buttonClear = document.getElementById('clear-board');

// Cria a lista de pixel
function createListPixelsBoard() {
  const pixelsBoard = document.getElementById('pixel-board');

  for (let index = 0; index < 25; index += 1) {
    const li = document.createElement('li');
    li.classList.add('pixel');
    pixelsBoard.appendChild(li);
  }
}

// Aplica o background nos pixel selecionado
function backgroundAplly(background) {
  const pixel = document.querySelectorAll('.pixel');
  pixel.forEach((item) => {
    item.addEventListener('click', (event) => {
      const pixelInBackground = event.target;
      pixelInBackground.style.backgroundColor = background;
    });
  });
}

// pega o background e passa para o backgroundApply
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

// Aplica ás classes nas cores selecionadas
function addClassSelect() {
  getElementColor.forEach((element) => {
    element.addEventListener('click', (event) => {
      getElementColor.forEach((item) => {
        item.classList.remove('selected');
      });
      event.target.classList.add('selected');
    });
  });
}

// Limpar Pixel Board
function clearBoard() {
  const pixel = document.querySelectorAll('.pixel');
  pixel.forEach((element) => {
    const item = element;
    item.style.backgroundColor = 'rgba(255, 255, 255)';
  });
}

buttonClear.addEventListener('click', clearBoard);

// Carrega pós carregamento da página
window.onload = () => {
  createListPixelsBoard();
  addClassSelect();
  getBackgroundColor();
  backgroundAplly('rgb(0, 0, 0)');
};
