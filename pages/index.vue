<template>
    <v-card max-width="800">
        <h1>REST-API</h1>
        <span class="hello-world">{{helloWorldMsg}}</span><br/>
        <v-btn @click="getHelloWorld()">Get Hello World</v-btn><br/>
        <span>SSR: {{helloUniverseSSRMsg}}</span><br/>
        <hr/>
        <h1>GraphQL-API</h1>
        <v-text-field label="Type name" v-model="name" outlined dense/>
        <span class="hello-world">{{helloGraphQLMsg}}</span><br/>
        <v-btn @click="sayHello()">Say Hello</v-btn><br/>
        <span>SSR: {{helloUniverseGraphQLSSRMsg}}</span>
    </v-card>
</template>

<script lang="ts">
    import {Component, Vue} from 'nuxt-property-decorator'
    import { gql } from 'apollo-boost'

    @Component
    export default class Index extends Vue {
        helloWorldMsg:String = 'click on the button below'
        helloGraphQLMsg:String = 'enter text and click on the button below'
        name:String = ''

        async asyncData({ $axios, $gqlClient }:any) {
            const helloUniverseSSRMsg = (await $axios.$get('/hello/universe')).msg
            
            // ------------

            const helloUniverseGraphQLSSRMsg = (await $gqlClient.query({
                query: gql`{hello(name:"Universe from GraphQL SSR")}`
            })).data.hello

            return { helloUniverseSSRMsg, helloUniverseGraphQLSSRMsg}
        }

        getHelloWorld() {
            this.$axios.$get('/hello/world').then((data) => {
                this.helloWorldMsg = data.msg
            })
        }

        sayHello() {
            this.$gqlClient.query({
                query: gql`{hello(name:"${this.name}")}`
            }).then((result:any) => {
                this.helloGraphQLMsg = result.data.hello
            })
        }

    }
</script>

<style lang="scss" scoped>
    .hello-world {
        color: green;
    }
</style>