# [9] Time to start a Party

> Naszym zadaniem bęzie przygotowanie serwera w `express.js` do obsługi listy gości na przyjęcie.

## [9.0] ogólna koncepcja

1. Goście mogą mieć statusty: `invited` (domyślny) -> `confirmed` / `declined` - ich dokładne pola (stan danych) masz w `guest-in-memory-db.js`
2. Metoda `GET` na adresie `/guests` powinna zwracać wszystkich gości z `questInMemoryDb.getAll()`
3. Serwer może byś ustawiony na dowolnym porcie, jego pliki z kodem powinny znajdować się w katalogu `.js`
4. W katalogu `./requests` przygotuj `test-guest.http` plik gdzie przygotujesz zapytanie od klienta REST na endpoint `/guests`

## [9.1] Przygotowanie

1. Nowy projekt Nodowy (`package.json`) + `nodemon` + `express`
2. Rozbij główny plik aplikacji i plik z serwerem (osobny `server.js`)
3. Ustaw `ESM` dla projektu
4. Serwer przygotuj w oparciu o bibliotekę `express`
5. Wystaw endpoint `/guests` i zwracaj tablicę gości
6. Przetestuj w oparciu o plik `.http`

## [9.2] Global error handler

1. Zrób handler wszystkich errorów (catch-all) jako `res.json` - przygotuj odpowiedni kod `http` błędu
2. Skorzystaj z doc: [writing-error-handlers](https://expressjs.com/en/guide/error-handling.html#writing-error-handlers)
