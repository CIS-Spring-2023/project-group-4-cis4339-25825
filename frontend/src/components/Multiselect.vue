 <template>
 
  <div>
    <div class="relative max-w-xl mx-auto mt-8">
      <label class="block text-lg font-normal py-2 text-gray-600">{{ label }}</label>
      <div
        class="ring-1 cursor-pointer overflow-auto multi px-2 py-2 text-sm w-full shadow focus:border-1 block focus:ring-1 focus:ring-red-600 flex gap-x-2 ring:outline-1 text-gray-700 focus:outline-green-600 focus:border-red-400 focus:ring-red-600 rounded ring-gray-300"
        :class="store?.state?.servicesModule?.services?.length <= 0 ? 'flex justify-between' : ''"
      >
        <p>{{ store?.state?.servicesModule?.services?.length <= 0 ? "Events" : '' }}</p>

        <p
          class="bg-green-300 text-green-700 px-2 rounded-full"
          v-for="item in store?.state?.servicesModule?.services"
          :key="item.value"
          @click="deleteItem(item)"
        >
          {{ item.text }}
          <i class="fa fa-times"></i>
        </p>
        <p
          class="fa fa-angle-down absolute right-2 h-6 w-6 bg-green-700 rounded-full flex items-center justify-center text-white"
          @click="setDropdown()"
        ></p>
      </div>
      <div
        :class="dropdown ? 'block' : 'hidden'"
        class="w-full min-h-16 py-2 px-2 absolute shadow rounded ring-1 ring-gray-200 bg-white z-50 top-[84px]"
      >
        <p
          class="text-sm font-light mt-1 text-gray-700 hover:bg-green-700 px-1 py-2 rounded hover:text-white cursor-pointer transition-all"
          v-for="item in data"
          @click="setValue(item)"
          :key="item.value"
          :class="store?.state?.servicesModule?.services?.includes(item) ? 'text-green-700 font-bold' : ''"
        >{{ item.text }}</p>
      </div>
    </div>
  </div>
  
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";

export default {
  props: {
    label: String,
    data: Object
  },
  setup(props) {
    const dropdown = ref(false);
    const arr = ref([]);
    const store = useStore();

    function setDropdown() {
      dropdown.value = !dropdown.value;
    }

    const setValue = value => {
      console.log(value);
      store.commit("servicesModule/setServices", value);

      dropdown.value = !dropdown.value;
    };

    const deleteItem = item => {
      store.commit("servicesModule/deleteItem", item);
    };

    return {
      dropdown,
      arr,
      store,
      setDropdown,
      setValue,
      deleteItem
    };
  }
};
</script>
<style scoped>
select {
  margin-top: 10px;
}
.option {
  position: relative;
  background: red;
  padding: 4px 16px;
  background: white;
  border: 1px solid black;
  border-radius: 20px;
  margin-left: 10px;
}
.close {
  position: absolute;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  top: -8%;
  left: -8%;
  background: purple;
  color: white;
  font-weight: bold;
  cursor: pointer;
}
</style>