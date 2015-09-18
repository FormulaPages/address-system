var assert = require("assert");
describe('formulaCompiler', function() {
  describe('#constructor()', function () {
    var addressSystem = require('./lib/index');

    function run(f, c) {
      // load requirements from libraries.
      var requires = f.resolve();
      return f(c, requires );
    }
    
    it('it should be there when you require it', function () {
      assert( typeof addressSystem !== undefined, "not there for me");
      assert( typeof addressSystem.CELLINDEX !== undefined, "not there for me");
      assert( typeof addressSystem.INDEX2ROW !== undefined, "not there for me");
      assert( typeof addressSystem.INDEX2COL !== undefined, "not there for me");
      assert( typeof addressSystem.INDEX2ADDR !== undefined, "not there for me");
      assert( addressSystem.MAX_COLS == 16384, "max cols is wrong");
      assert( addressSystem.MAX_ROWS == 1048576, "max rows is wrong");
    });

    it('it should have a compile function', function () {
      assert( typeof compile !== undefined, "not there for me");
    });

    it('it should generate code like...', function() {

      assert( compile('2=2').code === "requires.EQ(2, 2)", "EQ" );
      assert( compile('2<>2').code === "requires.NE(2, 2)", "NE" );
      assert( compile('2>2').code === "requires.GT(2, 2)", "GT" );
      assert( compile('2>=2').code === "requires.GTE(2, 2)", "GTE" );
      assert( compile('2<2').code === "requires.LT(2, 2)", "LT" );
      assert( compile('2<=2').code === "requires.LTE(2, 2)", "LTE" );
      assert( compile('2^2').code === "requires.POWER(2, 2)", "POWER. " );
      assert( compile('2+2').code === "requires.ADD(2, 2)", "ADD" );
      assert( compile('2-2').code === "requires.SUBTRACT(2, 2)", "SUBTRACT" );
      assert( compile('2*2').code === "requires.MULTIPLY(2, 2)", "MULTIPLY" );
      assert( compile('2/2').code === "requires.DIVIDE(2, 2)", "DIVIDE" );
      assert( compile('"2" & "2"').code === "requires.CONCATENATE('2', '2')", "CONCATENATE" );

    });

    it('it should run a simple comparision', function () {
      var f = compile('2=2');
      assert(run(f), '2 should be 2');
    });

    it('it should run README example', function() {
      var data = { SuccessText: "Works!" };
      var context = { get: function(k) { return data[k]; } };
      var myFormula = compiler.compile('IF(TRUE, SuccessText, "Broken")');
      var result = myFormula(context)
        
      assert(result === "Works!", "Does not work. Result: " + result);
    });
    
    it('it should do basic math', function () {
      var f = compile('1+1=4-2');

      assert(run(f), '1+1=4-2 should be true');
      
    });

    it('it should eat arrays for breakfast', function () {
      var f = compile('{1,1,1;2,2}'),
          result = run(f);

      assert(result.length = 2, 'Should have two items.');
      assert(result[0].length = 3, 'First item should have three items.');
      assert(result[1].length = 3, 'Second item should have three items.');
    });
  });
});
