<template>
    <div>
        <h3>pizza</h3>
        <div v-for="(item, index) in showPizza" :key="index">
            <my-section v-bind:item="item"></my-section>
        </div>
    </div>
</template>

<script src="./pizza.js"></script>
<style src="./pizza.scss" lang="scss" scoped></style>