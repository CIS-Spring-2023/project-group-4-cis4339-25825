<script>
import axios from 'axios'
import { mapGetters, useStore } from 'vuex'
const apiURL = import.meta.env.VITE_ROOT_API

export default {
  name: 'App',
  data() {
    return {
      orgName: 'Dataplatform',
    }
  },
  computed: {
    ...mapGetters('servicesModule', ['isEditor', 'isViewer', 'isAnon']),
  },
  setup() {
    const store = useStore()
    return { store }
  },
  created() {
    const token = localStorage.getItem('token')
    const access = localStorage.getItem('access')

    if (token && access) {
      this.store.commit('servicesModule/setToken', { token, access })
    }
    axios.get(`${apiURL}/org`).then((res) => {
      this.orgName = res.data.name
    })
  },
  methods: {
    logout() {
      this.store.commit('servicesModule/removeToken')
      this.$router.push('/loginpage')
    },
  },
}
</script>
<template>
  <main class="flex flex-row">
    <div id="_container" class="h-screen">
      <header class="w-full">
        <section class="text-center">
          <img class="m-auto" src="@\assets\DanPersona.svg" />
        </section>
        <nav class="mt-10">
          <ul class="flex flex-col gap-4">
            <li v-if="isEditor || isViewer">
              <router-link to="/">
                <span style="position: relative; top: 6px" class="material-icons">dashboard</span>
                Dashboard
              </router-link>
            </li>
            <li v-if="isAnon || isViewer">
              <router-link to="/loginpage">
                <span style="position: relative; top: 6px" class="material-icons">dashboard</span>
                Login
              </router-link>
            </li>

            <li v-if="isEditor">
              <router-link to="/intakeform">
                <span style="position: relative; top: 6px" class="material-icons">people</span>
                Client Intake Form
              </router-link>
            </li>
            <li v-if="isEditor">
              <router-link to="/eventform">
                <span style="position: relative; top: 6px" class="material-icons">event</span>
                Create Event
              </router-link>
            </li>
            <li v-if="isEditor || isViewer">
              <router-link to="/findclient">
                <span style="position: relative; top: 6px" class="material-icons">search</span>
                Find Client
              </router-link>
            </li>
            <li v-if="isEditor || isViewer">
              <router-link to="/findevents">
                <span style="position: relative; top: 6px" class="material-icons">search</span>
                Find Event
              </router-link>
            </li>
            <li v-if="isEditor">
              <router-link to="/services">
                <span style="position: relative; top: 2px" class="material-icons text-base">list</span>
                Services
              </router-link>
            </li>
            <li v-if="isEditor || isViewer" @click="logout">
              <router-link to="/">
                <span style="position: relative; top: 2px" class="material-icons text-base">logout</span>
                Log Out
              </router-link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
    <div class="grow w-4/5">
      <section
        class="justify-end items-center h-24 flex"
        style="background: linear-gradient(250deg, #c8102e 70%, #efecec 50.6%)"
      >
        <h1 class="mr-20 text-3xl text-white">{{ this.orgName }}</h1>
      </section>
      <div>
        <router-view></router-view>
      </div>
    </div>
  </main>
</template>
<style>
#_container {
  background-color: #c8102e;
  color: white;
  padding: 18px;
}
</style>
