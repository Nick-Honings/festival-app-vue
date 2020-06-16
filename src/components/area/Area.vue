<template>
    <div>
        <div v-if="canEdit">

        </div>
        <div v-else>
            <vs-list-item :title="area.name" :subtitle="area.genre">

            </vs-list-item>
        </div>
    </div>
</template>

<script src="./area.component.js"></script>

<style src="./area.css" scoped></style>
