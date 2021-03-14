const MY_ENV = process.env.MY_ENV

const apiURLs = new Object()
apiURLs['dev'] = 'http://localhost:5000/api'
apiURLs['sls'] = 'http://localhost:3000/api'
apiURLs['docker'] = 'http://nginx:8080/api'

const browserApiURLs = new Object()
browserApiURLs['dev'] = 'http://localhost:5000/api'
browserApiURLs['sls'] = 'http://localhost:3000/api'
browserApiURLs['docker'] = 'http://localhost:8080/api'

const apiBaseURL = (MY_ENV) ? apiURLs[MY_ENV] : '/api'
const browserApiBaseURL = (MY_ENV) ? browserApiURLs[MY_ENV] : '/api'

export default {
    telemetry: false,
    buildModules: ['@nuxt/typescript-build', '@nuxtjs/vuetify'],
    modules: ['@nuxtjs/axios'],
    plugins: ['~/plugins/gqlClient'],
    server: {
        port: 3000
    },
    env: {
        apiBaseURL: apiBaseURL,
        browserApiBaseURL: browserApiBaseURL
    },
    axios: {
        baseURL: apiBaseURL,
        browserBaseURL: browserApiBaseURL
    },
    vuetify: {
        customVariables: ['~/assets/variables.scss']
    },
}