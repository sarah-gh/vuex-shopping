<template>
    <div>
        <h3>popular Dishes</h3>
        <div v-for="(item, index) in showPopular" :key="index">
            <my-section v-bind:item="item"></my-section>
        </div>
    </div>
</template>

<script src="./popularDishes.js"></script>
<style src="./popularDishes.scss" lang="scss" scoped></style>