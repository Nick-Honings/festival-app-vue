<template>
  <div>
    <h1 class="title">Festival</h1>
    <router-link @add-event="add" to="/events/add" tag="button">Add an event</router-link>


    <vs-row vs-justify="center" vs-align="center" vs-w="12">
      <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="6">
        <div v-bind:key="festival.date" v-for="festival in festivals">
          <FestivalItem v-bind:festival="festival" v-on:delete-event="deleteEvent"/>

        </div>
        <div style="justify-content: center">
<!--          <AddFestival2 v-on:add-event="add" ></AddFestival2>-->
        </div>
      </vs-col>
    </vs-row>

  </div>
</template>

<script src="./festival.view.js"></script>

<style src="./festival.css"></style>
