<template>
    <div>
        <vs-navbar v-model="activeItem" class="nabarx" color="dark">
            <div slot="title">
                <vs-navbar-title>
                    <h4>Events Planner</h4>
                </vs-navbar-title>
            </div>



            <vs-navbar-item v-if="isProfileLoaded && isAuthenticated" index="1">
                <p>Welcome {{name}}</p>
            </vs-navbar-item>
            <vs-navbar-item v-if="isAuthenticated" index="0">
                <vs-button type="line" @click="logout">Logout</vs-button>
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
                name: state => ` ${state.user.profile.username}`
            })
        },

        data: () => ({
            activeItem: 0
        })
    }
</script>

<style scoped>
    p {
        color: white;
    }
    h4 {
        color: white;
    }
    .welcomeMessage {
        justify-content: center;
    }


</style>
