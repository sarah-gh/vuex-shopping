import { mapActions } from 'vuex'

export default {
    props: {
        item: {
          type: Object
        }
    },
    methods:{
      deletecart(item){
          this.$store.commit("delete_shop", item);
          //console.log(this.$store.getters.get_cart)
      },
      ...mapActions([
        'delete_shop'
      ])
  }
  }