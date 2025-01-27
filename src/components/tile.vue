<script setup lang="ts">
  import { defineProps, computed } from 'vue';

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
    }
  });

  const tileSize: string = "70px";

  const classes = computed(() => "tile" + " " + props.customClass);

</script>

<template>
  <div :class="classes">
    {{value}}
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
</style>
