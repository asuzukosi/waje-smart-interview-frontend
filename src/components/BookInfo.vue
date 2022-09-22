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

    const getBook = async () => {
  try {
    const { data } = await axios.get(`http://waje-smart-backend.herokuapp.com/api/books/` + route.params.id)
    book.value = data
    isLoading.value = false
  } catch (error) {
    console.log({error})
  }
}

getBook();
    </script>
    
    <template>
    <div v-if="isLoading">Getting data</div>
    <div v-else>
      <div class="about">
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
    </div>
    </div>    
    </template>
    