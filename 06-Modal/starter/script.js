'use strict';
//fubewuewkeuwbewk
const showmodel = document.querySelectorAll('.show-modal');
const modelpopup = document.querySelector('.modal');

console.log(showmodel);
showmodel.forEach(eachelement => {
  eachelement.addEventListener('click', function () {
    modelpopup.classList.remove('hidden');
  });
});

modelpopup.addEventListener('click', function () {
  modelpopup.classList.add('hidden');
});

document.addEventListener('keydown', function (e) {
  if (e.key == 'Escape' && !modelpopup.classList.contains('hidden'))
    modelpopup.classList.add('hidden');
});
