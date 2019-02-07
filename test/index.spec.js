import chai from 'chai';
import { describe, it } from 'mocha';
const expect = chai.expect;

import {
  validateEmail,
} from '../src/utils/utils';

describe('check Utils function', () => {
  it('validateEmail should be true', () => {
    const email = 'test@gmail.com';
    const isValid = validateEmail(email);
    expect(isValid).to.be.true;
  });

  it('validateEmail should be false', () => {
    const email = 't.estgmail.com';
    const isValid = validateEmail(email);
    expect(isValid).to.be.false;
  });
});