'use strict';

const STORAGE_KEY = 'postsDB';
const RANDOM_IMG = 'https://picsum.photos/468/307';

var gPosts = null;

// clearLS();
_createPosts();

function getPosts() {
  let posts = gPosts.filter((post) => post);

  return posts;
}

function deletePost(postId) {
  const postIdx = gPosts.findIndex((post) => postId === post.id);
  gPosts.splice(postIdx, 1);

  _savePostsToStorage();
}

function addPost(...post) {
  gPosts.unshift(post);
  _savePostsToStorage();

  return post;
}

function getPostById(postId) {
  const post = gPosts.find((post) => postId === post.id);

  return post;
}

function _createPost(imgUrl, title, text) {
  return {
    id: makeId(),
    title,
    text,
    date: Date.now(),
    imgUrl: imgUrl || RANDOM_IMG,
  };
}

function _createPosts() {
  var posts = loadFromLS(STORAGE_KEY);

  // Nothing in storage - generate demo data
  if (!posts || !posts.length) posts = getDummyPosts();

  gPosts = posts;

  console.log('gPosts created:', gPosts);
  _savePostsToStorage();
}

function _savePostsToStorage() {
  saveToLS(STORAGE_KEY, gPosts);
}
