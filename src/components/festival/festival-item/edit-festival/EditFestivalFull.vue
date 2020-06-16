<template>
    <vs-row vs-justify="center" vs-align="center" vs-w="12">
        <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="6">
            <div v-if="isLoaded">
                <vs-card style="background-color: rgba(255,255,255,0.6)" class="cardx">
                    <div slot="header">
                        <h1>{{this.festival.name}}</h1>

                    </div>
                    <div>
                        <span>
                            <vs-collapse >
                                <vs-collapse-item>
                                    <div slot="header">
                                        General Information
                                    </div>
                                    <div class="content">
                                        <vs-input
                                                type="text"
                                                label="Name"
                                                v-model="festival.name"
                                                :danger="validator.isNullOrEmpty(festival.name)"
                                                danger-text="This field can not be empty"
                                        ></vs-input>
                                        <p>Date</p>
                                        <date-dropdown max="2025" v-model="festival.date" ></date-dropdown>
                                        <vs-input type="number" label="Price" v-model="festival.price"></vs-input>
                                        <vs-input type="text" label="location" v-model="festival.location"></vs-input>
                                        <vs-input type="text" label="time" v-model="festival.time"></vs-input>
                                    </div>

                                </vs-collapse-item>
                                <vs-collapse-item >
                                    <div slot="header">
                                        Area information
                                    </div>
                                    <div class="content">
                                        <div v-for="(area, index) in festival.areas" :key="index">
                                            <vs-input type="text" label="Name" v-model="area.name"></vs-input>
                                            <vs-input type="text" label="Genre" v-model="area.genre"></vs-input>
                                            <vs-divider></vs-divider>
                                        </div>
                                    </div>
                                </vs-collapse-item>
                                <vs-collapse-item >
                                    <div slot="header">
                                        Artist Information
                                    </div>
                                    <div class="content">
                                        <div v-for="(area, index) in festival.areas" :key="index">
                                            <div v-for="(artist, j) in area.artists" :key="j">
                                                <vs-input type="text" label="Name" v-model="artist.name"></vs-input>
                                                <vs-input type="text" label="Genre" v-model="artist.genre"></vs-input>
                                            </div>

                                        </div>
                                    </div>
                                </vs-collapse-item>
                            </vs-collapse>
                        </span>
                    </div>

                    <vs-button type="line" line-origin="left" @click="navigateBack">Go back</vs-button>
                    <vs-button type="line" line-origin="left" @click="save">Save</vs-button>

                </vs-card>
            </div>
        </vs-col>

    </vs-row>
</template>

<script>
    import validator from '../../../../validators/general';
    import festivalApi from "../../../../api/festival";
    import router from '../../../../router/index';
    import DateDropdown from 'vue-date-dropdown';

    export default {
        name: "EditFestivalFull",
        components: {
            DateDropdown
        },

        props: {
        },

        data: () => {
          return {
              id: 0,
              festival: '',
              validator: validator
          }
        },

        created() {
            this.id = this.$route.params.id;
            console.log("called");
            festivalApi.getById(this.id)
                .then((response) => {
                    this.festival = response.data;
                    console.log(this.festival);
                })
                .catch((error) => {
                    this.$log.debug(error);
                })
        },

        computed: {
            isLoaded: function() {
                if(Object.prototype.hasOwnProperty.call(this, 'festival') && this.festival != null){
                    this.$log.debug(this.festival)
                    this.$log.debug('isloaded return true');
                    return true;
                }
                this.$log.debug('isloaded return false')
                return false;
            }
        },

        methods: {
            navigateBack() {
                router.go(-1);
            },
            save() {
                this.festival.date = this.formatTimeString(this.festival.date);
                festivalApi.update(this.festival).then((response) => {
                    this.$log.info(response);
                    if(response.status === 200){
                        this.$vs.notify({
                            color:'success',
                            title:'Event saved',
                        })
                    }
                })
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
