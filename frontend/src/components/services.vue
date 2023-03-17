<template>
    <div>
      <div class="max-w-5xl mx-auto py-20">
        <h1 class="text-2xl font-bold py-4">Services</h1>
        <Multiselect label="Select Services" :data="options" />
      </div>
      <div class="Choose">
                    </div>
                    
                    <div class="activetask">
                      <span> Input New Service: </span>

                    </div>                  

    <div class="formone">
        <input type="text" placeholder="Add a Service" />
        <button><i class="fas fa-plus"></i></button>
      </div>

      <div class="addbutton">
                      <button>Add Service</button>
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
          text: "Family Support",
        },
        {
          value: 2,
          text: "Adult Education",
        },
        {
          value: 3,
          text: "Youth Services Program",
        },
        {
          value: 4,
          text: "Early Childhood Education",
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