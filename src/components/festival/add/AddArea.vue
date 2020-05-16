<template lang="html">
    <div>

        <vs-list v-for="(a, index) in areas" :key="index">
            <vs-list-item :title="a.name" :subtitle="a.genre">
                <vs-button @click="removeArea(index)" color="danger" type="flat" icon="clear" size="small"></vs-button>
            </vs-list-item>
        </vs-list>

        <vs-divider></vs-divider>

        <vs-input
                label="Name"
                v-model="area.name"
                :danger = validator.isNullOrEmpty(area.name)
                danger-text="This field can not be empty"
        />

        <vs-input
                label="Genre"
                v-model="area.genre"/>

        <vs-button @click="goBack(0)">Back</vs-button>
        <vs-button  @click="addArea">Add</vs-button>
        <vs-button @click="save">Next</vs-button>

    </div>
</template>

<script>
    import validator from '../../../validators/general';

    export default {
        name: "AddArea",

        props: {
            areaInput: Array,
        },

        mounted() {
          this.areas = this.areaInput;
        },

        data: () => {
            return {
                areas: [],
                area: {
                    name: "",
                    genre: "",
                    artists: [],
                },
                validator: validator

            }
        },

        methods: {

            save() {
                this.$emit('add-areas', this.areas);
            },


            addArea(){
                this.areas.push({name: this.area.name, genre: this.area.genre, artists: []});
            },

            removeArea(index){
                this.areas.splice(index, 1);
                this.$log.debug(this.areas);
            },

            goBack(index){
                this.$emit('go-back', index);
            }


        },





    }
</script>



<style scoped>

</style>
