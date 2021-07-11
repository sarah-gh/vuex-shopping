const state = {
    foods: [
        {
            index: 1,
            id: 'popular-dishes',
            category: 'Popular Dishes',
            foodInfo: [
                {
                    index: 1,
                    name: 'Special Hamburger1',
                    image: 'hamburger',
                    price: 17,
                    tags: [
                        {
                            name:'Ketchup',
                            number: 0
                        },
                        {
                            name:'Meyounabe',
                            number: 0
                        },
                        {
                        name:'Barbeque sauce',
                        number: 0
                        }
                    ],
                    details: ['Hamburger', `goudia's cheese`, 'meat', 'bread'],
                    src: require('@/assets/img/burger.jpg')
                },

                {
                    index: 2,
                    name: 'Special Hamburger2',
                    image: 'hamburger',
                    price: 21,
                    tags: [
                        {
                            name:'Ketchup',
                            number: 0
                        },
                        {
                            name:'Meyounabe',
                            number: 0
                        },
                        {
                            name:'Barbeque sauce',
                            number: 0
                        }
                    ],
                    details: ['Hamburger', `goudia's cheese`, 'meat', 'bread'],
                    src: require('@/assets/img/burger.jpg')
                },
            ]
        },
        {
            index: 2,
            id: 'pizaa',
            category: 'pizaa',
            foodInfo: [
                {
                    index: 1,
                    name: 'pizaa',
                    image: 'pizaa',
                    price: 19,
                    tags: [
                        {
                            name:'Ketchup',
                            number: 0
                        },
                        {
                            name:'Meyounabe',
                            number: 0
                        },
                        {
                        name:'Barbeque sauce',
                        number: 0
                        }
                    ],
                    details: ['Pizza', 'Fresh', 'Vegetable', 'Vegetarian'],
                    src: require('@/assets/img/pepperoni-pizza-2.jpg')
                },

                {
                    index: 2,
                    name: 'pizaa',
                    image: 'pizaa',
                    price: 20,
                    tags: [
                        {
                            name:'Ketchup',
                            number: 0
                        },
                        {
                            name:'Meyounabe',
                            number: 0
                        },
                        {
                        name:'Barbeque sauce',
                        number: 0
                        }
                    ],
                    details: ['Pizza', 'Fresh', 'Vegetable', 'Vegetarian'],
                    src: require('@/assets/img/pepperoni-pizza-2.jpg')
                },
            ]
        },
        {
            index: 3,
            id: 'special Packs',
            category: 'special Packs',
            foodInfo: [
                {
                    index: 1,
                    name: 'special Packs',
                    image: 'special Packs',
                    price: 14,
                    tags: [
                        {
                            name:'Ketchup',
                            number: 0
                        },
                        {
                            name:'Meyounabe',
                            number: 0
                        },
                        {
                        name:'Barbeque sauce',
                        number: 0
                        }
                    ],
                    details: 'Choose your favorite items',
                    src: require('@/assets/img/3889.jpg_wh860.jpg')
                },

                {
                    index: 2,
                    name: 'special Packs',
                    image: 'special Packs',
                    price: 18,
                    tags: [
                        {
                            name:'Ketchup',
                            number: 0
                        },
                        {
                            name:'Meyounabe',
                            number: 0
                        },
                        {
                        name:'Barbeque sauce',
                        number: 0
                        }
                    ],
                    details: 'Choose your favorite items',
                    src: require('@/assets/img/3889.jpg_wh860.jpg')
                },
            ]
        },
        
    ]
}

const getters = {
    get_foods (state){
        return state.foods
    },
    
}

const actions = {

}

export default {
    state,
    getters,
    actions
}