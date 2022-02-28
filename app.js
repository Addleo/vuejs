import { createApp } from 'vue';

import entreprise from "./entreprise.js";

//import ajout from "./ajout.js";

//import ajoutcontact from "./ajoutcontact.js";

export default{
    name: 'app',
    components: {entreprise}
    //components: {ajoutcontact,ajout,entreprise},
};

const app = createApp({
    data(){
        return{
            entreprises: [
                {content: "Ace Web Jungle", contacts: ['personne 1','personne 2']},
                {content: "Octave", contacts: ['test']}
            ],
        }
    },
    methods:{
        inverser(){
            this.entreprises.reverse();
        },
        ajouter(message){
            this.entreprises.push({content: message, contacts: []});
        },
        ajoutercontact(entreprise,contact){
            this.entreprises[entreprise].contacts.push(contact);
        }
    },
    compilerOptions: {
        isCustomElement: tag => tag === 'ajout' || tag === 'ajoutcontact' || tag === 'entreprise'
    }
})

app.component('entreprise', entreprise)

//app.component('ajout', ajout)

//app.component('ajoutcontact', ajoutcontact)

app.mount('#App');
