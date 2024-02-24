import {scan} from './scanner';

scan('test_cases/tower_of_hanoi.c').then(tokens =>
  console.log({tokens, tokenCount: tokens.length})
);
