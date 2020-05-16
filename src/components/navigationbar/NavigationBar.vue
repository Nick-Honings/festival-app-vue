<template>
    <div>
        <vs-navbar v-model="activeItem" class="nabarx">
            <div slot="title">
                <vs-navbar-title>
                    Events Planner
                </vs-navbar-title>
            </div>


            <vs-nav-item v-if="isProfileLoaded" index="1">
                <router-link to="/profile">Profile</router-link>
            </vs-nav-item>
            <vs-navbar-item v-if="isAuthenticated" index="0">
                <vs-button @click="logout">Logout</vs-button>
            </vs-navbar-item>

        </vs-navbar>
    </div>
</template>

<script>
    import {AUTH_LOGOUT} from "../../auth/actions/auth";
    import { mapGetters, mapState } from "vuex";

    export default {
        name: "NavigationBar",

        methods: {
            logout: function() {
                this.$store.dispatch(AUTH_LOGOUT).then(() => this.$router.push("/"));
            }
        },
        computed: {
            ...mapGetters(["getProfile", "isAuthenticated", "isProfileLoaded"]),
            ...mapState({
                authLoading: state => state.auth.status === "loading",
                name: state => `${state.user.profile.title} ${state.user.profile.name}`
            })
        },

        data: () => ({
            activeItem: 0
        })
    }
</script>

<style scoped>

</style>
