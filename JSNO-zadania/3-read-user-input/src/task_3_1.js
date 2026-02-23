// Popraw i użyj async/await + Promises w `readline`.
import { createInterface } from "node:readline";
import { stdin, stdout, exit } from "node:process";

const rl = createInterface({ input: stdin, output: stdout });

const user = { name: "", lastName: "", age: 0 };
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
