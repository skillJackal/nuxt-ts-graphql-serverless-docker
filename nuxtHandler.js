require('ts-node').register()

const binaryMimeTypes = [
    'application/javascript',
    'application/json',
    'application/octet-stream',
    'application/xml',
    'font/eot',
    'font/opentype',
    'font/otf',
    'image/jpeg',
    'image/png',
    'image/svg+xml',
    'text/comma-separated-values',
    'text/css',
    'text/html',
    'text/javascript',
    'text/plain',
    'text/text',
    'text/xml'
]

const { Nuxt } = require('nuxt')
const config = require('./nuxt.config.ts')

const nuxt = new Nuxt({ ...config, dev: false })
const sls = require('serverless-http')

module.exports.nuxt = sls((req, res) => nuxt.ready().then(() => nuxt.server.app(req, res)), {
    binary: binaryMimeTypes,
})