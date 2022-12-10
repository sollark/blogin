'use strict';

function onInit() {
  renderPosts();
}

function toggleMenu(elChildren) {
  document.body.classList.toggle('menu-open');

  for (const child of elChildren) {
    child.classList.toggle('hidden');
  }
}
