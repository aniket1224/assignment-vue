import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router';
import { createStore } from 'vuex'
import axios from 'axios';
import UserList from "./components/UserList.vue";
import UserItem from "./components/UserItem.vue";
import App from './App.vue'

import './assets/main.css'


const routes = [
    {path: '/', component: UserList},
    {path: '/useritem', component: UserItem}
];

const router  = createRouter({
    history: createWebHashHistory(),
    routes,
})

// Create a new store instance.
const store = createStore({
    state () {
      return {
        users: [],
        repository:[]
      }
    },
    mutations: {
        setUserList(state, payload) {
            state.users = payload;
        },
        setRepository(state, payload) {
            state.repository = payload
        }
    },
    actions: {
        addUserList() {
            return axios.get('https://api.github.com/users?per_page=10').then((res) => {
                store.commit("setUserList", res.data)
            }).catch((error) => {
                throw error;
            });
        },
        addUserRepos() {
            return axios.get('https://api.github.com/users/mojombo/repos').then((res) => {
                store.commit("setRepository", res.data)
                console.log("user iitem", res.data);
            }).catch((error) => {
                throw error;
            })
        }
    },
    getters: {
        getUserList: (state) => state.users,
        getRepository: (state) => state.repository
    }
  })

const app = createApp(App)

app.use(router)
app.use(store)
app.mount('#app')
