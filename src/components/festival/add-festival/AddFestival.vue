<template>
    <div>
        <form @submit="addFestival">
            <input type="text" v-model="name" name="name" placeholder="Festival name...">
            <label>Select starting date</label>
            <date-pick
                    v-model="date"
                    :format="'DD.MM.YYYY'"
            ></date-pick>
            <input type="submit" value="Submit" class="btn">
        </form>
    </div>
</template>

<script src="./add-festival.component.js"></script>
<style scoped src="./add-festival.css"></style>
