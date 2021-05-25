const state = {
    // fooods:{
    //     pizza:[
    //       { id: 1, name: 'Chana pizza', rating:3.2 , price: 16},
    //       { id: 8, name: 'Italian pizza', rating:3.4 ,price: 18 },
    //       { id: 10, name: 'Cheese Pizza', rating:4.4 ,price: 12},
    //     ],
    //     burgger:[
    //       { id: 3, name: 'Bacon cheeseburger', rating:4.3, price: 16 },
    //       { id: 4, name: 'Special hamburger', rating:5, price: 18 },
    //       { id: 11, name: 'Chili burger', rating:2.5 ,price: 14 },
    //     ]
    // },
    foods: [
        { 
            id: 1,
            cat: 'pizza', 
            name: 'Chana pizza', 
            rating:3.2 , 
            price: 16,
            text:'Pizza · Fresh · Vegetable · Vegetarian',
            src: require('@/assets/img/pepperoni-pizza-2.jpg'),
            
        },
        { 
            id: 2, 
            cat: 'burger', 
            name: 'Bacon cheese burger', 
            rating:5, 
            price: 16 ,
            text:'Beef · Burger · Fresh · Patty',
            src: require('@/assets/img/burger.jpg')},
        { 
            id: 3, 
            cat: 'burger', 
            name: 'Special hamburger', 
            rating:5, 
            price: 18,
            text:'Beef · Burger · Fresh · Patty',
            src: require('@/assets/img/burger.jpg') },
        { 
            id: 4, 
            cat: 'special Packs', 
            name: `Dival's special Packs(Burger + fries + coca)`, 
            price: 20,
            rating:5 ,
            text:'Choose your favorite items',
            src: require('@/assets/img/3889.jpg_wh860.jpg') },
        { 
            id: 5, 
            cat: 'special Packs', 
            name: `Dival's special Packs(Burger + coca)`, 
            price: 15,
            rating:2.5 ,
            text:'Choose your favorite items',
            src: require('@/assets/img/3889.jpg_wh860.jpg') },
        { 
            id: 6, 
            cat: 'special Packs', 
            name: `Dival's special Packs(Burger + fries)`, 
            price: 17,
            rating:2.5 ,
            text:'Choose your favorite items',
            src: require('@/assets/img/3889.jpg_wh860.jpg') },
        { 
            id: 7, 
            cat: 'pizza', 
            name: 'Italian pizza', 
            rating:3.4 ,
            price: 18,
            text:'Pizza · Fresh · Vegetable · Vegetarian',
            src: require('@/assets/img/pepperoni-pizza-2.jpg') },
        { 
            id: 8, 
            cat: 'special Packs', 
            name: `Dival's special Packs(pizza + fries + coca)` ,
            price: 19,
            rating:2.5 ,
            text:'Choose your favorite items',
            src: require('@/assets/img/3889.jpg_wh860.jpg')},
        { 
            id: 9, 
            cat: 'pizza', 
            name: 'Cheese Pizza', 
            rating:5 ,
            price: 12 ,
            text:'Pizza · Fresh · Vegetable · Vegetarian',
            src: require('@/assets/img/pepperoni-pizza-2.jpg')},
        { 
            id: 10, 
            cat: 'burger', 
            name: 'Chili burger', 
            rating:2.5 ,
            price: 14, 
            text:'Beef · Burger · Fresh · Patty',
            src: require('@/assets/img/burger.jpg') },
    ]
}

const getters = {
    // get_family(state) {
    //     return state.familyState
    // },

    // get_family_change(state) {
    //     return state.familyState + ' is a developer'
    // },

    // get_name(state) {
    //     return state.nameState
    // },
    
    // get_pizza2(state) {
    //     return state.fooods[0]
    // },

    get_pizza (state){
        return state.foods.filter(food => food.cat === 'pizza')
    },
    
    get_specialPacks (state) {
        return state.foods.filter(food => food.cat === 'special Packs')
    },
    
    get_popular(state){
        return state.foods.filter(food => food.rating >= 4 && food.cat != 'special Packs') 
    },

    // get_shopping(state, getters){
    //     return state.foods.filter(food => food.id === getters.get_num )
    // }
    get_shopping(state){
    return state.foods.filter(food => food.num > 0)
    }
}

const mutations = {
    set_name(state, newName) { // snake case
        return state.nameState = newName
    },

    set_family(state, newFamily) {
        return state.familyState = newFamily
    },
}

const actions = {

}

export default {
    state,
    getters,
    mutations,
    actions
}