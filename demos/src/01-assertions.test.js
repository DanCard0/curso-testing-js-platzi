test('To be null', () => {
  const data = null;
  expect(data).toBeNull();
  expect(data).toBeDefined();
  expect(data).not.toBeUndefined();
});

test('Booleans tests', () => {
  expect(true).toEqual(true);

  expect(0).toBeFalsy();
  expect('').toBeFalsy();
  expect(false).toBeFalsy();
});

test('string tests', () => {
  expect('Christoph').toMatch(/stop/);
});

test('arrays tests', () => {
  const nums = [1, 2, 3, 4];
  expect(nums).toContain(3);
});
