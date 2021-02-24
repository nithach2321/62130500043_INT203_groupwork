app.component('search-bar',{
    props:{
    },
    template: 
    /*html*/
    `<i v-show="!show" v-on:click="toggleSearch()" class="im im-magnifier"></i>
    <input v-show="show" v-model="inputData" placeholder="Please enter text for searching photos" />
    <button v-show="show" v-on:click="toggleSearch()" class="bg-green-500 text-white  py-1 px-2 rounded">
      Cancel
    </button>`,

    data(){
        return {
            show : false,
            inputData : ''
        }
    },

    methods: {
        toggleSearch(){
            this.show = !this.show;
        },
        searchOutput(){
            this.$emit('search-data',inputData)
        }
    }
}
)