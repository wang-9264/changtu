import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Index from '../views/index.vue'
import Discover from '../views/discover.vue'
import Travel from '../views/travel.vue'
import Center from '../views/center.vue'
import Recommended from '../views/discover/recommended.vue'
import FocusOn from '../views/discover/focusOn.vue'
import City from '../views/discover/city.vue'
import Login from '../views/login.vue'
import Czdx from '../views/discover/czdx.vue'
import Wdj from '../views/discover/wdj.vue'
import Blblp from '../views/discover/blblp.vue'
// import Ctsj from '../views/discover/ctsj.vue'
import HotAnswer from '../views/discover/wdj/hotAnswer.vue'
import ToAnswer from '../views/discover/wdj/ToAnswer'
import Lpal from '../views/discover/lpal.vue'
import Userset from '../views/login/userset.vue'
import Guide from '../views/login/guide.vue'
import AboutTrip from '../views/login/abouttrip.vue'
import StartCity from '../views/index/startcity.vue'
import ToCity from '../views/index/tocity.vue'
import Isday from '../views/index/isday.vue'
import Lottery from '../views/index/lottery.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/index',
    component: Index
  },
  {
    path: '/Startcity',
    component: StartCity
  },
  {
    path: '/Tocity',
    component: ToCity
  },
  {
    path: '/Isday',
    component: Isday
  },
  { path: '/lotte',
    component: Lottery
  },
  {
    path: '/discover',
    component: Discover,
    children: [
      {
        path: 'recommended',
        component: Recommended
      },
      {
        path: 'focusOn',
        component: FocusOn,
        redirect: '/login'
      },
      {
        path: 'city',
        component: City,
        redirect: '/login'
      },
      {
        path: '/discover',
        redirect: '/discover/recommended'
      }
    ]
  },
  {
    path: '/travel',
    component: Travel,
    redirect: '/login'
  },
  {
    path: '/center',
    component: Center
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/userset',
    component: Userset
  },
  {
    path: '/guide',
    component: Guide
  },
  {
    path: '/abouttrip',
    component: AboutTrip
  },
  {
    path: '/czdx',
    component: Czdx
  },
  {
    path: '/lpal',
    component: Lpal
  },
  {
    path: '/wdj',
    component: Wdj,
    children: [
      {
        path: 'hotAnswer',
        component: HotAnswer
      },
      {
        path: 'ToAnswer',
        component: ToAnswer
      },
      {
        path: '/wdj',
        redirect: '/wdj/hotAnswer'
      }
    ]
  },
  {
    path: '/blblp',
    component: Blblp
  },
  {
    path: '/',
    redirect: '/index'
  }
]

const router = new VueRouter({
  mode: 'hash',
  routes
})

export default router
