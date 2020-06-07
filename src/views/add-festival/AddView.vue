<template>
    <div>
        <vs-row vs-justify="center">
            <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="3">
                <vs-card style="background-color: rgba(255,255,255,0.6); padding-top: 20px" class="cardx">

                    <vs-tabs v-model="selectedView">
                        <vs-tab @click="selectedView = 0" label="General">
                        </vs-tab>
                        <vs-tab @click="selectedView = 1" label="Areas">
                        </vs-tab>
                        <vs-tab @click="selectedView = 2" label="Artists">
                        </vs-tab>
                    </vs-tabs>

                    <div slot="header">

                        <vs-row>

                            <vs-col vs-offset="2" vs-type="flex" vs-justify="center" vs-align="center" vs-w="8">
                                <vs-button to="/events" type="flat"  icon="arrow_back"></vs-button>
                                <h3 style="text-align: center">Add an event</h3>
                            </vs-col>
                        </vs-row>

                        <vs-progress :percent="progress" color="primary">primary</vs-progress>

                    </div>
                    <vs-row vs-justify="center">
                        <AddFestival2
                                v-if="selectedView === 0"
                                v-on:add-general="setFestival"
                                :festivalInput="festival"
                        ></AddFestival2>
                        <AddArea
                                v-if="selectedView === 1"
                                v-on:add-areas="setAreas"
                                v-on:go-back="changeView"
                                :areaInput="areas"

                        ></AddArea>
                        <AddArtist
                                v-if="selectedView === 2"
                                v-on:add-artists="setArtists"
                                v-on:go-back="changeView"
                                :areas="areas"
                        ></AddArtist>
                    </vs-row>
                </vs-card>
            </vs-col>
        </vs-row>

    </div>
    
</template>

<script>
    import AddArea from "../../components/festival/add/AddArea";
    import AddFestival2 from "../../components/festival/add/AddFestival2";
    import AddArtist from "../../components/artist/AddArtist";
    import api from "../../api/festival";

    export default {
        name: "AddView",

        components: {
            AddFestival2,
            AddArea,
            AddArtist
        },

        data: () => {
            return {
                selectedView: 0,
                progress: 0,

                festival: {
                    name: '',
                    date: '',
                    price: '',
                    location: '',
                    time: '',
                },
                areas: [],
                artists: []
            }
        },

        methods: {

            setFestival(festival){
                this.festival = festival;
                this.$log.debug("The festival properties: ", this.festival);
                this.changeView(1);
                this.changeProgress(33);
            },

            setAreas(areas){
                this.areas = areas;
                this.$log.debug("The areas: ", this.areas);
                this.changeView(2);
                this.changeProgress(66);
            },

            setArtists(areas){
                this.areas = areas;
                this.$log.debug("The artists: ", this.areas);
                this.changeProgress(100);
                this.saveEvent();
            },

            changeView(index){
                this.selectedView = index;
            },

            changeProgress(value){
                this.progress = value;
            },

            saveEvent(){

                const newEvent = {
                    name: this.festival.name,
                    date: this.festival.date,
                    price: this.festival.price,
                    location: this.festival.location,
                    time: this.festival.time,
                    user: this.festival.user,
                    areas: this.areas
                }

                this.$log.debug("the created event: ", newEvent);
                this.$emit('add-event', newEvent);
                api.createNew(newEvent).then((response) => {
                    if(response.status === 200){
                        this.$vs.notify({
                            color:'success',
                            title:'Event added successfully!',
                        })
                    }
                    else{
                        this.$vs.notify({
                            color: 'danger',
                            title: 'Whoops, something went wrong!',
                            text: 'Please try again'
                        })
                    }
                });
            },

            formatTimeString(value) {
                let format = value.replace(/\./g, '-');
                this.$log.debug(format);
                return format.split("-").reverse().join("-");
            },
        }

    }
</script>

<style scoped>

</style>
