import { mapActions } from 'vuex'

export default {
    data() {
      return{
        words: [],
        ketchup: 0,
        mayonnaise: 0,
        barbecueSauce: 0,
        //isActive: false
      }
    },
    props: {
        item: {
        type: Object
      }
    },
    beforeMount() {
      this.words = this.item.text;
      //console.log(this.words);
    },
    methods:{
        addcart(){
            if(this.ketchup <= 0 && this.mayonnaise <= 0 && this.barbecueSauce <= 0){
              alert('Choose your sauce');
            }
            else{
              this.$store.commit("add_shop", [this.item, this.ketchup, this.mayonnaise, this.barbecueSauce]);
              this.ketchup = 0;
              this.mayonnaise = 0;
              this.barbecueSauce = 0;
            }
            //this.$store.commit("add_shop", this.item);
            //console.log(this.$store.getters.get_cart)
        },
        addchoices(item){
          if(item == 'ketchup'){
            this.ketchup++
          }
          if(item == 'mayonnaise'){
            this.mayonnaise++
          }
          if(item == 'barbecueSauce'){
            this.barbecueSauce++
          }
          // else{
          //   this.barbecueSauce++
          // }
        },
        ...mapActions([
          'addToCart'
        ])
    }
  }