// @ts-check

console.log(`Hello 
    stranger... 
    shall 
we
     start?`);

console.log(2 + 2 * 2);

// function giveMeTheNumber(mistery = (num = 0) => {}) {
/**
 *
 * @param {Function} mistery
 */
// PROVIDER
function giveMeTheNumber(mistery) {
  mistery(200);
  setTimeout(() => {
    mistery(100);
  }, 5000);
}

/**
 * 1
 *
 * Poniżej odbierz liczbę 300 i pokaż ją na ekranie:
 * */
// CONSUMER:
giveMeTheNumber((val = 0) => {
  console.log(val);
});

// CONSUMER 2:
giveMeTheNumber((val = 0) => {
  console.log(val);
});

// try {
//     giveMeTheNumber();
// } catch (err) {
//     console.log(err.message)
// }

// console.log('@')
