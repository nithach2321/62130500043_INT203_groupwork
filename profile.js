const app = {
    data() {
        return {
            imgProfileUrl: 'https://scontent.fbkk9-2.fna.fbcdn.net/v/t31.0-1/c27.0.160.160a/p160x160/23593671_1661648053886646_4665329394504623547_o.jpg?_nc_cat=109&ccb=2&_nc_sid=dbb9e7&_nc_ohc=hOeG_yVumB8AX_P23XX&_nc_ht=scontent.fbkk9-2.fna&tp=27&oh=9da976f75ce5332855088eeee57f64ed&oe=6040BD59',
            firstname: 'Nithach',
            lastname: 'Vassanapong',
            info: 'Network Engineer',
            facebookUrl: 'https://www.facebook.com/Bom.nithach/',
            instagramUrl: 'https://www.instagram.com/bom_2321/'
        }
    }
}
var mountApp = Vue.createApp(app).mount('#app')