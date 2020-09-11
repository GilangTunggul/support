// import Vue from 'vue'
// import VueRouter from 'vue-router'
// Vue.use(VueRouter);

const routes = [
    {
        path: '/register',
        name: 'register',
        meta: {
            public: true,
        },  
        component: () => import('@/components/Register.vue'),
    },
    {
        path: '/login',
        name: "login",
        meta: {
            public:  true,
        },
        component: () => import('@/components/Login.vue'), 
        children: []
    }, 
    {
        path:'/',
        name:'navigation',
        component: () => import('@/components/Master/Navigation.vue'),
        redirect: '/home',
        children: [
            {
                path: '/home',
                name: 'home',
                component: () => import('@/components/home.vue'),
            },
            {
                path: '/myticket',
                name: 'MyTicket',
                component: () => import('@/components/MyTicket.vue'),
            },
            {
                path: '/allticket',
                name: 'AllTicket',
                component: () => import('@/components/Allticket.vue'),
            },
            {
                path: '/newticket',
                name: 'NewTicket',
                component: () => import('@/components/Newticket.vue'),
            },
            {
                path: '/profile',
                name: 'Profile',
                component: () => import('@/components/Profile.vue'),
            },
            {
                path: '/settings',
                name: 'Settings',
                component: () => import('@/components/Settings.vue'),
            },
        ]
    },
    {
        path: '*',
        name: 'NotFound',
        component: () => import('@/components/NotFound.vue'),
    }
];

export default routes;
//navigate vuejs