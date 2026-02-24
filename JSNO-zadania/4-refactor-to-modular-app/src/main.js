import { makeBanner, sentenceToBanners } from './make-banner.js';

import { createInterface } from 'node:readline/promises';
import { stdin, stdout, exit } from 'node:process';

const rl = createInterface({ input: stdin, output: stdout });

console.log(makeBanner({ word: 'WITAJ W GENERATORZE BANNERÓW [!]' }));

async function app() {
  const sentence = await rl.question(
    'Podaj zdanie jakie chcesz zamienić w banner: '
  );
  sentenceToBanners(sentence);
  const decistion =
    await rl.question(`Co robimy dalej - wpisz odpowiednią literę:
[k]oniec
[n]astępny banner
`);
  if (decistion === 'n') {
    // powtórz...
    return app();
  }
  rl.close();
}

try {
  await app();
} catch (e) {
  console.error('\nBłąd:', e.message);
} finally {
  exit(0);
}

// import default
// import cokolwiekBoJadedcydujejaktosietutajnazywa from './make-banner.js';

// namespace import (all exported things)
// import * as cokolwiekcomaexport from './make-banner.js';

// default import + named
// import myDef, { sentenceToBanners, makeBanner as MB } from './make-banner.js';

// console.log(myDef);
// console.log(sentenceToBanners);

/// console.log(makeBanner(undefined, "-"));
//console.log(cokolwiekBoJadedcydujejaktosietutajnazywa)
