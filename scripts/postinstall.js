const fs = require('fs')
const { resolve } = require('path')

const cwd = process.cwd()
const nodeModuleDir = resolve(cwd, 'node_modules')
const prismPkg = resolve(nodeModuleDir, 'prism-themes', 'package.json')

// remove main: README.md from package.json
const pkg = require(prismPkg)
delete pkg.main

fs.writeFileSync(prismPkg, JSON.stringify(pkg))
