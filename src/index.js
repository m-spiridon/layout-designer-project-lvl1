//Progress-bar

window.onscroll = scroll;
function scroll() {
  const distanceFromTop = document.body.scrollTop || document.documentElement.scrollTop;
  const pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const progressBarWidth = (distanceFromTop / pageHeight) * 100;
  document.querySelector('.progress-bar').style.width = progressBarWidth + '%';
};

//Burger checked/unchecked

document.querySelector('#burger').addEventListener('change', function() {
  if (this.checked) {
    document.querySelector('.menu-shadow').style.visibility = 'visible';
    document.querySelector('.menu-shadow').style.opacity = '1';
  } else {
    document.querySelector('.menu-shadow').style.visibility = 'hidden';
    document.querySelector('.menu-shadow').style.opacity = '0';
    document.querySelector('.menu-shadow').style.zIndex = '0';
  }
});

//Hide menu, popup and shadow on click on shadow

document.querySelector('.menu-shadow').addEventListener('click', function() {
  document.querySelector('#burger').checked = false;
  document.querySelector('.menu-shadow').style.visibility = 'hidden';
  document.querySelector('.menu-shadow').style.opacity = '0';
  document.querySelector('.menu-shadow').style.zIndex = '0';
  document.querySelector('.popup').style.visibility = 'hidden';
  document.querySelector('.popup').style.opacity = '0';
});

//Show popup

// document.querySelector('.send-button').addEventListener('click', function() {
//   document.querySelector('.menu-shadow').style.visibility = 'visible';
//   document.querySelector('.menu-shadow').style.opacity = '1';
//   document.querySelector('.menu-shadow').style.zIndex = '3';
//   document.querySelector('.popup').style.visibility = 'visible';
//   document.querySelector('.popup').style.opacity = '1';
//   this.preventDefault();
// });

//Hide popup on close button

document.querySelector('.popup-close').addEventListener('click', function() {
  document.querySelector('.menu-shadow').style.visibility = 'hidden';
  document.querySelector('.menu-shadow').style.opacity = '0';
  document.querySelector('.menu-shadow').style.zIndex = '0';
  document.querySelector('.popup').style.visibility = 'hidden';
  document.querySelector('.popup').style.opacity = '0';
});

function validateForm() {
	valid = true;
    if ( document.form.email.value == "" ) {
      alert ( 'Извини, это поле не может быть пустым' );
      valid = false;
    } else {
      document.querySelector('.menu-shadow').style.visibility = 'visible';
      document.querySelector('.menu-shadow').style.opacity = '1';
      document.querySelector('.menu-shadow').style.zIndex = '3';
      document.querySelector('.popup').style.visibility = 'visible';
      document.querySelector('.popup').style.opacity = '1';
    }
  return valid;
}

