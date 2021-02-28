const app = Vue.createApp({
    data() {
        return {
            msg: 'World'
        }
    }
})

app.mount('#hello')


const profile = Vue.createApp({
    data() {
        return {
            firstName: '',
            lastName: '',
            email: '',
            gender: '',
            street: '',
            picture: ''
        }
    },
    methods: {
        async nextUser() {
            const res = await fetch('https://randomuser.me/api')
            const {results} = await res.json()
            const userInfo = results[0]
            this.firstName = userInfo.name.first
            this.lastName = userInfo.name.last
            this.email = userInfo.email
            this.gender = userInfo.gender
            this.street = userInfo.location.street.number + " " + userInfo.location.street.name + ", " + userInfo.location.city + ", " + userInfo.location.country
            this.picture = userInfo.picture.large
        }
    }
})

profile.mount("#profile")