app.component('photo-list', {
    props: {
        imgFilteredList: {
            type: Object,
            require: true
        }
    },

    template:
    /*html*/
    `<!-- All Cards Container -->
    <div class="lg:flex items-center container mx-auto my-auto">
        <div v-if="imgFilteredList!=0" v-for="(img,index) in imgFilteredList"  class="lg:m-4 shadow-md hover:shadow-lg hover:bg-gray-100 rounded-lg bg-white my-12 mx-8">
            <!-- Card Image -->
            <img :style="gallery.style" v-bind:src="img.link" alt="" class="overflow-hidden" >
            <!-- Card Content -->
            <div class="p-4" v-on:click="toggleLike(index)">
                <h3 class="font-medium text-gray-600 text-lg my-2 uppercase">
                    {{img.title}}
                    <i v-show="img.like" class="im im-facebook-like"></i>
                </h3>
                <p class="text-justify">{{img.text}}</p>            
            </div>
        </div>
        <h1 v-else class="text-center text-2xl font-bold p-4">
            No photo.
        </h1>
    </div>`,

    data() {
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
        toggleLike() {
          this.img.like = !this.img.like;
        },
        openViewImg() {
          this.$emit('open-view')
        }
      }
})

// v-if="imgFilteredList!=0"
// v-on:click="openViewImg(index)"