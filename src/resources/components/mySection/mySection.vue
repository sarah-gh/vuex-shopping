<template>
    <div class="mysection">
        <img :src='item.src'>
        <div class="text">
            <h3> {{item.name}} </h3>
            <p> {{item.text}} </p>
            <span> {{item.price}}$ </span>
        </div>
        <div class="plus" @click="addcart()">+</div>
    </div>
</template>

<script src="./mySection.js"></script>
<style src="./mySection.scss" lang="scss" scoped></style>