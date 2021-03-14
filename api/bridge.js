require('ts-node').register();

const sls = require('serverless-http')

const app = require('./app.ts')

module.exports.api = sls((req, res) => {
    return app(req, res)
})