/* global describe, it, before */
const chai = require('chai');
chai.expect();

const expect = chai.expect;
const CSSBeauty = require('../src/index.js');
describe('It should works',  () => {
  it('should return formatted css', () => {
    const css = CSSBeauty.beauty('body { font-size: 12px; }');
    expect(css).to.be.equal('body {\n  font-size: 12px;\n}');
  });
});