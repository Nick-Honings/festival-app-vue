<template>
    <vs-card style="margin-top: 12px; background-color: rgba(255,255,255,0.6)" >
        <vs-list>
            <vs-list-header title="Upcoming"></vs-list-header>
            <div  v-bind:key="festival.date" v-for="(festival, index) in festivals">
                <vs-list-item :title="festival.name" :subtitle="festival.date">
                    <div v-if="festival.attendance === 'Undefined'">
                        <vs-button radius @click="setGoing(index)" size="small" color="success" type="flat" icon="check"></vs-button>
                        <vs-button radius @click="setMaybeGoing(index)" size="small" color="warning" type="flat" icon="help_outline"></vs-button>
                        <vs-button radius @click="setNotGoing(index)" size="small" color="danger" type="flat" icon="clear"></vs-button>
                    </div>
                    <div v-else-if="festival.attendance === 'IsGoing'">
                        <vs-chip color="success">
                            Going!
                        </vs-chip>
                        <vs-button radius @click="setUndefined(index)" size="small" type="flat" icon="clear"></vs-button>
                    </div>
                    <div v-else-if="festival.attendance === 'IsMaybeGoing'">
                        <vs-chip color="warning">
                            Maybe Going!
                        </vs-chip>
                        <vs-button radius @click="setUndefined(index)" size="small" type="flat" icon="clear"></vs-button>

                    </div>
                    <div v-else-if="festival.attendance === 'IsNotGoing'">
                        <vs-chip color="danger">
                            Not Going!
                        </vs-chip>
                        <vs-button radius @click="setUndefined(index)" size="small" type="flat" icon="clear"></vs-button>

                    </div>

                </vs-list-item>
            </div>
        </vs-list>
    </vs-card>
</template>

<script>
    import api from '../../api/festival'

    export default {
        name: "Upcoming",
        props: {
            festivals: {
                type: Array
            }
        },
        data: () => {
            return {

            }
        },

        methods: {
            setUndefined(index){
                let id = this.festivals[index].id;
                api.setAttendance(id, "Undefined")
                    .then(response => {
                        this.$log.info(response);
                        if(response.status === 200){
                            this.$vs.notify({
                                color:'success',
                                title:'Event changed successfully!',
                            });
                            this.festivals[index].attendance = 'Undefined';
                        }
                        else {
                            this.$vs.notify({
                                color: 'danger',
                                title: 'Whoops, something went wrong'
                            });
                        }
                    })
                    // eslint-disable-next-line no-unused-vars
                    .catch(error => {
                        // To do: Error handling
                    })
            },

            setGoing(index) {
                let id = this.festivals[index].id;
                api.setAttendance(id, "IsGoing")
                    .then(response => {
                        this.$log.info(response);
                        if(response.status === 200){
                            this.$vs.notify({
                                color:'success',
                                title:'Event changed successfully!',
                            });
                            this.festivals[index].attendance = 'IsGoing';
                        }
                        else {
                            this.$vs.notify({
                                color: 'danger',
                                title: 'Whoops, something went wrong'
                            });
                        }
                    })
                    // eslint-disable-next-line no-unused-vars
                .catch(error => {
                    // To do: Error handling
                    this.$vs.notify({
                        color: 'danger',
                        title: 'Whoops, something went wrong'
                    });
                })
            },
            setMaybeGoing(index) {
                let id = this.festivals[index].id;
                api.setAttendance(id, "IsMaybeGoing")
                    .then(response => {
                        this.$log.info(response);
                        if(response.status === 200){
                            this.$vs.notify({
                                color:'success',
                                title:'Event changed successfully!',
                            });
                            this.festivals[index].attendance = 'IsMaybeGoing';
                        }
                        else {
                            this.$vs.notify({
                                color: 'danger',
                                title: 'Whoops, something went wrong'
                            });
                        }
                    })
                    // eslint-disable-next-line no-unused-vars
                    .catch(error => {
                        // To do: Error handling
                        this.$vs.notify({
                            color: 'danger',
                            title: 'Whoops, something went wrong'
                        });
                        this.$log.debug(error);
                    })
            },
            setNotGoing(index) {
                this.isNotGoing = !this.isNotGoing;
                let id = this.festivals[index].id;
                api.setAttendance(id, "IsNotGoing")
                    .then(response => {
                        this.$log.info(response);
                        if(response.status === 200){
                            this.$vs.notify({
                                color:'success',
                                title:'Event changed successfully!',
                            });
                            this.festivals[index].attendance = 'IsNotGoing';
                        }
                        else {
                            this.$vs.notify({
                                color: 'danger',
                                title: 'Whoops, something went wrong'
                            });
                        }
                    })
                    // eslint-disable-next-line no-unused-vars
                    .catch(error => {
                        // To do: Error handling
                        this.$vs.notify({
                            color: 'danger',
                            title: 'Whoops, something went wrong'
                        });
                        this.$log.debug(error);
                    })
            }

        }
    }
</script>

<style scoped>

</style>
