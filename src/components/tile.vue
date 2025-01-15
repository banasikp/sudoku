<script setup lang="ts">
defineProps<{
     x: number
    y: number,
    z: number,
    value: number
}>()
</script>

<template>
  <div class="tile">
    {{value}}
  </div>
</template>

<style scoped>
    .tile
    {        
        background-color: red;
        border: 1px solid #fff;
        color: #fff;
        font-size: 35px;
        width: 70px;
        height: 70px;


        display: flex;
        justify-content: center;
        align-items: center;        
    }
</style>
