<template>
    <div class="mysection">
        <img :src='item.src'>
        <div class="text">
            <h3> {{item.name}} ({{item.quantity}}) </h3>
            <div class="chosen">
                <div v-for="(i, index) in item.tags" :key="index">
                    <span class="number" v-if="i.number > 0"> {{ i.name }} {{ i.number }}</span>
                </div>
            </div>
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