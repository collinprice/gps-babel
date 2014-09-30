'use strict';

var gps_babel = require('../lib/gps-babel.js');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports['convert'] = {
  setUp: function(done) {
    // setup here
    done();
  },
  'gpsbabel installed': function(test) {
    
    test.doesNotThrow(function() {
      gps_babel.convert('gdb', __dirname + '/test.gdb','gpx', __dirname + '/test.gpx', function(err, outputFile) {
        console.log(outputFile);
        test.done();
      });
    });
  },
};
