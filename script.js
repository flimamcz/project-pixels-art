const getElementColor = document.querySelectorAll('.color');
const buttonClear = document.getElementById('clear-board');
const valueInput = document.getElementById('board-size');
const buttonSubmit = document.getElementById('generate-board');
const pixelBoard = document.getElementById('pixel-board');
const colorsRandomElements = document.querySelectorAll('.color-random');

// Gera as cores aleatorias e aplica
function generateColors() {
  const arrayColors = [];

  for (let index = 0; index < 3; index += 1) {
    arrayColors.push(`rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`);
  }

  for (let index = 0; index < arrayColors.length; index += 1) {
    colorsRandomElements[index].style.backgroundColor = arrayColors[index];
  }
}

// Cria a lista de pixel
function createListPixelsBoard(numberPixel = 5) {
  pixelBoard.style.maxWidth = `${numberPixel * 40}px`;
  for (let index = 0; index < numberPixel ** 2; index += 1) {
    const li = document.createElement('li');
    li.classList.add('pixel');
    pixelBoard.appendChild(li);
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
    item.style.backgroundColor = 'rgb(255, 255, 255)';
  });
}

function createNewTable(qntPixel) {
  let sizeBoardSize = qntPixel;
  if (sizeBoardSize < 5) {
    sizeBoardSize = 5;
  } else if (sizeBoardSize > 50) {
    sizeBoardSize = 50;
  } else {
    pixelBoard.style.maxWidth = `${sizeBoardSize * 40}px`;
  }

  for (let index = 0; index < sizeBoardSize ** 2; index += 1) {
    const li = document.createElement('li');
    li.classList.add('pixel');
    pixelBoard.appendChild(li);
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
  if (isNumberInput <= 0 || valueInput.value === '') {
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
  generateColors();
};
