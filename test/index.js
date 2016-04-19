// dependencies
import assert from 'assert';

// target
import yourModuleName from '../src';

// specs
describe('yourModuleName', () => {
  it('spec1', () => {
    assert.deepStrictEqual(yourModuleName(), { foo: null });
  });
});
