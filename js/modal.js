'use strict';

const elModal = document.querySelector('.modal');
const elText = document.querySelector('.modal__text');

function openModal() {
  if (typeof elModal.showModal === 'function') {
    elModal.showModal();

    // disable scrolling
    document.body.style.overflow = 'hidden';
    document.body.style.height = '100%';
  }
}

// close buttons
const elCloseIcon = document.querySelector('.modal__closeIcon');
elCloseIcon.addEventListener('click', closeModal);

function closeModal() {
  elModal.close(this);

  // enable scrolling
  document.body.style.overflow = 'auto';
  document.body.style.height = 'auto';
}

// when modal closed, it send here form submit values
elModal.addEventListener('close', () => {
  document.body.style.overflow = 'auto';
  document.body.style.height = 'auto';

  console.log('Submitted value: "' + elModal.returnValue + '"');

  const email = elModal.querySelector('input').value;
  console.log('elFormInputs:', email);
});
