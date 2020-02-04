var winSnd = new Audio('./resources/sounds/win.wav');

document.querySelector('.congratulations').addEventListener('click', winSong);
function winSong() {
  winSnd.play();
}
