#!/usr/bin/env node

import { program } from 'commander';
import chalk from 'chalk';
import open from 'open';
import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const pkg = JSON.parse(readFileSync(resolve(__dirname, '../package.json'), 'utf-8'));
const log = console.log;

program.name(pkg.name).description(pkg.description).version(pkg.version);

program
  .option('-b --blog', 'Open blog in browser')
  .option('-g --github', 'Open GitHub in browser')
  .action((options) => {
    if (options.blog) {
      open('https://dohyeon.dev');
    } else if (options.github) {
      open('https://github.com/doputer');
    } else {
      log(`
${chalk.cyan('안녕하세요. 개발자 김도현 입니다.')}\n
${chalk.yellow('Email.')} swputer@gmail.com
${chalk.yellow('Blog.')} https://dohyeon.dev
${chalk.yellow('GitHub.')} https://github.com/doputer`);
    }
  });

program.parse(process.argv);
