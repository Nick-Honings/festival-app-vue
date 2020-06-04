<template>
    <div>
        <vs-row type="flex" vs-justify="center" vs-align="center">
            <vs-col >
                <h1>Sign in</h1>
            </vs-col>
            <vs-col>
                <vs-input
                        type="text"
                        label="Username"
                        v-model="username"

                ></vs-input>
                <vs-input
                        type="password"
                        label="Password"
                        v-model="password"

                />
<!--                :danger="!validator.isValidPassword(password)"-->
<!--                danger-text="Password must be at least 6 characters long and contain at least one number, one uppercase character and one lowercase character"-->
            </vs-col>

        </vs-row>
        <hr/>
        <vs-row vs-type="flex" vs-justify="space-around">
            <vs-col vs-type="flex"  vs-align="left" vs-w="22">

                <vs-button @click="login">Login</vs-button>


                <div style="justify-content: right">
                    <vs-button @click="$router.push('/register')">Register</vs-button>

                </div>

            </vs-col>


        </vs-row>


    </div>
</template>

<script>
    import validator from '../../validators/general'

    import {AUTH_REQUEST} from "../../auth/actions/auth";
    import { TOKEN} from "../../api/request-config";

    export default {
        name: "LoginForm",

        data: () => {
            return {
                validModel: {
                    username: false,
                    password: true
                },
                username: '',
                password: '',
                validator: validator,
                firstTimeView: true
            };
        },
        methods: {
            login: function () {
                const { username, password } = this;
                this.$store.dispatch(AUTH_REQUEST, { username, password }).then(() => {

                    console.log("Token set:", TOKEN);
                    this.$router.push("/dashboard");

                });
            }
        },

        watch: {
            "username": function(value) {
                this.username = value;
                if(validator.isNullOrEmpty(value) === false) {
                    this.validModel.username = true;
                }
                else {
                    this.validModel.username = false;
                }
            },

            "password": function(value) {
                this.password = value;
                console.log("called");
                if(validator.isValidPassword(value)) {
                    this.validModel.password = true;
                }
                else {
                    this.validModel.password = false;

                }
            }
        },

        computed: {

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
