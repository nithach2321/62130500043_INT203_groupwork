app.component('photo-list',{
    props:{
        img: {
            type: Array,
            require: true
        }
    },
    template: 
    /*html*/
    `<!-- Card Image -->
      <img :style="gallery.style" v-bind:src="img.link" alt="" class="overflow-hidden" v-on:click="openViewImg">
      <!-- Card Content -->
      <div class="p-4" v-on:click="toggleLike">
        <h3 class="font-medium text-gray-600 text-lg my-2 uppercase">
          {{img.title}}
          <i v-show="img.like" class="im im-facebook-like"></i>
        </h3>
        <p class="text-justify">{{img.text}}</p>            
      </div>`,

    data(){
      return {
        gallery: {
          style: {
            'border-radius': '5px',
            cursor: 'pointer',
            transition: '0.3s'
          }
        }
      }
    },

    methods: {
      toggleLike(){
        this.img.like = !this.img.like;
      },
      openViewImg(){
          this.$emit('open-view')
      }
    }
})

// v-on:click="openViewImg(index)"
