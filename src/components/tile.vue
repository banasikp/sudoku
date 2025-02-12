<script setup lang="ts">
  import { defineProps, computed, ref, watch } from 'vue';
  import { TileMode } from '@/models/tileMode.ts';
  import { useSudokuStore } from '@/views/store';

  const props = defineProps({
    x: {
      type: Number,
      required: true
    },
    y: {
      type: Number,
      required: true
    },
    z: {
      type: Number,
      required: true
    },
    value: {
      type: Number,
      required: false
    },
    customClass: {
      type: String,
      default: ""
    },
    mode: {
      type: TileMode,
      default: TileMode.Edit
    }
  });

  const tileSize: string = "70px";

  const classes = computed(() => "tile" + " " + props.customClass);

  const valueInput = ref(props.value);
  watch(valueInput, (newValue, oldValue) => {
    const store = useSudokuStore();
    if (newValue == '') {
      newValue = null;
    }
    else{
        newValue = parseInt(newValue);
    }
    store.updateTile(props.x, props.y, props.z, newValue);
  });
  watch(() => props.value, (newValue, oldValue) => {
    valueInput.value = newValue == null ? '' : newValue;
  });

</script>

<template>
  <div v-show="mode == TileMode.Play" :class="classes">
    {{value}}
  </div>

  <div v-show="mode == TileMode.Edit" :class="classes">
    <input class="tile--input" type="text" v-model="valueInput" />
  </div>
</template>

<style scoped>
  .tile {
    background-color: #000;
    border: 1px solid #fff;
    color: #fff;
    font-size: 35px;
    width: v-bind(tileSize);
    height: v-bind(tileSize);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .tile--input {
    width: 27px;
    font-size: 35px;
    background-color: #000;
    color: #3482FF
  }
</style>
