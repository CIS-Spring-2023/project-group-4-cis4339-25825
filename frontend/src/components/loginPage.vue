<template>
  <div class="">
    <div class="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
   
      <div class="sm:mx-auto sm:w-full sm:max-w-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-16 h-16 mx-auto text-[#c8102e]"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
  
        <h2
          class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900"
        >Sign in to your account</h2>
        
      </div> 
      <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form class="space-y-6" action="#" method="POST">
            <div>
              <label
                for="email"
                class="block text-sm font-medium leading-6 text-gray-900"
              >Email address</label>
              <div class="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autocomplete="email"
                  required
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#c8102e] sm:text-sm sm:leading-6"
                />
              </div>
            </div>
  
            <div>
              <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
              <div class="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autocomplete="current-password"
                  required
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#c8102e] sm:text-sm sm:leading-6"
                />
              </div>
            </div>
  
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  class="h-4 w-4 rounded border-gray-300 text-[#c8102e] focus:ring-[#c8102e]"
                />
                <label for="remember-me" class="ml-2 block text-sm text-gray-900">Remember me</label>
              </div>
            </div>
  
            <div>
              <button
                type="submit"
                class="flex w-full justify-center rounded-md bg-[#c8102e] py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-[#c8102e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c8102e]"
              >Sign in</button>
            </div>
          </form>
  
          <div class="mt-6">
            <div class="relative">
              <div class="absolute inset-0 flex items-center">
                <div class="w-full border-t border-gray-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> 
    </div>
  </template>
  
  <script>   
  export default {
    name: "FrontendLogin",
    components:{
    
    },
  
    data() {
      return {};
    },
  
    mounted() {},
  
    methods: {}
  };
  </script>
  
  <style lang="scss" scoped>
  </style>
  