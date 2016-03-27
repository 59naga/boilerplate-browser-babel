import yourModuleName from '../src';
import assert from 'power-assert';

describe('your-module-name', () => {
  it('spec1', () => {
    assert(yourModuleName() === 'bar');
  });
});
