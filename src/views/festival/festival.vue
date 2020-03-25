<template>
  <div>
    <h1 class="title">Festival</h1>
    <AddFestival v-on:add-festival="add"/>

    <vs-row vs-justify="center" vs-align="center" vs-w="12">
      <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="6">
        <div v-bind:key="festival.date" v-for="festival in festivals">
          <FestivalItem v-bind:festival="festival" v-on:edit-event="testMethod('edit')"/>

        </div>
      </vs-col>
    </vs-row>


  </div>
</template>

<script src="./festival.view.js"></script>
<style src="./festival.css"></style>
