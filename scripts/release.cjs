const fs = require('fs')
const path = require('path')

const p = path.resolve('./package.json')
console.log(p)

fs.readFile(p, { encoding: 'utf-8' }, (err, data) => {
  if (err) throw err

  const package_json = JSON.parse(data)

  const version = package_json.version.split('.').map(v => parseInt(v))

  version[2] += 1

  package_json.version = version.join('.')

  const updated_package_json = JSON.stringify(package_json, null, 2)

  fs.writeFile(p, updated_package_json, { encoding: 'utf-8' }, err => {
    if (err) throw err
  })
})
