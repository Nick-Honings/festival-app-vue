<template>
    <div>
        <center-container>
            <vs-row vs-justify="center">
                <vs-col type="flex" vs-justify="center" vs-align="center">
                    <vs-card>
                        <div slot="header">
                            Register
                        </div>
                        <RegisterForm v-on:register="signUp"/>
                    </vs-card>
                </vs-col>
            </vs-row>
        </center-container>
    </div>
</template>

<script>
    import auth from "../../api/auth";
    import RegisterForm from "../../components/register/RegisterForm";

    export default {
        name: "Register",
        components: {RegisterForm},

        methods: {
            signUp(user){
                auth.signUp(user).then(response => {
                    this.$log.info(response);
                    if(response.status === 200) {
                        this.$vs.notify({
                            color: 'succes',
                            title: 'Succesfull registration!'
                        });
                        this.$router.push("/");
                    }
                    else {
                        this.$vs.notify({
                            color: 'danger',
                            title: 'Whoops, something went wrong!',
                            text: 'Please try again'
                        })
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>
