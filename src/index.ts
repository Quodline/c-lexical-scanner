import {scan} from './scanner';

(async function entry() {
  await scan('test_cases/tower_of_hanoi.c', true);
})();
