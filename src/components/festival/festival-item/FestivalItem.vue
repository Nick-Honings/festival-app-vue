<template>
    <vs-card style="background-color: rgba(255,255,255,0.6)" class="cardx" fixedHeight>


        <div style="padding-bottom: 40px">

            <div slot="header">
                <h2>{{festival.name}}</h2>
            </div>
            <div slot="media">
                <img alt="picture">
            </div>

            <vs-list style="font-size: large">
                <vs-list-header  title="General information">
                </vs-list-header>
                <vs-list-item title="Date" :subtitle="getTimeString(festival.date)"></vs-list-item>
                <vs-list-item title="Price" :subtitle="'€' + festival.price"></vs-list-item>

                <vs-collapse>
                    <vs-collapse-item @click="this.expanded = !this.expanded" :open="expanded">
                        <div slot="header">
                            {{canExpand}}
                        </div>
                        <vs-list-item title="Location" :subtitle="festival.location"></vs-list-item>
                        <vs-list-item title="Tme" :subtitle="festival.time"></vs-list-item>
                        <vs-list v-for="(area, index) in filter(2)" :key="index">
                            <Area v-bind:area="area"/>
                        </vs-list>
                        <vs-button
                                type="line"
                                line-origin="left"
                                color="primary"

                                :to="{name: 'Event information', params: {id: festival.id}}">Show all</vs-button>

                    </vs-collapse-item>
                </vs-collapse>

            </vs-list>
        </div>

        <div slot="footer">
            <vs-row vs-justify="flex-end">
                <vs-button type="line" line-origin="left" color="danger" icon="favorite"></vs-button>

                <EditDialog
                        :festival="festival"
                        v-on:edit-event="endEdit"
                />
                <vs-button type="line" line-origin="left" color="danger" icon="delete" @click="deleteEvent(festival.id)"></vs-button>
            </vs-row>
        </div>
    </vs-card>
</template>

<script src="./festivalitem.component.js">
</script>

<style scoped src="./festivalitem.css"></style>
