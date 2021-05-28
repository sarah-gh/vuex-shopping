<template>
    <div class="mysection">
        <img :src='item.src'>
        <div class="text">
            <h3> {{item.name}} ({{item.quantity}}) </h3>
            <p class="chosen">
                <span v-if="item.k>0" class="number">ketchup ({{item.k}})</span>
                <span v-if="item.m>0" class="number">mayonnaise ({{item.m}})</span> 
                <span v-if="item.b>0" class="number">barbecue({{item.b}})</span>
            </p>
            <span>Total cost : {{item.price}}$ </span>
        </div>
        <div class="btn">
            <button @click="deletecart(item)">Delete order</button>
            <button>Edit order</button>
        </div>
    </div>
</template>

<script src="./myShop.js"></script>
<style src="./myShop.scss" lang="scss" scoped></style>