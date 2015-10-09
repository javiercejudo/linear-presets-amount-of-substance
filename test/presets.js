/*jshint node:true, mocha:true */

'use strict';

require('should');

var Decimal = require('linear-arbitrary-precision')(require('floating-adapter'));
var rescale = require('rescale')(Decimal).rescale;
var substance = require('linear-preset-factory')(require('../src/linear-presets-amount-of-substance'));

function convert(x, preset) {
  return Number(rescale(preset[0], preset[1], x));
}

function invert(preset) {
  return preset.slice().reverse();
}

describe('amount of substance presets', function() {
  it('should convert correctly', function() {
    convert(9525.43977, substance.mole_mole).should.be.exactly(9525.43977);
    convert(0, substance.mole_mole).should.be.exactly(0);

    convert(9525.43977, substance.mole_poundMole).should.be.exactly(21);
    convert(0, substance.mole_poundMole).should.be.exactly(0);
  });
});
