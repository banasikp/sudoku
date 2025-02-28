<script setup lang="ts">
  import { computed, reactive, watch } from 'vue';
  import { TileMode } from '@/models/tileMode.ts';
  import { useSudokuStore } from '@/stores/store.ts';
  import { useVuelidate } from '@vuelidate/core'
  import { numeric, minValue, maxValue } from '@vuelidate/validators'

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
  
  const valueInput = reactive({
          value: props.value
  }); 

  const inputValidationRules = computed(() => {
    return {
      value: {        
        numeric,
        minValue: 1,
        maxValue: 9
      }
    }
  });
  const v$ = useVuelidate(inputValidationRules, valueInput);
  
  watch(valueInput, (newValue, oldValue) => {      
    if(v$.value.$error == true){
        console.log('VALIDATION ERROR: ', v$.value.$errors[0].$message);
        return;
    }

    const store = useSudokuStore();
    let valueToApply = newValue.value;
    
    if (newValue.value == null || newValue.value == '') {
      valueToApply = null;
    }    
    else {
        if(newValue.value.length > 1){
            valueToApply = newValue.value.slice(-1);
        }
        valueToApply = parseInt(valueToApply);        
    }
    newValue.value = valueToApply;
    store.updateTile(props.x, props.y, props.z, valueToApply);
  });
  watch(() => props.value, (newValue, oldValue) => {
    valueInput.value = newValue == null ? '' : newValue;
  });

</script>

<template>
    <div v-show="mode == TileMode.Play" class="tile" :class="[{ error: v$.value.$error == true }, props.customClass]">
        {{props.value}}
    </div>

    <div v-show="mode == TileMode.Edit" class="tile" :class="[{ error: v$.value.$error == true }, props.customClass]">
        <input class="tile--input" type="text" v-model="v$.value.$model" />
        <div v-show="v$.error">>{{v$.value.error}}</div>
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

    .tile.error,
    .tile.error .tile--input {
        color: red;
    }

  .tile--input {
    width: 27px;
    font-size: 35px;
    background-color: #fff;
    color: #3482FF
  }
</style>
