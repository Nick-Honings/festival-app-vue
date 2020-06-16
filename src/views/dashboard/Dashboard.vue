<template>
    <div id="content">
        <vs-row vs-justify="center" vs-w="12">
            <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="3">
                <WelcomeCard :username="username"/>
            </vs-col>
            <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="3">
                <UpcomingCard/>
            </vs-col>
        </vs-row>
        <vs-row vs-justify="center" vs-w="12">
            <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="3">
                <StatisticsCard/>
            </vs-col>
            <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="3">
                <FinancialCard/>
            </vs-col>
        </vs-row>
    </div>
</template>

<script>
    import WelcomeCard from "../../components/dashboard/welcome/WelcomeCard";
    import {mapState} from "vuex";
    import UpcomingCard from "../../components/dashboard/upcoming/UpcomingCard";
    import StatisticsCard from "../../components/dashboard/statistics/StatisticsCard";
    import FinancialCard from "../../components/dashboard/financial/FinancialCard";

    export default {
        name: "Dashboard",
        components: {
            FinancialCard,
            StatisticsCard,
            UpcomingCard,
            WelcomeCard
        },

        computed: {
            ...mapState({
                username: state => `${state.user.profile.username}`
            })
        }
    }
</script>

<style scoped>

</style>
