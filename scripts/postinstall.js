const fs = require('fs')
const { resolve } = require('path')

const cwd = process.cwd()
const nodeModuleDir = resolve(cwd, 'node_modules')
const prismPkg = resolve(nodeModuleDir, 'prism-themes', 'package.json')
const prismMain = resolve(nodeModuleDir, 'prism-themes', 'index.js')

// override main: README.md from package.json
const pkg = require(prismPkg)
pkg.main = 'index.js'

fs.writeFileSync(prismPkg, JSON.stringify(pkg))
fs.writeFileSync(prismMain, `throw new Error('no direct import')`)
