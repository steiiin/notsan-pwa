const fs = require('fs')
const packageJson = require('./package.json')

const now = new Date()

// BUILD-INFORMATION
const buildDate = now.getDate() + '.' + now.getMonth() + '.' + now.getFullYear()
const buildVersion = packageJson.version
const saaVersion = packageJson.versionSAA

const versionModule = `
export function getBuildDate () { return '${buildDate}' }
export function getBuildVersion () { return '${buildVersion}' }
export function getSaaVersion () { return '${saaVersion}' }
`
fs.writeFileSync('./src/plugins/version.js', versionModule, { encoding: 'utf-8' })

console.log('Setup Version-info:')
console.log('-- BuildDate: ', buildDate)
console.log('-- BuildVersion: ', buildVersion)
console.log('-- SaaVersion: ', saaVersion)
console.log('')

// REVISION-INFORMATION (CONTENT)
// <!-------------------------------------------------------------------------------------------------
// {
//   "Todo": [
//     "Text"
//   ]
// }
// -------------------------------------------------------------------------------------------------->

const contentArray = []
fs.readdirSync('./src/content/')
  .forEach((file, index) => {
    const data = fs.readFileSync('./src/content/' + file, 'utf8')
    const stats = fs.statSync('./src/content/' + file)

    if (data.includes('<!-------------------------------------------------------------------------------------------------')) {
      const endofData = data.indexOf('-------------------------------------------------------------------------------------------------->')
      const metaData = data.slice(99, endofData).trim()
      const metaJson = JSON.parse(metaData)
      metaJson.name = file
      metaJson.Revision = stats.mtime.toLocaleDateString()

      contentArray.push(metaJson)
    }
  })
contentArray.sort((a, b) => a.Revision.localeCompare(b.Revision))
let contentInfo = 'CONTENT-COMPONENTS: \n'
contentInfo += '------------------- \n'

contentArray.forEach(meta => {
  const paddedName = (' - ' + meta.name).padEnd(45)
  contentInfo += paddedName + ' | ' + meta.Revision + ' \n'
  if (meta.Todo) {
    contentInfo += '      Zu Erledigen: \n'
    meta.Todo.forEach(todo => {
      contentInfo += '      - ' + todo + ' \n'
    })
  }
})
// REVISION-Datei erstellen
const revisionData = `# notsan-pwa #
### Daten-Revision ###

${contentInfo}`
fs.writeFileSync('./REVISION.md', revisionData, { encoding: 'utf-8' })
