<template>
    <div id="app">
         <!-- 加载进度条 -->
        <vue-progress-bar></vue-progress-bar>
        <router-view></router-view>
        
    </div>
</template>
<style>
    @import "../static/css/main.css";
    @import "../static/css/color-dark.css";     /*深色主题*/
    /*@import "../static/css/theme-green/color-green.css";   浅绿色主题*/
</style>