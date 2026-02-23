// Popraw i użyj async/await + Promises w `readline`.
import { createInterface } from "node:readline/promises";
import { stdin, stdout, exit } from "node:process";

const rl = createInterface({ input: stdin, output: stdout });

const user = { name: "", lastName: "", age: 0 };

try {
  user.name = await rl.question("Podaj imie: ");
  user.lastName = await rl.question("Podaj nazwisko: ");
  user.age = Number(await rl.question("Podaj wiek: ")) || 0;
  console.log("Pobrane dane", user);
} catch (e) {
  console.error('\nBłąd:', e.message);
} finally {
  rl.close();
  exit(0);
}

/*
rl.question("Podaj imie: ", (a) => {
  user.name = a;
  rl.question("Podaj nazwisko: ", (a) => {
    user.lastName = a;
    rl.question("Podaj wiek: ", (a) => {
      user.age = Number(a);
      // user.age = +a;

      console.log("Pobrane dane", user);
      rl.close();
      exit(0);
    });
  });
});
*/
