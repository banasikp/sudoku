<script setup lang="ts">
  import tile from '../components/tile.vue';
  import { useSudokuStore } from '@/stores/store';
  import { TileItem } from '@/models/tileItem';

  const size: number = 9;
  const tileSize: number = 70;
  const mapSize: string = (size * (tileSize+5)) + "px";

  const store = useSudokuStore();
  store.initialize(2);
  const items = store.getItems();

  const calculateCustomClass = (item: TileItem) => {
    let classString = "";
    classString += item.x == 2 || item.x == 5 ? ' border-bottom' : '';
    classString += item.y == 2 || item.y == 5 ? ' border-right' : '';
    return classString;
  }
  const fill = () => {
    store.fillWherePossible();
  }
  const inductZ = () => {
    store.inductZPossible();
  }
  const inductX = () => {
    store.inductXPossible();
  }
  const inductY = () => {
    store.inductYPossible();
  }
  const solve = () => {
    store.solve();
  }
  const reset = () => {
    store.initialize(size, 1);
  }

  const clear = () => {
    store.clear();
  }

  const toggleEdit = () => {
    store.toggleEdit();
  }
</script>

<template>
  <div id="sudoku-container">

    <div class="map">
      <tile v-for="(item,index) in items" :key="index"
            :x="item.x"
            :y="item.y"
            :z="item.z"
            :value="item.value"
            :mode="store.getMode().value"
            :customClass="calculateCustomClass(item)" />
    </div>

    <div class="controls">
        <button class="btn" @click="fill">Fill where possible</button>
        <br />
        <button class="btn" @click="inductZ">Induct from group</button>
        <br />
        <button class="btn" @click="inductX">Induct from row</button>
        <br />
        <button class="btn" @click="inductY">Induct from column</button>
        <br />
        <button class="btn" @click="solve">Solve</button>
        <br /><br />
        <button class="btn" @click="reset">Reset to default map</button>
        <br />
        <button class="btn" @click="clear">Clear map</button>
        <br />
        <button class="btn" @click="toggleEdit">Edit/Play</button>
    </div>
  </div>
</template>

<style scoped>

  #sudoku-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  #sudoku-container .controls {
    padding-left: 20px;
  }

    #sudoku-container .controls .btn {
      width: 200px;
      height: 50px;
    }

  #sudoku-container .map {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: v-bind(mapSize);
  }

    #sudoku-container .map >>> .border-right {
      border-right: 5px solid #000 !important
    }

    #sudoku-container .map >>> .border-bottom {
      border-bottom: 5px solid #000 !important
    }
</style>
