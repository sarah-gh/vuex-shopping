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
        //return state.purchases.filter(purchase => purchase.price > 0).length
    }
}
const mutations = {
    add_shop(state,item){
        const record = state.purchases.find(purchase => purchase.id === item.id)
        const id = item.id;
        const cat = item.cat;
        const name = item.name;
        const price = item.price;
        const src= item.src;
	    if (!record) {
	      state.purchases.push({
	        id,
            cat,
            name,
            price,
            src,
	        quantity: 1
	      })
	    } else {
	      record.quantity++
	    }
    },

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