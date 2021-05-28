const state = {
    purchases: []
}

const getters = {
    get_cart (state){
        return state.purchases
    },
    get_price(state){
        return state.purchases.price
    },
    get_length(state, getters){
        return getters.get_cart.length;
    }
}
const mutations = {
    add_shop(state,[item,ketchup, mayonnaise, barbecueSauce]){
        const record = state.purchases.find(purchase => purchase.id === item.id)
        const id = item.id;
        const cat = item.cat;
        const name = item.name;
        const price = item.price;
        const k = ketchup;
        const m = mayonnaise;
        const b = barbecueSauce;
        const src= item.src;
        //console.log(ketchup);
	    if (!record) {
	      state.purchases.push({
	        id,
            cat,
            name,
            price,
            src,
            k,
            m,
            b,
	        quantity: 1
	      })
          //console.log(state.purchases);
	    } else {
	      record.quantity++;
          record.k += k ;
          record.m += m ;
          record.b += b ;
	    }
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
        //console.log('purchases: ' + state.purchases);
       
    }

    // [types.ADD_TO_CART] (state, { id }) {
	//     const record = state.purchases.find(p => p.id === id)

	//     if (!record) {
	//       state.added.push({
	//         id,
	//         quantity: 1
	//       })
	//     } else {
	//       record.quantity++
	//     }
	//   }
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