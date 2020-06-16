<template>
    <div>
        <vs-row vs-justify="center">
            <vs-col vs-w="3"></vs-col>
            <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="4">
                <vs-card style="margin-top: 12px; background-color: rgba(255,255,255,0.6)">
                    <div slot="header">
                        <h1>Event calendar</h1>
                    </div>
                    <div>
                        <span>
                            This is your personal calendar. You will find every event you have planned in here.
                            If you do not see any events here, try adding it in the events tab.
                        </span>
                    </div>
                </vs-card>
            </vs-col>
            <vs-col vs-w="2"></vs-col>
        </vs-row>


        <vs-row vs-justify="center">
            <vs-col vs-w="3"></vs-col>
            <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="4">
                <vc-calendar
                        style="margin-top: 12px; background-color: rgba(255,255,255,0.6)"
                        :theme="themeStyles"
                        nav-visibility="hover"
                        is-expanded
                        v-on:dayclick="navigateToEvent"
                        :attributes="attrs">
                </vc-calendar>
            </vs-col>
            <vs-col vs-w="2"></vs-col>
        </vs-row>

        <vs-row vs-justify="center">
            <vs-col vs-w="3" ></vs-col>
            <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="4">
                <Upcoming :festivals="filterOnCurrentDate()" v-if="festivals"/>
            </vs-col>
            <vs-col vs-w="2"></vs-col>
        </vs-row>
    </div>
</template>

<script>
    import api from "../../api/festival";
    import Upcoming from "../../components/upcoming/Upcoming";
    import date from "../../utils/date";

    export default {
        name: 'Calendar2',
        components: {Upcoming },
        data () {
            return {
                festivals: '',
                themeStyles: {
                    wrapper: {
                        border: '1',
                    },
                    header: {
                        color: '#fafafa',
                        backgroundColor: '#f142f4',
                        borderColor: '#404c59',
                        borderWidth: '1px 1px 0 1px',
                    },
                    headerVerticalDivider: {
                        borderLeft: '1px solid #404c59',
                    },
                    weekdays: {
                        color: '#ffffff',
                        backgroundColor: '#f142f4',
                        borderColor: '#ff0098',
                        borderWidth: '0 1px',
                        padding: '5px 0 10px 0',
                    },
                    weekdaysVerticalDivider: {
                        borderLeft: '1px solid #404c59',
                    },
                    weeks: {
                        border: '1px solid #dadada',
                    },
                },
                attrs: [
                    {
                        key: 'today',
                        highlight: true,
                        popover: {
                            label: 'Hover message'
                        },
                        dates: new Date(),
                    },
                ],
            };
        },

        created() {
            let id = this.getCurrentUserId();
            api.getAllByUserId(id)
                .then(response => {
                    this.$log.debug("Data loaded: ", response.data)
                    this.festivals = response.data
                    this.extractDates();
                })
                .catch(error => {
                    this.$log.debug(error)
                    this.error = "Failed to load festivals"
                })
                .finally(() => this.loading = false)

        },

        methods: {
            filterOnCurrentDate(){
                let todaysDate = new Date().toISOString().substring(0,10);
                this.$log.debug("Todays date: ", todaysDate);
                return this.festivals.filter((festival) => {
                    this.$log.debug(festival.date);
                    if(date.isInThePast(festival.date)){
                        return festival;
                    }
                });
            },

            extractDates() {

                let dates = [];
                for (let i = 0; i < this.festivals.length; i++){

                    dates[i] = {
                        key: this.festivals[i].name,
                        highlight: true,
                        popover: {
                            label: this.festivals[i].name
                        },
                        customData: this.festivals[i],
                        isInteractive: true,
                        dates: new Date(this.festivals[i].date)}
                }
                this.attrs = dates;
                console.log("the attributes", dates);
            },

            navigateToEvent(day) {
                if(day !== undefined) {
                    let id = day.attributes[0].customData.id;
                    console.log(day);

                    this.$router.push(`/events/${id}/info`);
                }

            },

            getCurrentUserId() {
                let id = this.$store.getters.getProfile.id;
                this.$log.debug("the id: ", id);
                return id;
            }
        }
    }
</script>

<style scoped>

</style>
