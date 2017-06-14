const parse = require('css/lib/parse');
const Compiler = require('css/lib/stringify/identity');

exports.beauty = function(source, options) {
  const obj = parse(source, options);
  const compiler = new Compiler(options);

  return compiler.compile(obj);
};
