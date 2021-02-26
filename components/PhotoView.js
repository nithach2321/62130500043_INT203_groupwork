app.component('photo-view',{
    props:{
        img: {
            require: true
        }
    },

    template: 
    /*html*/
    `<div :style='style'>
        <span :style='closeStyle' v-on:click="closeImgView">&times;</span>
        <img :style='contentStyle' v-bind:src="img.link">
        <div :style="captionStyle">{{img.title}}</div>
    </div>`,

    data(){
        return {
            style: {
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
    },

    methods: {
        closeImgView(){
            this.$emit('close-view','');
        }
    }
})

