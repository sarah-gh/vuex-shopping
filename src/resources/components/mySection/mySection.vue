<template>
    <div class="mysection">
        <img :src='item.src'>
        <div class="text">
            <h3> {{item.name}} </h3>
            <div class="words" v-if="category != 'special Packs'" >
                <p class="word" v-for="(word, index) in words" :key="index">
                    {{ word }} <span v-if="index != words.length-1">+</span>
                </p>
            </div>
            <div v-else>
                <p>{{item.details}}</p>
            </div>
            <div class="choise">choice of : 
                <div v-for="(i, index) in tagFood" :key="index" class="tags">
                    <span @click="addchoices(i)" :class=" i.number > 0  ? 'active' : 'word'" >
                        {{i.name}} 
                        <span v-if="i.number > 0" class="number">
                            ({{ i.number }})
                        </span>
                    </span> 
                </div>
            </div>
            <span class="price"> {{item.price}}$ </span>
        </div>
        <div class="plus" @click="addcart()">+</div>
    </div>
</template>

<script src="./mySection.js"></script>
<style src="./mySection.scss" lang="scss" scoped></style>