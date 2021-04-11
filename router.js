import Router from 'vue-router'
import Vue from 'vue'
import Index from '~/pages/index.vue'

Vue.use(Router)

const Route1 = () =>
  import(/*webpackChunkName: 'route1'*/ '~/pages/route1.vue').then(
    (chunk) => chunk.default || chunk
  )
const Test = () =>
  import(/*webpackChunkName: 'test'*/ '~/pages/test.vue').then(
    (chunk) => chunk.default || chunk
  )

export const createRouter = () => {
  return new Router({
    mode: 'history',
    base: '/d/snack',
    routes: [
      {
        path: '/',
        component: Index,
      },
      {
        path: '/yyy',
        component: Route1,
      },
      {
        path: '/test',
        name: 'test',
        component: Test,
      },
      // {
      //   path: '*',
      //   component: () =>
      //     import(/*webpackChunkName: '404'*/ '~/pages/404.vue').then(
      //       (chunk) => chunk.default || chunk
      //     ),
      // },
    ],
  })
}
