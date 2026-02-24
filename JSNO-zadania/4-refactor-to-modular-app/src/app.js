import { sentenceToBanners } from './make-banner.js';

import { createInterface } from 'node:readline/promises';
import { stdin, stdout, exit } from 'node:process';

const rl = createInterface({ input: stdin, output: stdout });

export async function app() {
  const sentence = await rl.question(
    'Podaj zdanie jakie chcesz zamienić w banner: '
  );
  sentenceToBanners(sentence);
  const decistion =
    await rl.question(`Co robimy dalej - wpisz odpowiednią literę:
[k]oniec
[n]astępny banner
`);
  if (decistion.toLowerCase() === 'n') {
    // powtórz...
    return app();
  }
  rl.close();
}
