import { createInterface } from "node:readline/promises";
import { stdin, stdout, exit } from "node:process";

// stdout.push("TEST", "utf-8")

const rl = createInterface({ input: stdin, output: stdout });

const LR_PADDING = 4;

function makeBanner(word = "") {
  const border = "*".repeat(word.length + LR_PADDING);
  return `${border}
* ${word.toUpperCase()} *
${border}`;
}

function sentenceToBanners(sentence = "") {
  for (const word of sentence.split(" ")) {
    console.log(makeBanner(word));
  }
}

// po 2017 async / await
// const answer = await rl.question('Podaj zdanie, jakie chcesz zamienić w banner: ');

// A jak wcześniej ? przed 2017:
rl.question("Podaj zdanie, jakie chcesz zamienić w banner: ")
  .then((answer) => {
    sentenceToBanners(answer);

    console.log("Kończę działanie, żegnam...");
    //rl.close();
  })
  .catch((err) => {
    console.error(err);
    //rl.close();
  })
  .finally(() => {
    rl.close();
    // to nie jest tutaj konieczne, ale można:
    exit(0);
  });

// Problem z Callbacks jeśli name + lastName + age:

