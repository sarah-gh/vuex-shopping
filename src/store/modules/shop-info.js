const state = {
    purchases: []
}

const getters = {
    get_cart (state){

        return state.purchases
    },
}

const mutations = {
    add_shop(state,items){
        const record = state.purchases.find(purchase => purchase.name == items[0].name)
        const id = items[0].index;
        const name = items[0].name;
        const price = items[0].price;
        const tags = [...items[0].tags];
        const src= items[0].src;
        // console.log('items:')
        // console.log(items);
	    if (!record) {
	      state.purchases.push({
	        id,
            name,
            price,
            src,
            tags,
	        quantity: 1
	      })
	    } else {
	      record.quantity++;
          record.tags = tags;
	    }
        // console.log("purchases : ")
        // console.log(state.purchases);
    },
    delete_shop(state,item){
        const record = state.purchases.find(purchase => purchase.id === item.id)
        const i = state.purchases.indexOf(item);
	    if (record) {
	      state.purchases.splice(i , 1)
        }
	    
    },
    completionOrders(state){
        alert('Completion orders');
        for(let i = 0 ; i <= state.purchases.length + 1 ; i++){
            state.purchases.pop();
        }       
    }

}

const actions = {
    // addToCart({ commit }, product){
	// 	commit(types.ADD_TO_CART, {
	// 		id: product.id
	// 	})
	// }
}

export default {
    state,
    getters,
    mutations,
    actions
}