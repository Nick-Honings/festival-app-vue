


<template lang="html">

    <div id="parentx=static">

        <vs-sidebar default-index="1" :parent="parent" :active="active" color="primary" class="sidebarx" spacer v-model="active">

            <div class="header-sidebar" slot="header">
                <h2>
                    Festival app
                </h2>
            </div>


            <vs-sidebar-item index="1" icon="dashboard">
                Dashboard
            </vs-sidebar-item>

            <vs-sidebar-item index="2" icon="gavel">
                Events
            </vs-sidebar-item>

            <vs-sidebar-item index="3" icon="date_range">
                Agenda
            </vs-sidebar-item>

            <vs-sidebar-item index="4" icon="assessment">
                Finances
            </vs-sidebar-item>

            <vs-divider></vs-divider>

            <vs-sidebar-item index="5" icon="account_box">
                Profile
            </vs-sidebar-item>

            <vs-sidebar-item index="6" icon="settings">
                Settings
            </vs-sidebar-item>

        </vs-sidebar>
    </div>

</template>

<script>
    export default {
        name: 'sidebar',
        props: {
            parent:{
                type: String
            },
            active: {
                type: Boolean
            }
        },


        data:()=>({
            // active:false,
            notExpand: false,
            reduce: true
        })
    }
</script>

<style lang="stylus">
    .header-sidebar
        display flex
        align-items center
        justify-content center
        flex-direction column
        width 100%
        h4
            display flex
            align-items center
            justify-content center
            width 100%
            > button
                margin-left 10px
    .footer-sidebar
        display flex
        align-items center
        justify-content space-between
        width 100%
        > button
            border 0px solid rgba(0,0,0,0) !important
            border-left 1px solid rgba(0,0,0,.07) !important
            border-radius 0px !important
</style>
