import { createRouter, createWebHistory } from 'vue-router'

function requireAuth(to, from, next) {
  const access = localStorage.getItem('access')
  if (!access) {
    next({ name: 'loginpage' })
  } else {
    next()
  }
}

// make all paths and names lowercase for consistency
const routes = [
  {
    path: '/',
    props: true,
    beforeEnter: requireAuth,
    component: () => import('../components/homePage.vue'),
  },
  {
    path: '/loginpage',
    name: 'loginpage',
    component: () => import('../components/loginPage.vue'),
  },
  {
    path: '/intakeform',
    name: 'intakeform',
    props: true,
    beforeEnter: requireAuth,
    component: () => import('../components/intakeForm.vue'),
  },
  {
    path: '/findclient',
    name: 'findclient',
    component: () => import('../components/findClient.vue'),
  },
  {
    path: '/updateclient/:id',
    name: 'updateclient',
    props: true,
    beforeEnter: requireAuth,
    component: () => import('../components/updateClient.vue'),
  },
  {
    path: '/eventform',
    name: 'eventform',
    beforeEnter: requireAuth,
    component: () => import('../components/eventForm.vue'),
  },
  {
    path: '/findevents',
    name: 'findevents',
    beforeEnter: requireAuth,
    component: () => import('../components/findEvents.vue'),
  },
  {
    path: '/eventdetails/:id',
    name: 'eventdetails',
    props: true,
    beforeEnter: requireAuth,
    component: () => import('../components/eventDetails.vue'),
  },
  {
    path: '/services',
    name: 'services',
    props: true,
    beforeEnter: requireAuth,
    component: () => import('../components/services.vue'),
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router
