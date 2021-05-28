<template>
    <div id="nav">
        <ul>
            <li><a href="#sec-1" v-bind:class="{ active: isActive == '1' }" @click="url" v-smooth-scroll>popular Dishes</a></li>
            <li><a href="#sec-2" v-bind:class="{ active: isActive == '2' }"  @click="url" v-smooth-scroll>pizza</a></li>
            <li><a href="#sec-3" v-bind:class="{ active: isActive == '3' }"  @click="url" v-smooth-scroll>special Packs</a></li>
            <li><router-link to="#sec-1">popular Dishes</router-link></li>
            <li><router-link to="#sec-2">pizza</router-link></li>
            <li><router-link :to="{name: 'home', hash: '#sec-3'}">special Packs</router-link></li>
        </ul>
    </div>
</template>

<script src="./navbar.js"></script>
<style src="./navbar.scss" lang="scss" scoped></style>