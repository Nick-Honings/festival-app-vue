<template>

<!--        <div class="card" style="width: 18rem;">-->
<!--            <div class="card-body">-->
<!--                <div v-if="!canEdit">-->
<!--                    <h5 class="card-title">{{festival.name}}</h5>-->
<!--                    <h6 class="card-subtitle mb-2 text-muted">Category: </h6>-->
<!--                    <p class="card-text">Price: {{festival.price}}</p>-->
<!--                    <p class="card-text">Date: {{festival.date}}</p>-->
<!--                    <button @click="beginEdit">Edit</button>-->
<!--                </div>-->
<!--                <div v-else>-->
<!--                    <input type="text" v-model="name" name="name" :placeholder="festival.name">-->
<!--                    <date-pick-->
<!--                            v-model="date"-->
<!--                            :format="'DD.MM.YYYY'"-->
<!--                    ></date-pick>-->
<!--                    <button @click="endEdit">Edit</button>-->
<!--                </div>-->


<!--            </div>-->
<!--        </div>-->


    <vs-card class="cardx" fixedHeight>


        <div style="padding-bottom: 40px">

            <div slot="header">
                <h3>{{festival.name}}</h3>
            </div>
            <div slot="media">
                <img alt="picture">
            </div>

            <vs-list>
                <vs-list-header title="General information">
                </vs-list-header>
                <vs-list-item title="Date" :subtitle="getTimeString(festival.date)"></vs-list-item>
                <vs-list-item title="Price" :subtitle="'€' + festival.price"></vs-list-item>
            </vs-list>
        </div>

        <div slot="footer">
            <vs-row vs-justify="flex-end">
<!--                <vs-button @click="popupActivo2=true" color="primary" type="filled">Open Popup</vs-button>-->

                <vs-button type="gradient" color="danger" icon="favorite"></vs-button>
                <vs-button type="gradient" color="primary" icon="create" @click="canEdit=true"></vs-button>
                <EditFestival v-if="canEdit" :festival="festival" v-on:edit-event="endEdit"/>


            </vs-row>
        </div>
    </vs-card>




</template>

<script src="./festivalitem.component.js"></script>

<style scoped src="./festivalitem.css"></style>
