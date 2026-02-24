const LR_PADDING = 4;
const BORDER_DECORATOR = '*';

// export function makeBanner(word = "pusty", decorateWith = BORDER_DECORATOR) {

// Named params symlation:
// export function makeBanner(config = {}) {
//   const { word = "", decorateWith = BORDER_DECORATOR } = config;
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
    console.log(makeBanner(word));
  }
}

console.log(makeBanner({ word: 'HELLO' }));
console.log(makeBanner({ word: 'HELLO', decorateWith: '%' }));
console.log(makeBanner({}));
console.log(makeBanner({ decorateWith: '$' }));

/// console.log(makeBanner(undefined, "-"));
