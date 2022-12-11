'use strict';

function loadPosts() {
  console.log('loadPosts');

  renderPosts();
}

function renderPosts() {
  const posts = getPosts();

  const strHTMLs = posts.map(
    (post) => `
        <section class="card">
            <img class="card-image " src="assets/img/${post.imgUrl}-thumbnail.png" alt="Image" />
            <article class="card-article flex flex-column">
                <h1 class="card-title">
                    ${post.title}
                </h1>
                <p>
                    ${post.text}
                </p>
                <button class="card-button btn--style" onclick="onPostBtn()">Continue Reading</button>
            </article>
        </section>
      `
  );

  document.querySelector('.main-content').innerHTML = strHTMLs.join('');
}

function onPostBtn() {
  openModal();
}

function onAddPost(ev) {
  console.log('onAddPost ev:', ev);
  ev.preventDefault();

  renderPosts();
}

function onRemovePost(ev, postId) {
  console.log('onRemovePost ev:', ev);

  confirm('Do you want to delete?') && removePost(postId);
  renderPosts();
}
