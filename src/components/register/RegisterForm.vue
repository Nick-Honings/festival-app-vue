<template>
    <div>
        <vs-row type="flex" vs-justify="center" vs-align="center">
            <vs-col>
                <h1>Sign in</h1>
            </vs-col>
            <vs-col vs-justify="center" vs-align="center">
                <div id="username-input">
                    <vs-input
                            name="username"
                            type="text"
                            label="Username"
                            v-model="user.name"
                            :danger="validator.isNullOrEmpty(user.name)"
                            danger-text="This field can not be empty"
                    ></vs-input>
                </div>

                <div id="password-input">
                    <vs-input
                            name="password"
                            type="password"
                            label="Password"
                            v-model="user.password"
                            :danger="!validator.isValidPassword(user.password)"
                            danger-text="Password must be at least 6 characters long and contain at least one number, one uppercase character and one lowercase character"
                    ></vs-input>
                </div>


                <div id="confirm-pass-input">
                    <vs-input
                            name="confirm-pass"
                            type="password"
                            label="Confirm password"
                            v-model="confirmPassword"
                            :danger="!validator.passWordsMatch(user.password, confirmPassword)"
                            danger-text="Passwords do not match!"
                    ></vs-input>
                </div>


                <div id="email-input">
                    <vs-input
                            name="email"
                            type="email"
                            label="Email"
                            v-model="user.email"
                            :danger="!validator.isValidEmail(user.email)"
                            danger-text="Not a valid email!"
                    ></vs-input>
                </div>

            </vs-col>
        </vs-row>

        <div v-if="validator.isValidModel(validModel)">
            <vs-button id="register-btn-enabled" @click="register">Register</vs-button>
        </div>
        <div v-else>
            <vs-button id="register-btn-disabled" disabled>Register</vs-button>
        </div>
    </div>
</template>

<script>
    import validator from '../../validators/general'

    export default {
        name: "RegisterForm",

        data: () => {
            return {
                validModel: {
                    username: false,
                    password: false,
                    passwordMatch: false,
                    email: false
                },
                user: {
                    name: '',
                    password: '',
                    email: ''
                },
                confirmPassword: '',
                validator: validator
            }
        },

        methods: {
            register: function() {
                const newUser = {
                    username: this.user.name,
                    password: this.user.password,
                    email: this.user.email
                }
                this.$log.info("The user", newUser)
                this.$emit('register', newUser);

            },
        },

        watch: {
            "user.name": function(value) {
                this.user.name = value;
                if(validator.isNullOrEmpty(value) === false){
                    this.validModel.username = true;
                }
                else {
                    this.validModel.username = false;
                }
            },

            "user.password": function (value) {
                if(validator.isValidPassword(value)) {
                    this.validModel.password = true;
                }
                else {
                    this.validModel.password = false;
                }
            },

            "user.email": function (value) {
                if(validator.isValidEmail(value))
                {
                    this.validModel.email = true;
                }
                else {
                    this.validModel.email = false;
                }
            },

            "confirmPassword": function (value) {
                if(validator.passWordsMatch(this.user.password, value)){
                    console.log("confirmpassword true");
                    this.validModel.passwordMatch = true;
                }
                else{
                    console.log("confirmpassword false");
                    this.validModel.passwordMatch = false;
                }
            }
        },
    }
</script>

<style scoped>

</style>
