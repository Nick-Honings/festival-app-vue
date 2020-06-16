<template>
    <div>

        <vs-input
                type="text"
                label="Name"
                v-model="festival.name"
                :danger="validator.isNullOrEmpty(festival.name)"
                danger-text="This field can not be empty"
        ></vs-input>
        <p>Date</p>
        <date-dropdown max="2025" v-model="festival.date" ></date-dropdown>



        <vs-divider>Optional</vs-divider>

        <vs-input type="number" label="Price" v-model="festival.price"></vs-input>
        <vs-input type="text" label="location" v-model="festival.location"></vs-input>
        <vs-input type="text" label="time" v-model="festival.time"></vs-input>


        <div v-if="validModel">
            <vs-button @click="add">Next</vs-button>
        </div>


    </div>
</template>

<script>
    import validator from '../../../validators/general';

    import moment from "moment";
    import DateDropdown from 'vue-date-dropdown';
    import api from '../../../api/festival';

    export default {
        name: "AddFestival2",

        props: {
            festivalInput: Object
        },


        components:  {
            DateDropdown,
        },

        mounted() {
            this.festival = this.festivalInput;
        },

        data:() => {
          return{
              validModel: false,

              festival: {
                  name: null,
                  date: null,
                  price: null,
                  location: null,
                  time: null,
              },
              validator: validator,
              selectedView: 0,
              selectedDate: null,

          }
        },

        watch: {
            "festival.name": function (value){
                this.festival.name = value;
                if(validator.isNullOrEmpty(value) === false) {
                    this.validModel = true;
                }
                else{
                    this.validModel = false;
                }

            }

        },

        methods: {



            add() {
                const newEvent = {
                    name: this.festival.name,
                    date: this.formatTimeString(this.festival.date),
                    price: this.festival.price,
                    location: this.festival.location,
                    time: this.festival.time,
                    applicationuser_id: this.$store.getters.getProfile.id
                };
                this.$log.debug('the event added: ', newEvent);
                this.$emit('add-general', newEvent);
            },

            addEvent(e){
                e.preventDefault();
                const newEvent = {
                    name: this.festival.name,
                    date: this.formatTimeString(this.festival.date),
                    price: this.festival.price,
                    location: this.festival.location,
                    time: this.festival.time
                }
                //this.$log.debug(this.formatTimeString(this.festival.date));
                //this.$emit('add-event', newEvent);
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
                this.clearForm();
            },

            getTimeString(value){
                return moment(String(value)).format('YYYY/MM/DD');
            },

            formatTimeString(value) {
                let format = value.replace(/\./g, '-');
                this.$log.debug(format);
                return format.split("-").reverse().join("-");
            },

            clearForm(){
                this.festival.name = '';
                this.festival.date = '';
                this.festival.price = '';
                this.festival.time = '';
                this.festival.location = '';
            },
        }

    }
</script>

<style scoped>

</style>
