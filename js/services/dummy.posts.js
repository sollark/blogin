'use strict';

const gDummyPosts = [
  {
    id: makeId(),
    imgUrl: '1',
    title: 'Duis aute irure dolor in henderit in voluptate.',
    text: `Ut enim ad minim veniam, quis nostrud exercitation ullamco \ laboris nisi ut aliquip ex ea commo doconsequat, sunt in culpa \ 
    qui officia deserunt mollit anim id est laborum.
    <br />
    <br />
    Duis aute irure dolor in reprehenderit in voluptate velit esse \
    cillum dolore eu fugiat nulla pariatur...`,
    date: Date.now(),
  },
  {
    id: makeId(),
    imgUrl: '2',
    title: 'Duis aute irure dolor in henderit in voluptate.',
    text: `Ut enim ad minim veniam, quis nostrud exercitation ullamco \ laboris nisi ut aliquip ex ea commo doconsequat, sunt in culpa \ 
    qui officia deserunt mollit anim id est laborum.
    <br />
    <br />
    Duis aute irure dolor in reprehenderit in voluptate velit esse \
    cillum dolore eu fugiat nulla pariatur...`,
    date: Date.now(),
  },
  {
    id: makeId(),
    imgUrl: '3',
    title: 'Duis aute irure dolor in henderit in voluptate.',
    text: `Ut enim ad minim veniam, quis nostrud exercitation ullamco \ laboris nisi ut aliquip ex ea commo doconsequat, sunt in culpa \ 
    qui officia deserunt mollit anim id est laborum.
    <br />
    <br />
    Duis aute irure dolor in reprehenderit in voluptate velit esse \
    cillum dolore eu fugiat nulla pariatur...`,
    date: Date.now(),
  },
];

function getDummyPosts() {
  return gDummyPosts;
}
