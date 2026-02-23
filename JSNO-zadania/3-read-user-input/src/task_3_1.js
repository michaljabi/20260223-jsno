const user = { name: "", lastName: "", age: 0 };
rl.question("Podaj imie: ", (a) => {
  user.name = a;
  rl.question("Podaj nazwisko: ", (a) => {
    user.lastName = a;
    rl.question("Podaj wiek: ", (a) => {
        user.age = Number(a);
        // user.age = +a;

        console.log('Pobrane dane', user)
        rl.close()
    });
  });
});