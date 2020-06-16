<template>
    <vs-row vs-justify="center" vs-align="center" vs-w="12">
        <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="6">
            <div v-if="isLoaded">
                <vs-card style="background-color: rgba(255,255,255,0.6)" class="cardx">
                    <div slot="header">
                        <h1>{{this.festival.name}}</h1>

                    </div>


                    <vs-list>
                        <vs-list-header title="General information"></vs-list-header>
                        <vs-list-item title="Date" :subtitle="festival.date"></vs-list-item>
                        <vs-list-item title="Price" :subtitle="festival.price"></vs-list-item>
                        <vs-list-item title="Location" :subtitle="festival.location"></vs-list-item>
                        <vs-list-item title="Starts at" :subtitle="festival.time"></vs-list-item>

                        <vs-list-header title="Areas"></vs-list-header>
                        <div v-for="(area, index) in areas" :key="index">
                            <vs-list-item :title="area.name" :subtitle="area.genre"></vs-list-item>
                        </div>

                        <vs-list-header title="Artists"></vs-list-header>
                    </vs-list>
                    <vs-button type="line" line-origin="left" @click="navigateBack">Go back</vs-button>
                    <vs-button type="line" line-orgin="left" @click="$router.push(`/events/${festival.id}/edit`)">Edit</vs-button>
                </vs-card>
            </div>
        </vs-col>

    </vs-row>


</template>

<script>
    import router from '../../../router/index';
    import festivalApi from '../../../api/festival'
    import areaApi from '../../../api/area';

    export default {
        name: "FestivalSummary",


        props: {

        },

        data () {
            return {
                id: 0,
                festival: '',
                areas: [],
            }
        },


        created(){
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


            areaApi.getById(this.id)
                .then((response) => {
                    this.areas = response.data;
                    console.log(this.areas)
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

        methods:{
            navigateBack(){
                router.go(-1);
            }
        }

    }
</script>

<style scoped>

</style>
