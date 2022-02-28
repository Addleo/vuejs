export default{
    name: 'ajout',
    props: [],
    emits: ['nouvelleentreprise'],
    data(){
        return{
            interne: "Ajouter une entreprise"
        }
    },
    methods: {
        ajouter(){
            this.$emit('nouvelleentreprise', this.interne),
            this.interne = '';
        }
    },
    template: `        
    <input type="text" v-model="interne"><br>
    <a href="#" @click="ajouter" v-if=" interne != '' ">Ajouter</a>
    `
}
