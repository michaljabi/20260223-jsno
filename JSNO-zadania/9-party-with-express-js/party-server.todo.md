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

## [9.3] Osobny routing dla `/guests`

1. Przygotuj osobny folder + plik dla `guests/guests.controller.js` - to będzie zestaw praktyk, którym będziemy się posługiwać aby osiągnąć na serwerze tzw. `layered architecture` (`controller` -> `service` -> `repository/ORM/DB`)
2. Wykorzystaj [routing](https://expressjs.com/en/guide/routing.html#express-router) z `express` w następujący sposób:

```javascript

export const guestsController = express.Router();

guestsController.get('', (req, res) => {})

```

3. W pliku `app.js`:

```JavaScript

app.use('/guests', guestsController)

```

## [9.4] Obsługa błędu `404` dla `/:uuid` gościa

1. Dodaj odpowiedni błąd jeśli nie można odnaleźć użytkownika - zwracając `404` Not Found error
2. Zrefaktoryzuj obsługę użytkowników na `:uuid` zamiast `:id` w params
3. Daj poprawny message błędu że user o takim `uuid` nie istnieje (po angielsku)
4. Przetestuj w pliku `.http` poprawność - happy vs sad path

## [9.5] Wystawienie serwera na produkcję

1. Zainstaluj globalnie `pm2` komendą `npm i -g pm2`, możesz zapisać sobie to jako skrypt - żeby zapamiętać, lub donstaluj również jako `devDependency`
2. Przygotuj plik `ecosystem.config.js` (Configuration File) na wzór doc: [process-management](https://pm2.keymetrics.io/docs/usage/process-management) ; który uruchomi kod `src/main.js` 
3. Przygotuj skrypt: `prod` jako `pm2 start ecosystem.config.js`
4. Uruchom skrypt i sprawdź działanie
