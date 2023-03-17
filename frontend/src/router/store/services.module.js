export default {
    namespaced: true,
    state: {
        services:[],
        events:[]
    },
    mutations:{
        setServices : function(state, values){
            const num = values;
           

            if (state.services.includes(num.value)) {
                state.services.splice(state.services.indexOf(num.value), 1);
                console.log(arr);
            } else {
                if (state.services.includes(num)) {
                    return;
                } else {
                    state.services.push(values);
                } 
            }
        },
         deleteItem : function (state, item){
             if (state.services.includes(item)) {
                state.services.splice(state.services.indexOf(item), 1);
                
            }
        },



        setForm : function(state, formData){
                state.events.push(formData);
        }

    }
}