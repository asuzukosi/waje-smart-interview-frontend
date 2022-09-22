<script setup>
import axios from 'axios';
import moment from 'moment'

import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
import { ref } from 'vue'

const books = ref([])

const getBooks = async () => {
  try {
    const { data } = await axios.get(`http://waje-smart-backend.herokuapp.com/api/books/`)
    console.log('data', data);
    books.value = data
  } catch (error) {
    console.log({error})
  }
}

getBooks();


</script>

<template>
  
  <WelcomeItem v-for="book in books">
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>{{book.name}} by {{book.author.first_name}} {{book.author.last_name}}</template>

    Click 
    <RouterLink :to="`/book/${book.id}`"> 
    here
    </RouterLink>

    to get more information about the book 
    <h6>{{book.created_at}}</h6>
  </WelcomeItem>

</template>
