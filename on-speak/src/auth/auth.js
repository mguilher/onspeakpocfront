import auth0 from 'auth0-js'
import Vue from 'vue'

import { domain, clientId, audience } from "../../auth_config.json";

// exchange the object with your own from the setup step above.
let webAuth = new auth0.WebAuth({
    domain: domain,
    clientID: clientId,
    // make sure this line is contains the port: 8080
    redirectUri: 'http://localhost:8080/callback',
    // we will use the api/v2/ to access the user information as payload
    audience: audience,
    responseType: 'token id_token',
    scope: 'openid profile email' // define the scopes you want to use
})

let auth = new Vue({
    computed: {
        token: {
            get: function () {
                return localStorage.getItem('id_token')
            },
            set: function (id_token) {
                localStorage.setItem('id_token', id_token)
            }
        },
        accessToken: {
            get: function () {
                return localStorage.getItem('access_token')
            },
            set: function (accessToken) {
                localStorage.setItem('access_token', accessToken)
            }
        },
        expiresAt: {
            get: function () {
                return localStorage.getItem('expires_at')
            },
            set: function (expiresIn) {
                let expiresAt = JSON.stringify(expiresIn * 1000 + new Date().getTime())
                localStorage.setItem('expires_at', expiresAt)
            }
        },
        user: {
            get: function () {
                return JSON.parse(localStorage.getItem('user'))
            },
            set: function (user) {
                localStorage.setItem('user', JSON.stringify(user))
            }
        },
        isTeacher: {
            get: function () {
                return localStorage.getItem('teacher')
            },
            set: function (teacher) {
                localStorage.setItem('teacher', teacher)
            }
        },
    },
    methods: {
        login(param) {
            webAuth.authorize({
                appState: {
                    isTeacher:param
                }
              })
        },
        logout() {
            return new Promise((resolve, reject) => {
                try {
                    localStorage.removeItem('access_token')
                    localStorage.removeItem('id_token')
                    localStorage.removeItem('expires_at')
                    localStorage.removeItem('user')
                    localStorage.removeItem('teacher')
                    webAuth.logout({
                        returnTo: 'http://localhost:8080', // Allowed logout URL listed in dashboard
                        clientID: clientId, // Your client ID
                    })
                    resolve()
                } catch (e) { reject() }
            })
        },
        isAuthenticated() {
            return new Date().getTime() < this.expiresAt
        },
        handleAuthentication() {
            return new Promise((resolve, reject) => {
                webAuth.parseHash((err, authResult) => {

                    if (authResult && authResult.accessToken && authResult.idToken) {
                        this.expiresAt = authResult.expiresIn
                        this.accessToken = authResult.accessToken
                        this.token = authResult.idToken
                        this.user = authResult.idTokenPayload
                        this.isTeacher = authResult.appState.isTeacher
                        console.log(authResult.appState)
                        resolve()

                    } else if (err) {
                        this.logout()
                        reject(err)
                    }

                })
            })
        },
        clear() {
            localStorage.removeItem('access_token')
            localStorage.removeItem('id_token')
            localStorage.removeItem('expires_at')
            localStorage.removeItem('user')
            localStorage.removeItem('teacher')
        }
    }
})

export default {
    install: function (Vue) {
        Vue.prototype.$auth = auth
    }
}