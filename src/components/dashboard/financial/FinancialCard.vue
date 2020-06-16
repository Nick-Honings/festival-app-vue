<template>
    <div id="content">
        <vs-card class="cardx" style="background-color: rgba(255,255,255,0.6); margin-top: 10px; margin-left: 20px;">
            <div slot="header">
                <h3>Financials</h3>
            </div>
            <div>
                <span>This is your currently selected financial plan.</span>
                <vs-divider></vs-divider>

                <p>Currently selected plan: </p>
                <p>Saving for: </p>
                <p>Saved money: </p>
                <p>Money to go: </p>
            </div>
        </vs-card>
    </div>
</template>

<script>
    export default {
        name: "FinancialCard"
    }
</script>

<style scoped>

</style>
