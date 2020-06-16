<template>
    <div id="content">
        <vs-card class="cardx" style="background-color: rgba(255,255,255,0.6); margin-top: 10px; margin-left: 20px">
            <div slot="header">
                <h3>Upcoming</h3>
            </div>
            <div>
                <vs-list>
                    <vs-list-header title="Planned: "></vs-list-header>
                    <div v-bind:key="festival.date" v-for="festival in date.filterOnCurrentDate(festivals)">
                        <vs-list-item :title="festival.name" :subtitle="festival.date">

                        </vs-list-item>
                    </div>

                </vs-list>
            </div>
        </vs-card>
    </div>
</template>

<script>
    import api from "../../../api/festival";
    import date from "../../../utils/date";

    export default {
        name: "UpcomingCard",

        data: () => {
            return {
                // Todo: fix TypeError message: cannot read null
                festivals: null,
                date: date
            }
        },

        created() {
            api.getAllByUserId(this.getCurrentUserId())
                .then(response => {
                    this.$log.debug("Data loaded: ", response.data)
                    this.festivals = response.data
                })
                .catch(error => {
                    this.$log.debug(error)
                    this.error = "Failed to load festivals"
                })
        },

        methods: {
            getCurrentUserId() {
                return this.$store.getters.getProfile.id;
            }
        }

    }
</script>

<style scoped>

</style>
