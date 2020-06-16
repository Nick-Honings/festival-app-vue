<template lang="html">
    <div>
        <vs-button
                @click="activePrompt = true"
                color="primary"
                icon="create"
                type="line"
                ine-origin="left"></vs-button>


        <vs-prompt
                @cancel="cancel"
                @accept="acceptAlert"
                accept-text="Save"
                @close="close"
                :active.sync="activePrompt">
            <div class="con-exemple-prompt">
                Edit this event and save when you're done.
                <vs-input placeholder="Name" v-model="festival.name"/>
                <vs-input placeholder="Date" v-model="festival.date"/>
                <vs-input placeholder="Price" v-model="festival.price"/>
                <vs-input placeholder="Location" v-model="festival.location"/>
                <vs-input placeholder="Time" v-model="festival.time"/>
            </div>
        </vs-prompt>
    </div>
</template>

<script>
   //import Vue from 'vue'

    export default {
        name: 'EditDialog',

        props: {
            festival: Object
        },

        data(){
            return {
                activePrompt:false,
            }
        },
        computed:{

        },
        methods:{
            acceptAlert(){
                this.$emit('edit-event', this.festival);
            },
            cancel(){
              this.$vs.notify({
                  color: 'danger',
                  title: 'Event not saved'
              })
            },
            close(){
                this.$vs.notify({
                    color:'danger',
                    title:'Closed editor',
                })
            },
        }
    }
</script>

<style lang="stylus">
    .con-exemple-prompt
        padding 10px;
        padding-bottom 0px;
        .vs-input
            width 100%
            margin-top 10px;
</style>
