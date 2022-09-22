let urlParams = new URLSearchParams(window.location.search);
let confirm = urlParams.get("confirm");


const { createApp } = Vue

createApp({
    data() {
        return {
            firstName : "",
            lastName : "",
            email : "",
            password : "",
            age : 0,
            isOpen: false,
            isLoading : false,
            showAlert : false
        }
    },
    created() {
        if(confirm){
            showAlert = true
        }else{
            showAlert = false
        }
    },
    methods: {
        logIn(){
            axios.post("/api/login", "email=" + this.email + "&password=" + this.password, {headers : {'Content-Type' : 'application/x-www-form-urlencoded'}})
            .then(response => {
                window.location.href = "/web/index.html"
            })
        },
        register(){
            this.isLoading = true
            axios.post("/api/clients", "firstName=" + this.firstName + "&lastName=" + this.lastName + "&email=" + this.email + "&password=" + this.password, {headers : {'Content-Type' : 'application/x-www-form-urlencoded'}}) 
            .then(response =>{
                this.isOpen=true

            })
            },
    },
}).mount('#app')