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
      }
    },
    getters: {
      activeServices(state) {
        return state.services.filter((x) => x.status === 'active') ?? []
      },
      allServices(state) {
        return state.services ?? []
      }
    },
  }
  