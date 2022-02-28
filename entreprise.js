Vue.component('entreprise',{  
    props: {
        content: String,
        contacts: Array,
    },
    template: `<p> {{ content }} <br> contacts : <ul> <li v-for = "contact in contacts" >  {{ contact }} </li> </ul> </p>`
})


export default{
    components: {
        entreprise
    }
}