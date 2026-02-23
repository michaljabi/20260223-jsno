console.log("Hello stranger... shall we start?");

// PROVIDER
function giveMeTheNumber(passwd = "") {
  // return Promise.resolve(300)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (passwd === "abc") {
        resolve(200);
      } else {
        reject(new Error("Not allowed to widraw money"));
      }
    }, 1000);
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
giveMeTheNumber("abc")
  .then((val) => {
    // await giveMeTheNumber()
    console.log(val);
    return val + 800;
  })
  .then((val) => {
    // await giveMeTheNumber()
    console.log(val);
  })
  .then((val) => {
    // await giveMeTheNumber()
    return giveMeTheNumber().catch((err) => {
      console.log(err.message);
      return 0
    });
  })
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
