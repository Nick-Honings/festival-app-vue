<template>
    <div>
        <div v-if="areas.length !== 0">
            <vs-collapse v-for="(a, i) in areas" :key="i">
                <vs-collapse-item>
                    <div slot="header">
                        <h4>{{a.name}} - {{a.genre}}</h4>
                    </div>
                    <vs-list v-for="(artist, j) in areas[i].artists" :key="j">
                        <vs-list-item :title="artist.name" :subtitle="artist.genre">
                            <vs-button @click="removeArtist(j)" color="danger" type="flat" icon="clear" size="small"></vs-button>
                        </vs-list-item>
                    </vs-list>

                    <vs-divider></vs-divider>
                    <vs-input
                            label="Name"
                            v-model="artist.name"
                            :danger="validator.isNullOrEmpty(artist.name)"
                            danger-text="This field can not be empty"
                    />
                    <vs-button @click="addArtist(i)">Add</vs-button>


                </vs-collapse-item>
            </vs-collapse>


        </div>
        <div v-else>
            <p>Add at least one area to add artists!</p>
        </div>
        <vs-button @click="goBack(1)">Back</vs-button>
        <vs-button @click="save">Save</vs-button>


    </div>
</template>

<script>
    import validator from '../../validators/general';

    export default {
        name: "AddArtist",

        props: {
          areas: Array
        },

        data: () => {
            return{
                areaArray: [],

                artist: {
                    name: "",
                },
                validator: validator,
            }
        },

        mounted() {
            this.areaArray = this.areas;
        },

        methods: {
            addArtist(index){
                this.$log.debug("ARTIST", this.artist);
                this.areaArray[index].artists.push({name: this.artist.name});
                this.artist.name = "";
                this.$log.debug("the areas: ", this.areaArray);

            },

            removeArtist(areaIndex, artistIndex){
                this.areas[areaIndex].artists.splice(artistIndex, 1);
            },

            save(){
                this.$emit('add-artists', this.areaArray);
            },

            goBack(index){
                this.$emit('go-back', index);
            }

        }

    }
</script>

<style scoped>

</style>
