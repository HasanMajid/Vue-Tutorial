const app = Vue.createApp({
    data() {
        return {
            title: 'the final empire',
            author: 'Brandon Sanderson',
            age: 45,
        }
    },
    methods: {
        changeTitle() {
            this.title = 'New Title'
        }
    }
    // template: "<h2>This is the template.</h2>",
})

app.mount("#app")