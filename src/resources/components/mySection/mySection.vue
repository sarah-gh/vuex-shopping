<template>
    <div class="mysection">
        <img :src='item.src'>
        <div class="text">
            <h3> {{item.name}} </h3>
            <div class="words" v-if="item.cat != 'special Packs'" >
                <p class="word" v-for="(word, index) in words" :key="index">
                    {{ word }} <span v-if="index != words.length-1">+</span>
                </p>
            </div>
            <div v-else>
                <p>{{item.text}}</p>
            </div>
            <p class="choise">choise of: 
                <span @click="addchoices('ketchup')" :class=" ketchup > 0  ? 'active' : 'word'" >ketchup <span v-if="ketchup>0" class="number">({{ketchup}})</span></span> 
                <span @click="addchoices('mayonnaise')" :class=" mayonnaise > 0  ? 'active' : 'word'">mayonnaise <span v-if="mayonnaise>0" class="number">({{mayonnaise}})</span></span> 
                <span @click="addchoices('barbecueSauce')" :class=" barbecueSauce > 0  ? 'active' : 'word'" >barbecue Sauce <span v-if="barbecueSauce>0" class="number">({{barbecueSauce}})</span></span>
            </p>
            <span> {{item.price}}$ </span>
        </div>
        <div class="plus" @click="addcart()">+</div>
    </div>
</template>

<script src="./mySection.js"></script>
<style src="./mySection.scss" lang="scss" scoped></style>