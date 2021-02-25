app.component('search-bar',{
    props:{
    },

    template: 
    /*html*/
    `<i v-show="!show" v-on:click="showSearchBar()" class="im im-magnifier"></i>
    <input v-show="show" v-model="searchData" @update:modelValue="exportSearch" placeholder="Please enter text for searching photos" />
    <button v-show="show" v-on:click="closeSearchBar()" class="bg-green-500 text-white  py-1 px-2 rounded">
      Cancel
    </button>`,

    data(){
        return {
            show : false,
            searchData: ''
        }
    },

    methods: {
        showSearchBar(){
            this.show = !this.show;
        },
        closeSearchBar(){
            this.show = !this.show;
            this.searchData = '';
            this.exportSearch();
        },
        exportSearch(){
            this.$emit('export-search',this.searchData)
        }
    }
}
)