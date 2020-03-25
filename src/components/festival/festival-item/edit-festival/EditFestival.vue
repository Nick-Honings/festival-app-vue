<template>
    <div class="centerx">

            <vs-popup classContent="popup-example"  title="Edit event" :active.sync="popupActive">
                <vs-input class="inputx" placeholder="Name" v-model="festival.name"/>
                <vs-input class="inputx" placeholder="Date" v-model="festival.date"/>
                <vs-input class="inputx" placeholder="Price" v-model="festival.price"/>

                <p>
                    Edit this event and save when you're done.
                </p>

                <p v-if="isSaved">Saved succesfully!</p>
                <vs-button color="primary" type="filled" icon="done" @click="saveEdit(festival)">Save</vs-button>

            </vs-popup>

    </div>
</template>

<script src="./editfestival.component.js"></script>

<style scoped src="./editfestival.css"></style>
