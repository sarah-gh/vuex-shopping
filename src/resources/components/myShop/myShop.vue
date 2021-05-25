<template>
    <div class="mysection">
        <img :src='item.src'>
        <div class="text">
            <h3> {{item.name}} ({{item.quantity}}) </h3>
            <span> {{item.price}}$ </span>
        </div>
        <div class="btn">
            <button>delete</button>
            <button>edit</button>
        </div>
    </div>
</template>

<script src="./myShop.js"></script>
<style src="./myShop.scss" lang="scss" scoped></style>