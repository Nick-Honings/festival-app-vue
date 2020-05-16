<template>
    <div>
        <loading v-if="loading"/>
        <div v-if="isAuthenticated">

        </div>
        <center-container>
            <div v-if="!isAuthenticated && authStatus !== 'loading'">
                <vs-row vs-justify="center">
                    <vs-col type="flex" vs-justify="center" vs-align="center">
                        <vs-card >
                            <div slot="header">
                                Welcome to Events Planner
                            </div>
                            <!--                        <div slot="media">-->
                            <!--                            <Carousel/>-->
                            <!--                        </div>-->
                            <div>
                                <p>For all your activities, Events planner meets your needs!</p>
                                <LoginForm/>


                            </div>
                        </vs-card>
                    </vs-col>
                </vs-row>


            </div>
        </center-container>

    </div>
</template>

<script>
    import { mapGetters } from "vuex";
    import Carousel from "../../components/home/Carousel";
    import LoginForm from "../../components/login/LoginForm";

    export default {
        name: "Home",
        components: {
            LoginForm,
            // eslint-disable-next-line vue/no-unused-components
            Carousel
        },

        computed: {
            ...mapGetters(["isAuthenticated", "authStatus"]),
            loading: function() {
            return this.authStatus === "loading" && !this.isAuthenticated;
            }
        },
    };
</script>

<style scoped>
    .home {
        display: flex;
        align-items: center;
        flex-direction: column;
    }

</style>
