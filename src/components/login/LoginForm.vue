<template>
    <div>
        <form class="login" @submit.prevent="login">
            <h1>Sign in</h1>
            <label>User name</label>
            <input required v-model="username" type="text" placeholder="Snoopy"/>
            <label>Password</label>
            <input required v-model="password" type="password" placeholder="Password"/>
            <hr/>
            <button type="submit">Login</button>
        </form>
    </div>
</template>

<script>
    import {AUTH_REQUEST} from "../../auth/actions/auth";
    import { TOKEN} from "../../api/request-config";

    export default {
        name: "LoginForm",

        data: () => {
            return {
                username: '',
                password: ''
            };
        },
        methods: {
            login: function () {
                const { username, password } = this;
                this.$store.dispatch(AUTH_REQUEST, { username, password }).then(() => {

                    console.log("Token set:", TOKEN);
                    this.$router.push("/events");

                });
            }
        }

    }
</script>

<style scoped>
    .login {
        display: flex;
        flex-direction: column;
        width: 300px;
        padding: 10px;
    }
</style>
