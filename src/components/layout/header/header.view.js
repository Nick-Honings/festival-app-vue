export default {
    name: "Header",

    methods: {
        openSideBar(){
            this.$emit('can-expand');
        }
    }
}
