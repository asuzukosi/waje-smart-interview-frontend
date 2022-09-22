<script setup>
    import WelcomeItem from './WelcomeItem.vue'
    import DocumentationIcon from './icons/IconDocumentation.vue'
    import ToolingIcon from './icons/IconTooling.vue'
    import EcosystemIcon from './icons/IconEcosystem.vue'
    import CommunityIcon from './icons/IconCommunity.vue'
    import SupportIcon from './icons/IconSupport.vue'
    import axios from 'axios';


    import { useRoute } from 'vue-router'
    import { ref, watch } from 'vue'

    const route = useRoute()
    const book = ref()
    const isLoading = ref(true)
    const input_book_name = ref()
    const input_book_isbn =ref()


    const getBook = async () => {
  try {
    const { data } = await axios.get(`http://waje-smart-backend.herokuapp.com/api/books/` + route.params.id)
    book.value = data

    input_book_isbn.value = data.isbn
    input_book_name.value = data.name

    isLoading.value = false
  } catch (error) {
    console.log({error})
  }
}

  const updateBook = async () =>{
    const data = {
      "name": input_book_name.value,
      "isbn": input_book_isbn.value
    }
    try{
      const response = await axios.patch('http://waje-smart-backend.herokuapp.com/api/books/'+ route.params.id + "/", data)
      console.log(response)
      isLoading.value = true
      getBook()
      
    }catch(error){
      console.log({error})
    }
  }

getBook();
    </script>
    
    <template>
    <div v-if="isLoading">Getting data</div>
    <div v-else>
      <div>
      <WelcomeItem>
        <template #icon>
          <DocumentationIcon />
        </template>
        <template #heading>Book Info</template>
        <h4>NAME : {{book.name}}</h4>
        <h4>ISBN: {{book.isbn}}</h4>
        <h4>CREATED AT: {{book.created_at}}</h4>
        <h4>UPDATED AT: {{book.updated_at}}</h4>
      </WelcomeItem>
    
      <WelcomeItem>
        <template #icon>
          <CommunityIcon />
        </template>
        <template #heading>Author</template>
        <h4>FIRST NAME : {{book.author.first_name}}</h4>
        <h4>LAST NAME: {{book.author.last_name}}</h4>
      </WelcomeItem>
      <br/>
      <h2>Update Book</h2>
      <br/>
      <form method="post" @submit.prevent="updateBook">
        <h5>NAME</h5>
        <input v-model="input_book_name" type="text" name="name" id="name">
        <h5>ISBN</h5>
        <input v-model="input_book_isbn" type="text" name="name" id="name">
        <br/>
        <button type="submit">
          Update Book
        </button>
      </form>
    </div>
    </div>    
    </template>
    