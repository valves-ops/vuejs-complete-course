import Container from './layouts/default.vue'
import Home from './pages/Home.vue'
import Stocks from './pages/Stocks.vue'
import Portfolio from './pages/Portfolio.vue'

export default [
    { path: '/', component: Container,
      children: [
        { path: '', redirect: '/home' },
          { path: 'home',      component: Home },
          { path: 'stocks',    component: Stocks },
          { path: 'portfolio', component: Portfolio }
      ]

    }
]