/* global describe, it, before */

import chai from 'chai';
import Vari from '../lib/Vari.js';

chai.expect();

const expect = chai.expect;

describe('Given an instance of my library',  () => {
  describe('when I need the name', () => {
    it('should return the name', () => {
      expect(Vari.name).to.be.equal('Vari');
    });
  });
});
