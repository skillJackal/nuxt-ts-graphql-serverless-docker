import Vue from 'vue'
import ApolloClient from 'apollo-boost'
declare module 'vue/types/vue' {
    interface Vue {
        $gqlClient:ApolloClient<Cache>
    }
}