<template>
    <div>
      <div class="max-w-5xl mx-auto py-20">
        <h1 class="text-2xl font-bold py-4">services</h1>
        <Multiselect label="Select Services" :data="options" />
      </div>



    </div>
  </template>
   
  <script>
  import Multiselect from "./Multiselect.vue";
  import {useStore} from 'vuex';
  
  
  export default {
    name: 'servicespage',
          components:{
              Multiselect
          },
    setup () {
      const store = useStore();
  const options = [
        {
          value: 1,
          text: "Child Protection",
        },
        {
          value: 2,
          text: "Cars",
        },
        {
          value: 3,
          text: "Cycle Maintainance",
        },
        {
          value: 4,
          text: "Bikes",
        },
        {
          value: 5,
          text: "Five",
        },
        {
          value: 6,
          text: "Six",
        },
        {
          value: 7,
          text: "Seven",
        },
      ] 
  
  
   
      return {
        options, 
      }
    }
  }
  </script>
  
  <style lang="scss" scoped>
  
  </style>