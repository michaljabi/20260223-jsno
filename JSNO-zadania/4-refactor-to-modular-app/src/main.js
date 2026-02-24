import { makeBanner } from './make-banner.js';
import { app } from './app.js';

console.log(makeBanner({ word: 'WITAJ W GENERATORZE BANNERÓW [!]' }));

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
