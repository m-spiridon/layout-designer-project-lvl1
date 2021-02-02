//Progress-bar

window.onscroll = scroll;
function scroll() {
  const distanceFromTop = document.body.scrollTop || document.documentElement.scrollTop;
  const pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const progressBarWidth = (distanceFromTop / pageHeight) * 100;
  document.querySelector('.progress-bar').style.width = progressBarWidth + '%';
};

//Close menu on click outside

document.querySelector('.send-button').addEventListener('click', function() {
  document.querySelector('.menu-shadow').style.visibility = 'visible';
  document.querySelector('.menu-shadow').style.opacity = '1';
  document.querySelector('.menu-shadow').style.zIndex = '3';
  document.querySelector('.popup').style.visibility = 'visible';
  document.querySelector('.popup').style.opacity = '1';
});

document.querySelector('.menu-shadow').addEventListener('click', function() {
  document.querySelector('.menu-shadow').style.visibility = 'hidden';
  document.querySelector('.menu-shadow').style.opacity = '0';
  document.querySelector('.menu-shadow').style.zIndex = '0';
  document.querySelector('.popup').style.visibility = 'hidden';
  document.querySelector('.popup').style.opacity = '0';
});

document.querySelector('.popup-close').addEventListener('click', function() {
  document.querySelector('.menu-shadow').style.visibility = 'hidden';
  document.querySelector('.menu-shadow').style.opacity = '0';
  document.querySelector('.menu-shadow').style.zIndex = '0';
  document.querySelector('.popup').style.visibility = 'hidden';
  document.querySelector('.popup').style.opacity = '0';
});

