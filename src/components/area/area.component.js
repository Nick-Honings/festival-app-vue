
export default {
    name: "Area",

    props: {
        area: Object,
    },

    data: function(){
        return{
            expanded: true,
            canEdit: false,
        }
    },


    // mounted() {
    //     api.getById(this.festivalId)
    //         .then(response => {
    //             this.$log.debug("Areas loaded: ", response.data);
    //             this.areas = response.data
    //             this.$log.debug("the areas: " , this.areas);
    //         })
    //         .catch(error => {
    //             this.$log.debug(error);
    //         })
    // }


}
