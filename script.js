function createListPixelsBoard() {
  const pixelsBoard = document.getElementById('pixel-board');

  for (let index = 0; index < 25; index += 1) {
    const li = document.createElement('li');
    li.classList.add('pixel');
    pixelsBoard.appendChild(li);
  }
}

const getElementColor = document.querySelectorAll('.color');
getElementColor[0].classList.add('selected');

getElementColor.forEach((element) => {
  element.addEventListener('click', (event) => {
    getElementColor.forEach((item) => {
      item.classList.remove('selected');
    });
    event.target.classList.add('selected');
  });
});

window.onload = () => {
  createListPixelsBoard();
};
