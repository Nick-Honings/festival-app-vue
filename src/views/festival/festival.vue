<template>
  <div>
    <vs-row vs-justify="center" vs-align="center" vs-w="12">
      <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="6">
          <vs-card style="margin-left: 15px; margin-top: 20px; background-color: rgba(255,255,255,0.6)">
              <div slot="header">
                  <h1>Events</h1>
              </div>
              <div>
                  <span>
                      <p style="font-size: large">
                          This is where you can view all of your saved events. If you do not see any events yet, add one by clicking the button below.
                          After that you will see the event pop up here and in your personal calendar.
                      </p>
                  </span>
              </div>
              <div slot="footer">
                  <vs-row vs-justify="center" vs-align="center">
                      <vs-button @click="$router.push('/events/add')" type="filled" line-position="bottom">Add An event</vs-button>
                  </vs-row>
              </div>
          </vs-card>

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
