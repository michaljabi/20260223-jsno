// // @ts-check

console.log(`Hello 
    stranger... 
    shall 
we
     start?`);

console.log(2 + 2 * 2);

// function giveMeTheNumber(mistery = (num = 0) => {}) {
/**
 *
 * @param {Function} widrawMoneyAcceptedCallback
 */
// PROVIDER
function giveMeTheNumber(widrawMoneyAcceptedCallback, passwd = "") {
  // if (passwd !== "abcd") {
  //   throw new Error("Not allowed to widraw the money!");
  // }
  // mistery(200);
  setTimeout(() => {
    // throw new Error("Not allowed to widraw the money!");
    // widrawMoneyAcceptedCallback(null, 300);
    widrawMoneyAcceptedCallback(new Error("Not allowed to widraw the money!"), null);
  }, 1000);
}

/**
 * 1
 *
 * Poniżej odbierz liczbę 300 i pokaż ją na ekranie:
 * */
// CONSUMER:

giveMeTheNumber((err, val = 0) => {
  if(err) {
     console.log(err.message)
     return;
  }
  console.log(val);
});

// try {
//   giveMeTheNumber((val = 0) => {
//     console.log(val);
//   });
// } catch (e) {
//   console.log(e.message);
// }

// CONSUMER 2:
// giveMeTheNumber((val = 0) => {
//   console.log(val);
// });

// try {
//     giveMeTheNumber();
// } catch (err) {
//     console.log(err.message)
// }

// console.log('@')
