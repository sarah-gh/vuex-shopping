<template>
  <div class="home">
    <my-header></my-header>
    <nav-bar></nav-bar>
    <div class="section">
      <div class="sell">
        <popularDishes id="sec-1"></popularDishes>
        <pizza id="sec-2"></pizza>
        <special-packs id="sec-3"></special-packs>
      </div>
      <div class="cart-container">
        <div class="cart">
          <input type="text" class="search" />
          <div v-for="(item, index) in showShopping" :key="index">
              <my-Shop v-bind:item="item"></my-Shop>
              <hr>
          </div>
          <div>
            <p>
              {{myprice}}
            </p>
          </div>
        </div>
        <button>I want this order</button>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import myHeader from '../resources/components/header/header.vue'
import navBar from '../resources/components/navbar/navbar.vue'
import pizza from '../resources/components/pizza/pizza.vue'
import popularDishes from '../resources/components/popularDishes/popularDishes.vue'
import specialPacks from '../resources/components/specialPacks/specialPacks.vue'
import myShop from "../resources/components/myShop/myShop.vue"

export default {
  name: 'Home',
  data(){
    return{
      item: Object,
      myprice: 0
    }
  },
  components: {
    myHeader,
    navBar,
    pizza,
    popularDishes,
    specialPacks,
    myShop
  },
  computed: {
    showShopping(){
      for(let i=0; i < this.$store.state.purchases ;i++){
        //this.myprice += this.item.price;
        }
      this.price();
      return this.$store.getters.get_cart;
    }
  },
  methods:{
    // showShopping(){
    //   //console.log(this.$store.getters.get_cart);
    //   return this.$store.getters.get_cart;
    // }
    price(){
      this.item = null;
      this.item = this.$store.getters.get_cart;
      // console.log(this.item.length);
      // console.log(this.item);
      this.myprice = 0;
      for(let i=0; i < this.item.length ;i++){
        //console.log('price : '+ this.item[i].price);
        this.myprice += this.item[i].price * this.item[i].quantity ;
      }
    }
  },
  // watch: {
  //   "$store.state.purchases": function(n) {
  //     console.log(n);
  //     console.log('change state');
  //     this.showShopping();
  //   },
  // }
}
</script>

<style lang="scss" scoped>
.section{
  display: flex;
  flex-direction: row;
  .sell{
    width: 55%;
    //flex-grow: 5;
    #sec-1 #sec-2 #sec-3{
      margin: 15px 0;
    }
  }
  .cart-container{
    width: 45%;
    margin-top: -38.5px;
    display: flex;
    flex-direction: column;
    
    button{
      width: 78.5%;
      margin: 0 auto;
      height: 60px;
      font-size: 20px;
      background-color: rgb(255, 123, 0);
      border: 0px;
      box-shadow: 0px;
      padding: 10px;
    }
  }
  .cart{
    width: 75%;
    margin: 0 auto;
    //flex-grow: 5;
    padding: 10px;
    background-color: rgb(233, 233, 233);
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .search{
    width: 70%;
    height: 50px;
    margin: 10px auto;
    //margin-bottom: 20px;
    font-size: 20px;
    background-color: rgb(231, 159, 189);
    color: rgb(128, 0, 53);
    border: 0px;
    padding: 0 30px;
    border-radius: 30px;
    &:focus-visible {
    outline: -webkit-focus-ring-color auto 0px;
    }
  }
}
</style>
