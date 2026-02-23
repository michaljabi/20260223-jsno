console.log("Hello stranger... shall we start?");

// PROVIDER
function giveMeTheNumber() {
  // return Promise.resolve(300)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve(200);
      reject(new Error("Not allowed to widraw money"));
    }, 3000);
  });
}

// PROVIDER #2 (new API)
// async function giveMeTheNumberAsync() {
//     return 300
// }

/**
 * 1
 *
 * Poniżej odbierz liczbę 300 i pokaż ją na ekranie:
 * */

// CONSUMER:
// console.log(giveMeTheNumber());

// 1. Classic
giveMeTheNumber()
  .then((val) => {
    // await giveMeTheNumber()
    console.log(val);
  })
  .catch((err) => {
    console.log(err.message);
  })
  .finally(() => {
    console.log("I will always fire anyway");
  });

// 2. async/await syntax (lukier składniowy do odbioru Promise)
// Inline API (sync)
try {
  const val = await giveMeTheNumber();
  console.log(val);
} catch (e) {
  console.log(e.message);
} finally {
  console.log("I will always fire anyway");
}
