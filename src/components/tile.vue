<script setup lang="ts">
  import { defineProps, computed, ref, watch } from 'vue';
  import { TileMode } from '@/models/tileMode.ts';
  import { useSudokuStore } from '@/stores/store.ts';
  import { useVuelidate } from '@vuelidate/core'

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
  const inputValidationRules = computed(() => {
    return {
      value: {
        required,
        numeric,
        minValue: 1,
        maxValue: 9
      }
    }
  });
  const v& = useVuelidate(inputValidationRules, valueInput);

  watch(valueInput, (newValue, oldValue) => {
    const store = useSudokuStore();
    if (newValue == '') {
      newValue = null;
    }
    else{
        if(newValue.length > 1){
            newValue = newValue.slice(-1);
        }
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
    <input class="tile--input" type="number" v-model="v$.valueInput.$model" />
  </div>
</template>

<style scoped>
  .tile {    
    border: 1px solid #000;
    color: #000;
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
    background-color: #fff;
    color: #3482FF
  }
</style>
