import { mapActions } from 'vuex'
export default {
    data() {
      return{
        words: [],
        tagFood: []
      }
    },
    props: {
        item: {
          type: Object
        },
        index: {
          type: Number
        },
        category:{
          type: String
        }
    },
    mounted() {
      this.words = this.item.details;
      this.tagFood = [...this.item.tags];
    },
      
      
    methods:{
        addcart(){
            let items = [];
            items.push(this.item);
            for (let i = 0; i < items.length; i++){
              for (let j = 0; j < items[i].tags.length; j++){
                items[i].tags[j].number = this.tagFood[j].number;
                //console.log(items[i].tags[j].number)
              }
            }
            this.$store.commit("add_shop", items);
            //console.log(items);
            for (let i = 0; i < this.tagFood.length; i++){
              this.tagFood[i].number = 0;
            }
        },
        addchoices(item){
          for(let i=0; i< 3; i++) {
            if(this.tagFood[i].name == item.name){
              this.tagFood[i].number++;
            }
          }
          // console.log('this.item.tags : ')
          // console.log(this.item.tags);
        },
        ...mapActions([
          'addToCart'
        ])
    }
  }