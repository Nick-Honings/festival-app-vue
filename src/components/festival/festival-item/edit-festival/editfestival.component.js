export default {
    name: "EditFestival",

    props:{
        festival: Object,
        // popupActive: false,
    },

    data(){
        return {
            popupActive: true,
            isSaved: false
        }
    },

    methods: {

        saveEdit(event){
            this.$log.debug('Try to save event: ', event);
            // this.popupActive = false;
            this.$emit('edit-event', event);
            this.isSaved = true;
        }
    },



}
