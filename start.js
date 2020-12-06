const trackNum = process.argv[2];
if (!trackNum) { console.error('Usage: node start <daynumber>'); process.exit(1); }

const satriani = require('./rockstar/satriani/satriani.js');
const fs = require('fs');
const lineByLine = require('n-readlines');

const rockstar = new satriani.Interpreter();
const program = fs.readFileSync(`lyrics/${trackNum}.rock`, {encoding:'utf8', flag:'r'});
const inputByLine = new lineByLine(`inputs/${trackNum}.txt`, {encoding:'utf8', flag:'r'});
const getNextInputLineAscii = () => {
  const next = inputByLine.next();
  if (next === false) {
    return null;
  } else {
    return next.toString('ascii');
  }
}

const ast = rockstar.parse(program);
// Draw the abstract syntax tree (AST) to the console as a JSON object
//console.log(JSON.stringify(ast, null, 2))

const output = console.log
const result = rockstar.run(ast, getNextInputLineAscii, output)
if (result) console.log(result);
