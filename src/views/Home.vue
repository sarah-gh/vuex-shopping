<template>
  <div class="home">
    <my-header></my-header>
    <div class="section">
      <div class="sell">
        <nav-bar></nav-bar>
        <popularDishes id="sec-1"></popularDishes>
        <pizza id="sec-2"></pizza>
        <special-packs id="sec-3"></special-packs>
      </div>
      <div class="cart-container">
        <div class="cart">
          <input type="text" class="search" />
          <div v-if="!showShop" class="empty">The cart is empty</div>
          <transition-group name="bounceUp" tag="div" class="list-group">
            <div v-for="(item, index) in showShopping" :key="index" class="list-group-item">
                <my-Shop v-bind:item="item"></my-Shop>
                <hr>
            </div>
          </transition-group>
          <div>
            <div class="price" v-if="showShop">
              <p>Order cost : <span>{{myprice}}$</span></p>
              <p>Delivery cost : <span>{{delivery}}.00$</span></p>
              <p>Discount : <span>{{discountPrice}}$</span></p>
              <p class="pay">You pay : <span>{{ finalPrice }}$</span></p>
            </div>
          </div>
        </div>
        <button v-if="showShop" @click="completion()">I want this order</button>
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
      myprice: 0,
      showShop: true,
      finalPrice: 0,
      discount: 10, //// Percentage
      discountPrice: 0,
      delivery: 3.00,
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
      this.price();
      return this.$store.getters.get_cart;
    }
  },
  methods:{
    
    price(){
      this.item = null;
      this.item = this.$store.getters.get_cart;
      this.myprice = 0;
      this.finalPrice = 0;
      for(let i=0; i < this.item.length ;i++){
        this.myprice += this.item[i].price * this.item[i].quantity ;
      }
      
      // this.delivery = this.delivery.toFixed(2);
      this.finalPrice =  ( (this.myprice * ((100 - this.discount)/100))+ this.delivery ).toFixed(2);
      this.discountPrice = (this.myprice * ((this.discount)/100)).toFixed(2);
      this.myprice = this.myprice.toFixed(2);
      if(this.item.length === 0){
        this.showShop = false;
      }
      else{
        this.showShop = true;
      }
    },
    completion(){
          this.$store.commit("completionOrders");
          //console.log(this.$store.getters.get_cart)
    },
  },
  
  // watch: {
  //   "this.$store.getters.get_cart": function(n) {
  //     console.log(n);
  //     //console.log('change state');
  //     this.price();
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
    width: 40%;
    //margin-top: -38.5px;
    display: flex;
    flex-direction: column;
    
    button{
      width: 83.55%;
      //margin: 0 auto;
      height: 60px;
      font-size: 20px;
      background-color: rgb(253, 138, 30);
      border: 0px;
      box-shadow: 0px;
      padding: 10px;
      justify-self: flex-end;
      align-self: flex-end;
      cursor: pointer;
      &:hover{
        background-color: rgb(255, 123, 0);
      }
    }
  }
  .cart{
    width: 80%;
    //margin: 0 auto;
    //flex-grow: 5;
    padding: 10px;
    background-color: rgb(240, 240, 240);
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-self: flex-end;
    align-self: flex-end;
    .empty{
      width: 100%;
      text-align: center;
      font-size:20px;
      padding: 20px 0;
    }
    .price{
      padding: 10px 30px 50px 30px;
      p{
        //width: 100%;
        display: flex;
        flex-direction:row;
        justify-content:space-between;
      }
      .pay{
        color: rgb(167, 26, 68);
        font-weight: bold;
      }
    }
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
