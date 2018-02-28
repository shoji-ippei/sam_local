'use strict';
const chai        = require('chai')
  , sinon       = require('sinon')
  , MockContext = require('../mock-lambda-context')
  , expect      = chai.expect
  ;

describe('test', function(){
  let ctx;

  beforeEach(function(){
    ctx = new MockContext();
  });

  context('test case', function(){
    it('expection', () => {
      //expect(hogehoge).to.be.equal(true)
    });
  });
});
