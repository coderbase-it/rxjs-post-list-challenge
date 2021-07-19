import { from } from 'rxjs';

const enum Category {
  ANGULAR = 'Angular',
  REACT = 'React',
  VUE = 'Vue'
}

let postsList = [
  {
    id: 1,
    title: 'Angular Forms',
    category: Category.ANGULAR
  },
  {
    id: 2,
    title: 'Angular Router',
    category: Category.ANGULAR
  },
  {
    id: 3,
    title: 'Vue Forms',
    category: Category.VUE
  },
  {
    id: 4,
    title: 'React Forms',
    category: Category.REACT
  },
  {
    id: 5,
    title: 'Angular Schematics',
    category: Category.ANGULAR
  }
];

function sortPosts() {
  /**
   * Should return
   * an array of object
   * each object represent a category
   * and each object should have a posts property ( list of posts of this category )
   *
   * [
   * {
   *  category: 'Angular',
   *  posts : [ { } , {} , ... ]
   * },
   * {
   *  category: 'React',
   *  posts : [ { }  , {} , ... ]
   * }
   * {
   *  category: 'Vue',
   *  posts : [ { }  , {} , ...  ]
   * }
   * ]
   */
  return [];
}

function ObservablePostList() {
  /*
   *Same behavior than function on top
   * Using only rxjs operators
   */

  return from(postsList);
}

/*
* Ressource:
 http://rxmarbles.com/
 https://rxviz.com/examples
 https://rxjs-dev.firebaseapp.com/operator-decision-tree
 https://www.learnrxjs.io/
*/
