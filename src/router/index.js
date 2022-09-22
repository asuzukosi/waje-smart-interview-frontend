import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BookInfo from '../components/BookInfo.vue'
import AddAuthor from '../components/AddAuthor.vue'
import AddBook from '../components/AddBook.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/add_book',
      name: 'addBook',
      component: AddBook
      
    },
    {
      path: '/add_author',
      name: 'addAuthor',
      component: AddAuthor
      
    },
    {
      path: '/book/:id',
      name: 'bookInfo',
      component: BookInfo
      
    },

  ]
})

export default router
