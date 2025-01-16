<script setup lang="ts">
    import { Y } from '../../node_modules/vitest/dist/chunks/reporters.D7Jzd9GS';
    import tile from '../components/tile.vue';
    //import TileItem from '@/models/tileItem.ts';
    const size: number = 2;
    const tileSize: number = 70;
    const mapSize: string = (size * tileSize) + "px";

    //const store = useSudokuStore();
    //const items = store.loadMap();

    const items = [
      { x: 0, y: 0, z: 0, value: 2 },
      { x: 0, y: 1, z: 0, value: 1 },
      { x: 1, y: 0, z: 0, value: 1 },
      { x: 1, y: 1, z: 0, value: 2 }
    ];


</script>

<template>
    <div id="sudoku-container">
        <tile v-for = "(item,index) in items" :key="index"
            :x="item.x"
            :y="item.y"
            :z="item.z"
            :value="item.value" />        
    </div>
</template>

<style scoped>
    #sudoku-container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: v-bind(mapSize);
    }
</style>
