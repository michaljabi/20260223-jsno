/**
 * Zadaniem konsolowego narzędzia ESLint — jest pilnowanie poprawności naszego kodu.
 * Już na poziomie tzw. "statycznej analizy kodu"
 *
 * Wymuszamy pewne standardy pisowni naszego kodu,
 * - ma poprawić to jego czytelność
 *
 * Zabraniamy również stosowania pewnych składni / pisowni,
 * - chcemy ustrzec się przed potencjalnymi błędami
 *
 * https://eslint.org/docs/latest/rules/
 *
 * Dodatkowo wtyczka do VSC:
 * https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
 * */

// Tutaj fajny error zawczasu (no-undef):
// const nyGlobalProblem = null;

// Kolejny problem (prefer-const):
const ex = 2;
console.log(ex + 39);

// Pozostawienie linii poniżej groziłoby zatrzymaniem programu:
debugger;

const y = 20;
console.log(y);

// (no-unused-vars)
function addTwoNumbers(a, z) {
  // warning, (no-shadow) dla "y"
  return a + z;
}

console.log(addTwoNumbers(2, 3));
