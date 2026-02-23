import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

const LR_PADDING = 4;

function makeBanner(word = '') {
    const border = "*".repeat(word.length + LR_PADDING);
    return `${border}
* ${word.toUpperCase()} *
${border}`
}

function sentenceToBanners(sentence = '') {
    for(const word of sentence.split(' ')) {
        console.log(makeBanner(word));
    }
}


const answer = await rl.question('Podaj zdanie jakie chcesz zamienić w banner: ');

sentenceToBanners(answer)

console.log('Kończę działanie, żegnam...')

rl.close();