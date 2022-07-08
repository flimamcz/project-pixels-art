const getElementColor = document.querySelectorAll('.color');
const buttonClear = document.getElementById('clear-board');
const valueInput = document.getElementById('board-size');
const buttonSubmit = document.getElementById('generate-board');
const pixelBoard = document.getElementById('pixel-board');

// Cria a lista de pixel
function createListPixelsBoard(numberPixel = 5) {
  const pixelsBoard = document.getElementById('pixel-board');
  pixelBoard.style.maxWidth = `${numberPixel * 40}px`;

  for (let index = 0; index < numberPixel ** 2; index += 1) {
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

function createNewTable(qntPixel) {
  const pixelsBoard = document.getElementById('pixel-board');
  pixelBoard.style.maxWidth = `${qntPixel * 40}px`;

  for (let index = 0; index < qntPixel ** 2; index += 1) {
    const li = document.createElement('li');
    li.classList.add('pixel');
    pixelsBoard.appendChild(li);
  }
}

function clearOldTable() {
  const pixels = document.querySelectorAll('.pixel');
  pixels.forEach((pixel) => {
    pixel.remove();
  });
}

function handleSubmit(event) {
  event.preventDefault();
  const isNumberInput = Number(valueInput.value);
  if (isNumberInput <= 0 || isNumberInput > 50 || valueInput.value === '') {
    alert('Board inválido!');
    valueInput.value = '';
  } else {
    valueInput.value = '';
    valueInput.focus();
    clearOldTable();
    createNewTable(isNumberInput);
  }
}

buttonClear.addEventListener('click', clearBoard);
buttonSubmit.addEventListener('click', (event) => {
  handleSubmit(event);
});

// Carrega funçoes pós carregamento da página
window.onload = () => {
  createListPixelsBoard();
  addClassSelect();
  getBackgroundColor();
  backgroundAplly('rgb(0, 0, 0)');
};
