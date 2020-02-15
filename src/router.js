import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home'
import List from './components/List'
import Blog from './components/Blog'


Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/list',
            name: 'list',
            component: List
        },
        {
            path: '/blog',
            name: 'blog',
            component: Blog
        },
    ]
})
