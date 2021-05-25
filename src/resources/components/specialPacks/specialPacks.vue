<template>
    <div>
        <h3>special Packs</h3>
        <div v-for="(item, index) in showSpecialPacks" :key="index">
            <my-section v-bind:item="item"></my-section>
        </div>
    </div>
</template>

<script src="./specialPacks.js"></script>
<style src="./specialPacks.scss" lang="scss" scoped></style>