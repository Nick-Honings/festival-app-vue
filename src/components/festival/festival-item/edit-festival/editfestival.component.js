
export default {


    name: "EditFestival",

    props:{
        festival: Object,
        popupActive: false,
        isSaved: false
    },

    data(){
        return {
            //popupActive: true,
            // isSaved: false
        }
    },

    methods: {

        saveEdit(event){
            this.$log.debug('Try to save event: ', event);
            //this.isSaved = true;
            //this.popupActive = false;
            this.$emit('edit-event', event);
        }
    },



}
