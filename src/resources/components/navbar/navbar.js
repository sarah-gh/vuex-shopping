export default {
    data(){
        return{
            isActive: '1',
            test: '0'
        }
      },
    methods: {
        url(){
            setTimeout(function(){
                let url = window.location.href;
                let active = url.slice(-1);
                //console.log(active);
                this.isActive = active;
                //console.log(this.isActive);
                }, 100);
            
            // const queryString = window.location.search;
            // const urlParams = new URLSearchParams(queryString);
            // console.log(urlParams);
            // console.log(urlParams.getAll());
        }
    },
    computed: {
        active(){
            return this.isActive;
        }
    },
    watch: {
        // isActive: {
        //   handler: function(val, oldVal) {
        //     console.log(oldVal, val);
        //   },
        //   //deep: true
        // },
        "isActive": function(value) {
            if(this.test != this.isActive)
            this.url();
            console.log(value);
        },
    }, 

    
}