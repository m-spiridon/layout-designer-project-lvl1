//Shrink navbar on scroll and Progress-bar

window.onscroll = scroll;
function scroll() {
  const distanceFromTop = document.body.scrollTop || document.documentElement.scrollTop;
  const pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const progressBarWidth = (distanceFromTop / pageHeight) * 100;
  document.querySelector('.progress-bar').style.width = progressBarWidth + '%';
}
