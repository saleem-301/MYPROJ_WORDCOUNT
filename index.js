#! /usr/bin/env node
import inquirer from 'inquirer';
const sentence = await inquirer.prompt({
    name: 'para',
    type: 'input',
    message: 'Enter Your Sentence or Para to count words in it = '
});
let counts = sentence.para.replace(/\s+/g, ' ').trim().split(" ");
console.log(`NO OF WORDS IN YOUR SENTENCE = ${counts.length}`);
