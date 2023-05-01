export default {
    namespaced: true,
    state: {
      services: [],
      events: [],
      login: {
        token: null,
        access: null,
      },
    },
    mutations: {
      addServices: function (state, values) {
        values.forEach((value) => {
          if (state.services.every((x) => x.value !== value.value)) {
            state.services.push(value)
          }
        })
      },
      setServices: function (state, services) {
        state.services = services
      },
      activateService: function (state, service) {
        const index = state.services.findIndex((s) => s.value === service.value)
        if (index !== -1) {
          state.services[index].status = 'active'
        }
      },
      deactiveService: function (state, service) {
        const index = state.services.findIndex((s) => s.value === service.value)
        if (index !== -1) {
          state.services[index].status = 'inactive'
        }
      },
      deleteItem: function (state, item) {
        if (state.services.includes(item)) {
          state.services.splice(state.services.indexOf(item), 1)
        }
      },
      setToken: function (state, { token, access }) {
        console.info('Token set', token)
        console.info('Access set', access)
        state.login.token = token
        state.login.access = access
        localStorage.setItem('token', token)
        localStorage.setItem('access', access)
      },
      removeToken: function (state) {
        state.login.token = null
        state.login.access = null
        localStorage.removeItem('token')
        localStorage.removeItem('access')
      },
      setForm: function (state, formData) {
        state.events.push(formData)
      },
    },
    getters: {
      activeServices(state) {
        return state.services.filter((x) => x.status === 'active') ?? []
      },
      allServices(state) {
        return state.services ?? []
      },
      isEditor(state) {
        return state.login.access === 'editor'
      },
      isViewer(state) {
        return state.login.access === 'viewer'
      },
      isAnon(state) {
        return state.login.access !== 'editor' && state.login.access !== 'viewer'
      },
    },
  }
  