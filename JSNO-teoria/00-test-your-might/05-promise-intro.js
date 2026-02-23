
console.log('Hello stranger... shall we start?')

// PROVIDER
function giveMeTheNumber() {
    return Promise.resolve(300)
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
        console.log(val)
    })

// 2. async/await syntax (lukier składniowy do odbioru Promise)
// Inline API (sync)
const val = await giveMeTheNumber();
console.log(val)