<script>
import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import { useStore, mapGetters } from 'vuex'
import axios from 'axios'
const apiURL = import.meta.env.VITE_ROOT_API

export default {
  setup() {
    const store = useStore() // Move the store initialization here
    return { v$: useVuelidate({ $autoDirty: true }), store }
  },
  data() {
    return {
      // removed unnecessary extra array to track services
      event: {
        name: '',
        services: [],
        date: '',
        address: {
          line1: '',
          line2: '',
          city: '',
          county: '',
          zip: '',
        },
        description: '',
      },
    }
  },
  methods: {
    async handleSubmitForm() {
      // Checks to see if there are any errors in validation
      const isFormCorrect = await this.v$.$validate()
      // If no errors found. isFormCorrect = True then the form is submitted
      if (isFormCorrect) {
        console.log(this.store, 'here')
        this.store.commit('servicesModule/setForm', this.event)
        axios
          .post(`${apiURL}/events`, this.event)
          .then(() => {
            alert('Event has been added.')
            this.$router.push({ name: 'findevents' })
          })
          .catch((error) => {
            console.log(error)
          })
      }
    },
    valueChanging() {
      console.log(this.event)
    },
  },
  computed: {
    ...mapGetters('servicesModule', ['activeServices']),
  },
  // sets validations for the various data properties
  validations() {
    return {
      event: {
        name: { required },
        date: { required },
      },
    }
  },
}
</script>
<template>
  <main>
    <div>
      <h1 class="font-bold text-4xl text-red-700 tracking-widest text-center mt-10">Create New Event</h1>
    </div>
    <div class="px-10 py-20">
      <!-- @submit.prevent stops the submit event from reloading the page-->
      <form @submit.prevent="handleSubmitForm">
        <!-- grid container -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
          <h2 class="text-2xl font-bold">Event Details</h2>

          <!-- form field -->
          <div class="flex flex-col">
            <label class="block">
              <span class="text-gray-700">Event Name</span>
              <span style="color: #ff0000">*</span>
              <input
                type="text"
                @input="valueChanging"
                class="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                v-model="event.name"
              />
              <span class="text-black" v-if="v$.event.name.$error">
                <p class="text-red-700" v-for="error of v$.event.name.$errors" :key="error.$uid">
                  {{ error.$message }}!
                </p>
              </span>
            </label>
          </div>

          <!-- form field -->
          <div class="flex flex-col">
            <label class="block">
              <span class="text-gray-700">Date</span>
              <span style="color: #ff0000">*</span>
              <input
                class="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                v-model="event.date"
                type="date"
              />
              <span class="text-black" v-if="v$.event.date.$error">
                <p class="text-red-700" v-for="error of v$.event.date.$errors" :key="error.$uid">
                  {{ error.$message }}!
                </p>
              </span>
            </label>
          </div>

          <div></div>
          <div></div>
          <!-- form field -->
          <div class="flex flex-col">
            <label class="block">
              <span class="text-gray-700">Description</span>
              <textarea
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                rows="2"
              ></textarea>
            </label>
          </div>

          <div></div>
          <div></div>
          <div></div>
          <!-- form field -->
          <div class="flex flex-col grid-cols-3">
            <label>Services Offered at Event</label>

            <div v-for="item in activeServices" :key="item?.value">
              <label :for="item.value" class="inline-flex items-center">
                <input
                  @input="valueChanging"
                  type="checkbox"
                  :id="item.value"
                  :value="item.text"
                  v-model="event.services"
                  class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50"
                  notchecked
                />
                <span class="ml-2">{{ item.text }}</span>
              </label>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="service">
            <div class="title">
              <h1>Choose a service</h1>
            </div>
          </div>
        </div>
        <!---                   <div class="Choose">
                      <ul>
                        <li>
                          <button>Family Support </button>
                          <button><i class="far fa-trash-alt"></i></button>

                        </li>
                        <li>
                          <button>Adult Education </button>
                          <button><i class="far fa-trash-alt"></i></button>

                        </li>
                        <li>
                          <button>Youth Services Program </button>
                          <button><i class="far fa-trash-alt"></i></button>

                        </li>
                        <li>
                          <button>Early childhoodEducation </button>
                          <button><i class="far fa-trash-alt"></i></button>

                        </li>
                      </ul>
                    </div>
                    <div class="addbutton">
                      <button>Add Service</button>
                    </div>
                    
                    <div class="activetask">
                      <span> active number of tasks: </span>

                    </div> 

      <div class="formone">
        <input type="text" placeholder="Add a Service" />
        <button><i class="fas fa-plus"></i></button>
      </div>  -->
        <!-- grid container -->
        <div class="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
          <h2 class="text-2xl font-bold">Address</h2>
          <!-- form field -->
          <div class="flex flex-col">
            <label class="block">
              <span class="text-gray-700">Address Line 1</span>
              <input
                type="text"
                class="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder
                v-model="event.address.line1"
              />
            </label>
          </div>
          <!-- form field -->
          <div class="flex flex-col">
            <label class="block">
              <span class="text-gray-700">Address Line 2</span>
              <input
                type="text"
                class="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder
                v-model="event.address.line2"
              />
            </label>
          </div>
          <!-- form field -->
          <div class="flex flex-col">
            <label class="block">
              <span class="text-gray-700">City</span>
              <input
                type="text"
                class="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder
                v-model="event.address.city"
              />
            </label>
          </div>
          <div></div>
          <!-- form field -->
          <div class="flex flex-col">
            <label class="block">
              <span class="text-gray-700">County</span>
              <input
                type="text"
                class="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder
                v-model="event.address.county"
              />
            </label>
          </div>
          <!-- form field -->
          <div class="flex flex-col">
            <label class="block">
              <span class="text-gray-700">Zip Code</span>
              <input
                type="text"
                class="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder
                v-model="event.address.zip"
              />
            </label>
          </div>
        </div>

        <div class="flex justify-between mt-10 mr-20">
          <button class="bg-red-700 text-white rounded" type="submit">Add New Event</button>
        </div>
      </form>
    </div>
  </main>
</template>
