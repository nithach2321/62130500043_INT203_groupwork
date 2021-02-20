const app = {
    data() {
        return {
            imgs: [ {link: 'https://picsum.photos/id/29/2106/1404',
                    like: false,
                    title: "Climb the Mountains",
                    text : "The be might what days revellers, which sought to a nor. Land from to suits his some. Saw him counsel begun mother though but. Ofttimes soils of since mighty pollution."},
                    
                    {link: 'https://picsum.photos/id/247/2106/1404',
                    like: false,
                    title: "Explore the Desert",
                    text : "Rapping wind chamber have was has, is all of thy stood chamber his bore. Nameless or as door tapping both thy grew lenore. We my still respiterespite lie, with lordly."},

                    {link: 'https://picsum.photos/id/342/2106/1404',
                    like: false,
                    title: "Tour the City",
                    text : "Upon but that objects tis sore would what. Who formed in coffined heartless shades, there mine was heart vast flaunting he low relief uncouth, dear and and but suffice ofttimes."}
                ],
            search: {
                show : false,
                inputData : ''
            },
            gallery: {
                style: {
                    'border-radius': '5px',
                    cursor: 'pointer',
                    transition: '0.3s'
                }
            },
            modal: {
                imgSrc : '',
                caption: '',
                style: {
                    display: "none", /* Hidden by default */
                    position: "fixed", /* Stay in place */
                    'z-index': 1, /* Sit on top */
                    'padding-top': '100px', /* Location of the box */
                    left: 0,
                    top: 0,
                    width: '100%', /* Full width */
                    height: '100%', /* Full height */
                    overflow: "auto", /* Enable scroll if needed */
                    'background-color': "rgb(0,0,0)", /* Fallback color */
                    'background-color': "rgba(0,0,0,0.9)" /* Black w/ opacity */
                },
                contentStyle : {
                    margin: 'auto',
                    display: 'block',
                    width: '80%',
                    'max-width': '700px'
                },
                captionStyle : {
                    margin: 'auto',
                    display: 'block',
                    width: '80%',
                    'max-width': '700px',
                    'text-align': 'center',
                    color: '#ccc',
                    padding: '10px 0',
                    height: '150px'
                },
                closeStyle: {
                    position: 'absolute',
                    top: '15px',
                    right: '35px',
                    color: '#f1f1f1',
                    'font-size': '40px',
                    'font-weight': 'bold',
                    transition: '0.3s',
                  }
            }
        }
    },
    methods: {
        toggleLike(index){
            this.imgs[index].like = !this.imgs[index].like;
        },
        toggleSearch(){
            this.search.show = !this.search.show;
        },
        openViewImg(index){
            this.modal.style.display = 'block';
            this.modal.imgSrc = this.imgs[index].link;
            this.modal.caption = this.imgs[index].title;
        },
        closeViewImg(){
            this.modal.style.display = 'none';
            this.modal.imgSrc = '';
            this.modal.caption = '';
        }
    },
    computed: {
        filteredList() {
          return this.imgs.filter
            (imgs => {
                return imgs.title.toLowerCase().includes(this.search.inputData.toLowerCase())
            })
        }
    }
}
Vue.createApp(app).mount('#app')

