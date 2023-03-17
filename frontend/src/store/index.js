import { createStore } from "vuex";
import servicesModule from "./services.module";

export default createStore({
    modules :{
        servicesModule: servicesModule
    }
})