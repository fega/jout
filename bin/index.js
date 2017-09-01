#!/usr/bin/env node

const jsome = require('jsome');

jsome.colors = {
  num: 'yellow',
  str: 'red',
  bool: 'magenta',
  regex: 'blue',
  undef: 'grey',
  null: 'grey',
  attr: 'green',
  quot: 'gray',
  punc: 'gray',
  brack: 'gray',
};

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', (data) => {
  jsome(JSON.parse(data));
  // process.exit()
});
