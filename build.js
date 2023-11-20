const fs = require('fs');
const packageJson = require('./package.json');

let now = new Date();

const buildDate = now.getDate()+'.'+now.getMonth()+'.'+now.getFullYear();
const buildVersion = packageJson.version
const saaVersion = packageJson.versionSAA

let versionModule = `
export function getBuildDate() { return "${buildDate}" }
export function getBuildVersion() { return "${buildVersion}" }
export function getSaaVersion() { return "${saaVersion}" }
`;
fs.writeFileSync('./src/plugins/version.js', versionModule, { encoding: 'utf-8' });

console.log('Setup Version-info:');
console.log('-- BuildDate: ', buildDate);
console.log('-- BuildVersion: ', buildVersion);
console.log('-- SaaVersion: ', saaVersion);
console.log('')