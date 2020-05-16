<template>
    <div>
        <carousel3d :controls-visible="true" :clickable="false">
            <slide :index="0">
                <img src="../../assets/event-planning.png">
                <p>Plan your events</p>
            </slide>
            <slide :index="1">
                Test
            </slide>
        </carousel3d>
    </div>
</template>

<script>
    import { Carousel3d, Slide } from 'vue-carousel-3d';


    export default {
        name: "Carousel",
        components: {
            Carousel3d,
            Slide
        }
    }
</script>

<style scoped>

</style>
