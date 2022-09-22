<script setup>
  import axios from 'axios';
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'


  const route = useRouter()
  console.log(route)
  const book_name = ref()
  const isbn = ref()
  const author = ref()
  const authors = ref([])
  const isLoading = ref(true)

  const getAuthors = async () => {
  try {
    const { data } = await axios.get(`http://waje-smart-backend.herokuapp.com/api/authors/`)
    console.log('data', data);
    authors.value = data
    isLoading.value = false
  } catch (error) {
    console.log({error})
  }
}

const createBook = async () => {
  try{
    const data = {
      "name": book_name.value,
      "isbn": isbn.value,
      "author": author.value,
    }
    const response = await axios.post("http://waje-smart-backend.herokuapp.com/api/books/", data)
    console.log(response)
    route.push("/")


  }catch(error){
    console.log({error})
  }
}

getAuthors();
  
</script>
<template>
    <div>
      <h1>Add Book</h1>
      <form v-if="!isLoading" @submit.prevent="createBook" method="post">

        <div>
          <h4>Book Name</h4>
          <input v-model="book_name" type="text" name="name" id="name">
        </div>
        <div>
          <h4>ISBN</h4>
          <input v-model="isbn" type="text" name="isbn" id="isbn">
        </div>
        <div>
          <h4>AUTHOR</h4>
          <select v-model="author" name="author" id="author">
            <option v-for="(author, i) in authors" :value="author.id" :key="i">{{author.first_name}}&nbsp;{{author.last_name}}</option>
          </select>
        </div>
        <button type="submit">Create Book</button>
      </form>
    </div>
  </template>
  
  <style>
  @media (min-width: 1024px) {
    .about {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }
  </style>
  