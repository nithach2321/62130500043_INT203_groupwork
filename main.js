const app = Vue.createApp({
    data() {
        return {
            keyword : '',
            imgView : [''],
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
        }
    },
    methods: {
        updateKeyword(text){
            this.keyword = text;
        },
        updateImgView(img){
            this.imgView = img;
        }
    },
    computed: {
        filteredList() {
          return this.imgs.filter
            (imgs => {
                return imgs.title.toLowerCase().includes(this.keyword.toLowerCase())
            })
        }
    }
})

