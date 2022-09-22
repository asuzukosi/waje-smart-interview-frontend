<script setup>
  import axios from 'axios';
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'


  const route = useRouter()

  const first_name = ref()
  const last_name = ref()


  const createAuthor = async () => {
  try{
    const data = {
      "first_name": first_name.value,
      "last_name": last_name.value
    }
    const response = await axios.post("http://waje-smart-backend.herokuapp.com/api/authors/", data)
    console.log(response)
    route.push("/")


  }catch(error){
    console.log({error})
  }
}
  
</script>
<template>
    <div>
      <h1>Add Author</h1>
      <form @submit.prevent="createAuthor" method="post">

        <div>
          <h4>First Name</h4>
          <input v-model="first_name" type="text" name="first_name" id="first_name">
        </div>
        <div>
          <h4>Last Name</h4>
          <input v-model="last_name" type="text" name="last_name" id="last_name">
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
  