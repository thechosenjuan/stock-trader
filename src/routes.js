import Home from './components/Home.vue';
import Portfolio from './components/portfolio/Portfolio.vue';
import Stocks from './components/stocks/Stocks.vue';

// const Portfolio = resolve => {
//     require.ensure(['./components/portfolio/Portfolio.vue'], () => {
//         resolve(require('./components/portfolio/Portfolio.vue'))
//     }, 'portfolio')
// }

// const PortfolioStock = resolve => {
//     require.ensure(['./components/portfolio/Stock.vue'], () => {
//         resolve(require('./components/portfolio/Stock.vue'))
//     }, 'portfolio')
// }

// const Stocks = resolve => {
//     require.ensure(['./components/stocks/Stocks.vue'], () => {
//         resolve(require('./components/stocks/Stocks.vue'))
//     }, 'stocks')
// }

// const IndividualStock = resolve => {
//     require.ensure(['./components/stocks/Stock.vue'], () => {
//         resolve(require('./components/stocks/Stock.vue'))
//     }, 'stocks')
// }

export const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: Portfolio,
  },
  {
    path: '/stocks',
    name: 'stocks',
    component: Stocks,
  },
];
