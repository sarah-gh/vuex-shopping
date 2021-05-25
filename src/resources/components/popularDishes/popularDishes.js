//import { mapGetters } from "vuex";
import mySection from "../mySection/mySection.vue"
export default {
    components: {
        mySection
      },
    computed: {
        showPopular() {
            return this.$store.getters.get_popular;
        },
    },
    
}