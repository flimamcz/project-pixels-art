function createListPixelsBoard() {
  const pixelsBoard = document.getElementById('pixel-board');

  for (let index = 0; index < 25; index += 1) {
    const li = document.createElement('li');
    li.classList.add('pixel');
    pixelsBoard.appendChild(li);
  }
}

window.onload = () => {
  createListPixelsBoard();
};
