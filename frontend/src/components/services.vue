<template>
  <div>
    <div class="max-w-5xl mx-auto py-20">
      <h1 class="text-2xl font-bold py-4">Services</h1>
      <Multiselect label="Select Services" />
    </div>
    <div class="Choose"></div>

    <div class="activetask">
      <span> Input New Service: </span>
    </div>

    <div class="formone">
      <form @submit.prevent="addService">
        <input type="text" placeholder="Add a Service" v-model="newService" />
        <button type="submit"><i class="fas fa-plus"></i></button>
      </form>
    </div>

    <div class="addbutton" @click="addService">
      <button>Add Service</button>
    </div>
  </div>
</template>

<script>
import Multiselect from './Multiselect.vue'
import { useStore } from 'vuex'
import { ref } from 'vue'
import axios from 'axios'

const apiURL = import.meta.env.VITE_ROOT_API

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'servicespage',
  components: {
    Multiselect,
  },
  setup() {
    const store = useStore()
    const newService = ref('')
    return {
      store,
      newService,
    }
  },
  mounted() {
    this.updateActiveServiceData()
  },
  methods: {
    async updateActiveServiceData() {
      try {
        const response = await axios.get(`${apiURL}/service`)
        const values = response.data.map((x) => ({ value: x._id, text: x.service, status: x.status }))
        this.store.commit('servicesModule/setServices', values)
      } catch (error) {
        console.error(error)
      }
    },
    async addService() {
      try {
        const { org } = axios.get(`${apiURL}/org`)
        const response = await axios.post(`${apiURL}/service`, {
          service: this.newService,
          status: 'active',
          org,
        })
        console.log(response.data)
      } catch (error) {
        console.error(error)
      }
      const self = this
      await self.updateActiveServiceData()
      this.newService = ''
    },
  },
}
</script>

<style lang="scss" scoped></style>