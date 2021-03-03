const constraints = {
    firstname: {
        presence: true,
    },
    lastname: {
        presence: true,
    },
    age: {
        presence: true,
        numericality: {
            lessThan: 150
        }
    },
    gender: {
        presence: true,
    },
    email: {
        presence: true,
        email: true
    },
    phone: {
        presence: true,
        length: {
            minimum : 10,
            message: "must be at least 10 digits"
        },        
    },
    chosensubject: {
        presence: true
    }
}

var app =Vue.createApp({
    data() {
        return {
            imgProfileUrl: 'https://scontent.fbkk9-2.fna.fbcdn.net/v/t31.0-1/c27.0.160.160a/p160x160/23593671_1661648053886646_4665329394504623547_o.jpg?_nc_cat=109&ccb=2&_nc_sid=dbb9e7&_nc_ohc=hOeG_yVumB8AX_P23XX&_nc_ht=scontent.fbkk9-2.fna&tp=27&oh=9da976f75ce5332855088eeee57f64ed&oe=6040BD59',
            info: 'Network Engineer',
            facebookUrl: 'https://www.facebook.com/Bom.nithach/',
            instagramUrl: 'https://www.instagram.com/bom_2321/',
            firstname: 'Nithach',
            lastname: 'Vassanapong',
            formdata: {
                firstname: null,
                lastname: null,
                age: null,
                gender: null,
                email: null,
                phone: null,
                chosensubject: null,
            },
            subject_lists: [{subject_id: 1, subject_name:'Intro to Vue 3'},
                            {subject_id: 2, subject_name: 'Vue 3 Forms'},
                            {subject_id: 3, subject_name: 'Vue 3 Reactivity'}],
            errors: null,
            
        }
    },

    methods: {
        checkForm(){
            console.log(this.formdata)
            this.errors = validate(this.formdata,
                                    constraints)
            if(!this.errors){
                alert("Your profile is updated successfully.")
                this.firstname = this.formdata.firstname;
                this.lastname = this.formdata.lastname;
            }
        }
    }
})

app.mount('#app')