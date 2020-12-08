const trackNum = process.argv[2]
if (!trackNum) { console.error('Usage: node start <daynumber>'); process.exit(1) }

const satriani = require('./rockstar/satriani/satriani.js')
const path = require('path')
const fs = require('fs')
const lineByLine = require('n-readlines')

const rockstar = new satriani.Interpreter()
const source = path.normalize(
  `${
    fs.existsSync(path.normalize(`lyrics/${trackNum}.rock`))
    ? 'lyrics'
    : 'contracts'
  }/${trackNum}.rock`)
const program = fs.readFileSync(source, { encoding: 'utf8', flag: 'r' })
const inputByLine = new lineByLine(
  path.normalize(`music/${trackNum}.txt`),
  { encoding: 'utf8', flag: 'r' }
)
const getNextInputLineAscii = () => {
  const next = inputByLine.next()
  if (next === false) {
    return null
  } else {
    return next.toString('ascii')
  }
}

const ast = rockstar.parse(program)
// Draw the abstract syntax tree (AST) to the console as a JSON object
// console.log(JSON.stringify(ast, null, 2))

const output = console.log
const result = rockstar.run(ast, getNextInputLineAscii, output)
if (result) console.log(result)
