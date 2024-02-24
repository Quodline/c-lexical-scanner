import {scan} from './scanner';

test('fibonacci', async () => {
  const tokens = await scan('test_cases/fibonacci.c');
  expect(tokens.length).toBe(108);
});

test('tower of hanoi', async () => {
  const tokens = await scan('test_cases/tower_of_hanoi.c');
  expect(tokens.length).toBe(115);
});
