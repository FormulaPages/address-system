var assert = require('assert');
describe('addressSystem', function() {
    var addressSystem = require('./lib/index');

    function run(f, c) {
      // load requirements from libraries.
      var requires = f.resolve();
      return f(c, requires );
    }
    
    it('it should be there when you require it', function () {
      assert( typeof addressSystem !== undefined, 'not there for me');
      assert( typeof addressSystem.CELLINDEX !== undefined, 'not there for me');
      assert( typeof addressSystem.INDEX2ROW !== undefined, 'not there for me');
      assert( typeof addressSystem.INDEX2COL !== undefined, 'not there for me');
      assert( typeof addressSystem.INDEX2ADDR !== undefined, 'not there for me');
      assert( addressSystem.MAX_COLS == 16384, 'max cols is wrong');
      assert( addressSystem.MAX_ROWS == 1048576, 'max rows is wrong');
    });
});
