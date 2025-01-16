<script setup lang="ts">
    defineProps < {
        x: number
        y: number,
        z: number,
        value: number
    } > ();

    const tileSize: string = "70px";

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
        width: v-bind(tileSize);
        height: v-bind(tileSize);


        display: flex;
        justify-content: center;
        align-items: center;        
    }
</style>
