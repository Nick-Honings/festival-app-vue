<template>
    <div id="app">
        <vs-row >
            <vs-col vs-w="12">
                <Navigationbar />
            </vs-col>
        </vs-row>
        <vs-row>
            <div class="layout-main">
                <vs-col vs-w="1">
                </vs-col>
            </div>
            <vs-col vs-w="11">
                <div>
                    <router-view/>
                </div>
            </vs-col>
        </vs-row>

    </div>
</template>

<script src="./app.view.js"></script>
<style src="./app.css"></style>

<!--<template>-->
<!--  <div id="app">-->

<!--    <Header></Header>-->

<!--    <Sidebar/>-->
<!--    <Festivals/>-->

<!--  </div>-->
<!--</template>-->

<!--<script src="./app.view.js"></script>-->
<!--<style src="./app.css"></style>-->
