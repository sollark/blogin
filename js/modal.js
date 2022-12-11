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
  document.body.style.overflow = 'initial';
  document.body.style.height = 'initial';
}

// when modal closed, it send here form submit values
elModal.addEventListener('close', () => {
  document.body.style.overflow = 'initial';
  document.body.style.height = 'initial';

  const email = elModal.querySelector('input').value;
  console.log('mail:', email);
});
