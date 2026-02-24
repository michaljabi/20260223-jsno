const LR_PADDING = 4;
const BORDER_DECORATOR = '*';

// export function makeBanner(word = "pusty", decorateWith = BORDER_DECORATOR) {

// Named params symlation:
// export function makeBanner(config = {}) {
//   const { word = "", decorateWith = BORDER_DECORATOR } = config;
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring
// destrukturyzacja obiektu.
// można też destrukturyzować array!
// najsłynniejszy przykład: https://react.dev/reference/react/useState
export function makeBanner({
  word = '',
  decorateWith = BORDER_DECORATOR
} = {}) {
  // const border = config.decorateWith.repeat(word.length + LR_PADDING);
  const border = decorateWith.repeat(word.length + LR_PADDING);
  return `${border}
${decorateWith} ${word.toUpperCase()} ${decorateWith}
${border}`;
}

export function sentenceToBanners(sentence = '') {
  for (const word of sentence.split(' ')) {
    // console.log(makeBanner({ word: word }));
    console.log(makeBanner({ word }));
  }
}

// const myObj = { BORDER_DECORATOR: BORDER_DECORATOR, makeBanner: makeBanner };
// Object property shorthand (to samo co wyżej):
// https://attacomsian.com/blog/javascript-object-property-shorthand
const myObj = { BORDER_DECORATOR, makeBanner };
// console.log(myObj);

// Można mieć TYLKO JEDEN default
// https://attacomsian.com/blog/javascript-object-property-shorthand
// export default {
//   a: BORDER_DECORATOR,
//   LR_PADDING,
//   makeBanner,
//   sentenceToBanners
// };
export default BORDER_DECORATOR;

