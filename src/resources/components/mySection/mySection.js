import { mapActions } from 'vuex'

export default {
    props: {
        item: {
        type: Object
      }
    },
    methods:{
        addcart(){
            this.$store.commit("add_shop", this.item);
            //console.log(this.$store.getters.get_cart)
        },
        ...mapActions([
          'addToCart'
        ])
    }
  }