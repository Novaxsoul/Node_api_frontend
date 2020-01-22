
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '/', name: 'ListBooks', component: () => import('pages/Book/ListBooks.vue') },
      { path: '/new', name: 'NewBook', component: () => import('pages/Book/NewBook.vue') },
      { path: '/edit/:bookId', name: 'EditBook', component: () => import('pages/Book/EditBook.vue'), props: true },
      { path: '/delete/:bookId', name: 'DeleteBook', component: () => import('pages/Book/DeleteBook.vue'), props: true }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
