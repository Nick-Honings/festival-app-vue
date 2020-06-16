<template>
    <div id="content">
        <vs-card class="cardx" style="background-color: rgba(255,255,255,0.6); margin-top: 10px">
            <div slot="header">
                <h3>
                    Welcome {{username}}
                </h3>
            </div>
            <div>
                <span>
                    This is your dashboard. In here you will find an overview of every event you have attended or will in the future.
                    This site is made to let you enjoy your festivals more and not worry about the petty stuff.
                    Don't worry, we will take care of this!

                </span>
            </div>
        </vs-card>
    </div>
</template>

<script>
    export default {
        name: "WelcomeCard",

        props: {
            username: {
                type: String
            }
        }
    }
</script>

<style scoped>

</style>
