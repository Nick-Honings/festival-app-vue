<template>
    <div class="layout-main">
        <Header/>

        <sidebar parent=".layout-main" :active=isOpen @can-expand="this.openSideBar"></sidebar>


        <div id="content-area">


        </div>

    </div>


</template>

<script>
    import Sidebar from "../../components/layout/sidebar/Sidebar";
    import Header from '../../components/layout/header/Header';

    export default {
        components: {
            Sidebar,
            Header
        },

        // props: {
        //     isActive: {
        //         type: Boolean
        //     }
        // },
        methods: {
          openSideBar(){
              this.isOpen = !this.isOpen;
          }
        },


        data: () => ({
            isOpen: false
        })
    }
</script>

<style scoped src="./main.css"></style>
