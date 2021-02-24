app.component('photo-view',{
    props:{
        img: {
            type: Array,
            require: true
        },
        displayData: {
            require: true
        }
    },

    template: 
    /*html*/
    `<div :style='modal.style'>
        <span :style='modal.closeStyle' v-on:click="closeViewImg()">&times;</span>
        <img :style='modal.contentStyle' v-bind:src="modal.imgSrc">
        <div :style="modal.captionStyle">{{modal.caption}}</div>
    </div>`,

    data(){
        return {
            modal: {
                imgSrc : '',
                caption: '',
                style: {
                    display: this.displayData, /* Hidden by default */
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
        // openViewImg(){
        //     console.log('fgfg')
        //     this.modal.style.display = 'block';
        //     this.modal.imgSrc = this.img.link;
        //     this.modal.caption = this.img.title;
        // },
        closeViewImg(){
            this.modal.style.display = 'none';
            this.modal.imgSrc = '';
            this.modal.caption = '';
        }
    }
})

