import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// Vue Router 를 보자

import Dashboard from '../components/dashboard/container'
import Contact from '../components/contact/container'

const routes =  [
    {
        components: Dashboard,
        name: "dashboard",
        path: "/dashboard",
        // child: {
        //     // child를 통해서 component를 추가해 나갈 수 있다. dashboard/... 이런 식
        // }
    },
    {
        components: Contact,
        name: "contact",
        path: "/contact"
    }
];

export default new VueRouter({
    routes // routes 와 같다. 
});

