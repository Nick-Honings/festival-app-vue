<template>
    <div>


        <vs-row vs-w="12" >
            <vs-col vs-w="2"></vs-col>
            <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="8">
                <vc-calendar
                        style="margin-top: 12px"
                        :theme="themeStyles"
                        nav-visibility="hover"
                        is-expanded
                        v-on:dayclick="navigateToEvent"
                        :attributes="attrs">
                </vc-calendar>
            </vs-col>
            <vs-col vs-w="2"></vs-col>
        </vs-row>

        <vs-row>
            <vs-col vs-w="2"></vs-col>
            <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="8">
                <vs-card style="margin-top: 12px" >
                    <vs-list>
                        <vs-list-header title="Upcoming"></vs-list-header>
                        <div  v-bind:key="festival.date" v-for="festival in festivals">
                            <vs-list-item :title="festival.name" :subtitle="festival.date"></vs-list-item>
                        </div>
                    </vs-list>
                </vs-card>
            </vs-col>
            <vs-col vs-w="2"></vs-col>
        </vs-row>
    </div>
</template>

<script>
    import api from "../../api/festival";

    export default {
        name: 'Calendar2',
        components: { },
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
            api.getAllByUserId(19)
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

            }
        }
    }
</script>

<style scoped>

</style>
