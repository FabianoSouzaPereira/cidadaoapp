import { createStore } from "redux";


function storeReducer(){
  return {
    active: {},
    modules: [
      { id: 1 }
    ]
  
  };
}

const store = createStore(storeReducer);

export default store;