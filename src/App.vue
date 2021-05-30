<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
$animationDuration: 0.5s; // specify animation duration. Default value: 1s 
//@import "https://unpkg.com/vue2-animate/dist/vue2-animate.min.css";
body{
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
#nav {
  //width: 90%;
  margin:0 auto;
}
h3{
  font-size: 25px;
  color: rgb(177, 22, 60);
}
.section{
  width: 90%;
  margin:0 auto;
}
</style>
