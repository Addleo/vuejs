Vue.component('ajoutcontact',{  
    props: ['entreprises'],
    emits: ['nouveaucontact'],
    data(){
        return{
            entreprise: '0',
            contact: "Nom du contact à ajouter"
        }
    },
    methods: {
        ajoutercontact(){
            this.$emit('nouveaucontact',this.entreprise,this.contact),
            this.contact = '';
        }
    },
    template: `        
    <select v-model="entreprise">
        <option v-for = "entreprise in entreprises" :value=indexOf(entreprise.content)>{{ entreprise.content }}</option>
    </select><br><br>
    <input type="text" v-model="contact"><br><br>
    <a href="#" @click="ajoutercontact" v-if=" contact != '' ">Ajouter</a>
    `
})

export default{
    components: {
        ajoutcontact
    }
}