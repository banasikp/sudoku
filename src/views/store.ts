import { defineStore } from "pinia"
import { ref, reactive } from "vue"
import type { TileItem } from "@/models/tileItem.ts"
import { TileMode } from "@/models/tileMode.ts"

export const useSudokuStore = defineStore('sudoku', () => {
  const mapSize = ref<number>(9);
  const items = reactive<TileItem[]>([])
  const mode = ref<TileMode>(TileMode.Play);
  const inProgress = ref<boolean>(false);

  const initialize = (size: number, mapNumber: number) => {
    items.splice(0);

    if (size == 9 && mapNumber == 0) {
      items.push({ x: 0, y: 0, z: 0, value: null, possibleValues: [] })
      items.push({ x: 0, y: 1, z: 0, value: null, possibleValues: [] })
      items.push({ x: 0, y: 2, z: 0, value: null, possibleValues: [] })
      items.push({ x: 0, y: 3, z: 1, value: null, possibleValues: [] })
      items.push({ x: 0, y: 4, z: 1, value: null, possibleValues: [] })
      items.push({ x: 0, y: 5, z: 1, value: null, possibleValues: [] })
      items.push({ x: 0, y: 6, z: 2, value: null, possibleValues: [] })
      items.push({ x: 0, y: 7, z: 2, value: null, possibleValues: [] })
      items.push({ x: 0, y: 8, z: 2, value: null, possibleValues: [] })

      items.push({ x: 1, y: 0, z: 0, value: null, possibleValues: [] })
      items.push({ x: 1, y: 1, z: 0, value: null, possibleValues: [] })
      items.push({ x: 1, y: 2, z: 0, value: null, possibleValues: [] })
      items.push({ x: 1, y: 3, z: 1, value: null, possibleValues: [] })
      items.push({ x: 1, y: 4, z: 1, value: null, possibleValues: [] })
      items.push({ x: 1, y: 5, z: 1, value: null, possibleValues: [] })
      items.push({ x: 1, y: 6, z: 2, value: null, possibleValues: [] })
      items.push({ x: 1, y: 7, z: 2, value: null, possibleValues: [] })
      items.push({ x: 1, y: 8, z: 2, value: null, possibleValues: [] })

      items.push({ x: 2, y: 0, z: 0, value: null, possibleValues: [] })
      items.push({ x: 2, y: 1, z: 0, value: null, possibleValues: [] })
      items.push({ x: 2, y: 2, z: 0, value: null, possibleValues: [] })
      items.push({ x: 2, y: 3, z: 1, value: null, possibleValues: [] })
      items.push({ x: 2, y: 4, z: 1, value: null, possibleValues: [] })
      items.push({ x: 2, y: 5, z: 1, value: null, possibleValues: [] })
      items.push({ x: 2, y: 6, z: 2, value: null, possibleValues: [] })
      items.push({ x: 2, y: 7, z: 2, value: null, possibleValues: [] })
      items.push({ x: 2, y: 8, z: 2, value: null, possibleValues: [] })

      items.push({ x: 3, y: 0, z: 3, value: null, possibleValues: [] })
      items.push({ x: 3, y: 1, z: 3, value: null, possibleValues: [] })
      items.push({ x: 3, y: 2, z: 3, value: null, possibleValues: [] })
      items.push({ x: 3, y: 3, z: 4, value: null, possibleValues: [] })
      items.push({ x: 3, y: 4, z: 4, value: null, possibleValues: [] })
      items.push({ x: 3, y: 5, z: 4, value: null, possibleValues: [] })
      items.push({ x: 3, y: 6, z: 5, value: null, possibleValues: [] })
      items.push({ x: 3, y: 7, z: 5, value: null, possibleValues: [] })
      items.push({ x: 3, y: 8, z: 5, value: null, possibleValues: [] })

      items.push({ x: 4, y: 0, z: 3, value: null, possibleValues: [] })
      items.push({ x: 4, y: 1, z: 3, value: null, possibleValues: [] })
      items.push({ x: 4, y: 2, z: 3, value: null, possibleValues: [] })
      items.push({ x: 4, y: 3, z: 4, value: null, possibleValues: [] })
      items.push({ x: 4, y: 4, z: 4, value: null, possibleValues: [] })
      items.push({ x: 4, y: 5, z: 4, value: null, possibleValues: [] })
      items.push({ x: 4, y: 6, z: 5, value: null, possibleValues: [] })
      items.push({ x: 4, y: 7, z: 5, value: null, possibleValues: [] })
      items.push({ x: 4, y: 8, z: 5, value: null, possibleValues: [] })

      items.push({ x: 5, y: 0, z: 3, value: null, possibleValues: [] })
      items.push({ x: 5, y: 1, z: 3, value: null, possibleValues: [] })
      items.push({ x: 5, y: 2, z: 3, value: null, possibleValues: [] })
      items.push({ x: 5, y: 3, z: 4, value: null, possibleValues: [] })
      items.push({ x: 5, y: 4, z: 4, value: null, possibleValues: [] })
      items.push({ x: 5, y: 5, z: 4, value: null, possibleValues: [] })
      items.push({ x: 5, y: 6, z: 5, value: null, possibleValues: [] })
      items.push({ x: 5, y: 7, z: 5, value: null, possibleValues: [] })
      items.push({ x: 5, y: 8, z: 5, value: null, possibleValues: [] })

      items.push({ x: 6, y: 0, z: 6, value: null, possibleValues: [] })
      items.push({ x: 6, y: 1, z: 6, value: null, possibleValues: [] })
      items.push({ x: 6, y: 2, z: 6, value: null, possibleValues: [] })
      items.push({ x: 6, y: 3, z: 7, value: null, possibleValues: [] })
      items.push({ x: 6, y: 4, z: 7, value: null, possibleValues: [] })
      items.push({ x: 6, y: 5, z: 7, value: null, possibleValues: [] })
      items.push({ x: 6, y: 6, z: 8, value: null, possibleValues: [] })
      items.push({ x: 6, y: 7, z: 8, value: null, possibleValues: [] })
      items.push({ x: 6, y: 8, z: 8, value: null, possibleValues: [] })

      items.push({ x: 7, y: 0, z: 6, value: null, possibleValues: [] })
      items.push({ x: 7, y: 1, z: 6, value: null, possibleValues: [] })
      items.push({ x: 7, y: 2, z: 6, value: null, possibleValues: [] })
      items.push({ x: 7, y: 3, z: 7, value: null, possibleValues: [] })
      items.push({ x: 7, y: 4, z: 7, value: null, possibleValues: [] })
      items.push({ x: 7, y: 5, z: 7, value: null, possibleValues: [] })
      items.push({ x: 7, y: 6, z: 8, value: null, possibleValues: [] })
      items.push({ x: 7, y: 7, z: 8, value: null, possibleValues: [] })
      items.push({ x: 7, y: 8, z: 8, value: null, possibleValues: [] })

      items.push({ x: 8, y: 0, z: 6, value: null, possibleValues: [] })
      items.push({ x: 8, y: 1, z: 6, value: null, possibleValues: [] })
      items.push({ x: 8, y: 2, z: 6, value: null, possibleValues: [] })
      items.push({ x: 8, y: 3, z: 7, value: null, possibleValues: [] })
      items.push({ x: 8, y: 4, z: 7, value: null, possibleValues: [] })
      items.push({ x: 8, y: 5, z: 7, value: null, possibleValues: [] })
      items.push({ x: 8, y: 6, z: 8, value: null, possibleValues: [] })
      items.push({ x: 8, y: 7, z: 8, value: null, possibleValues: [] })
      items.push({ x: 8, y: 8, z: 8, value: null, possibleValues: [] })
    }

    if (size == 9 && mapNumber == 1) {
      items.push({ x: 0, y: 0, z: 0, possibleValues: [], value: null })
      items.push({ x: 0, y: 1, z: 0, possibleValues: [], value: null })
      items.push({ x: 0, y: 2, z: 0, possibleValues: [], value: 1 })
      items.push({ x: 0, y: 3, z: 1, possibleValues: [], value: null })
      items.push({ x: 0, y: 4, z: 1, possibleValues: [], value: null })
      items.push({ x: 0, y: 5, z: 1, possibleValues: [], value: 6 })
      items.push({ x: 0, y: 6, z: 2, possibleValues: [], value: 4 })
      items.push({ x: 0, y: 7, z: 2, possibleValues: [], value: 3 })
      items.push({ x: 0, y: 8, z: 2, possibleValues: [], value: 5 })

      items.push({ x: 1, y: 0, z: 0, possibleValues: [], value: null })
      items.push({ x: 1, y: 1, z: 0, possibleValues: [], value: null })
      items.push({ x: 1, y: 2, z: 0, possibleValues: [], value: null })
      items.push({ x: 1, y: 3, z: 1, possibleValues: [], value: null })
      items.push({ x: 1, y: 4, z: 1, possibleValues: [], value: null })
      items.push({ x: 1, y: 5, z: 1, possibleValues: [], value: 1 })
      items.push({ x: 1, y: 6, z: 2, possibleValues: [], value: null })
      items.push({ x: 1, y: 7, z: 2, possibleValues: [], value: null })
      items.push({ x: 1, y: 8, z: 2, possibleValues: [], value: null })

      items.push({ x: 2, y: 0, z: 0, possibleValues: [], value: null })
      items.push({ x: 2, y: 1, z: 0, possibleValues: [], value: 5 })
      items.push({ x: 2, y: 2, z: 0, possibleValues: [], value: null })
      items.push({ x: 2, y: 3, z: 1, possibleValues: [], value: 4 })
      items.push({ x: 2, y: 4, z: 1, possibleValues: [], value: 7 })
      items.push({ x: 2, y: 5, z: 1, possibleValues: [], value: null })
      items.push({ x: 2, y: 6, z: 2, possibleValues: [], value: 9 })
      items.push({ x: 2, y: 7, z: 2, possibleValues: [], value: 8 })
      items.push({ x: 2, y: 8, z: 2, possibleValues: [], value: null })

      items.push({ x: 3, y: 0, z: 3, possibleValues: [], value: null })
      items.push({ x: 3, y: 1, z: 3, possibleValues: [], value: null })
      items.push({ x: 3, y: 2, z: 3, possibleValues: [], value: 2 })
      items.push({ x: 3, y: 3, z: 4, possibleValues: [], value: null })
      items.push({ x: 3, y: 4, z: 4, possibleValues: [], value: 8 })
      items.push({ x: 3, y: 5, z: 4, possibleValues: [], value: null })
      items.push({ x: 3, y: 6, z: 5, possibleValues: [], value: 7 })
      items.push({ x: 3, y: 7, z: 5, possibleValues: [], value: null })
      items.push({ x: 3, y: 8, z: 5, possibleValues: [], value: 9 })

      items.push({ x: 4, y: 0, z: 3, possibleValues: [], value: null })
      items.push({ x: 4, y: 1, z: 3, possibleValues: [], value: null })
      items.push({ x: 4, y: 2, z: 3, possibleValues: [], value: 8 })
      items.push({ x: 4, y: 3, z: 4, possibleValues: [], value: 7 })
      items.push({ x: 4, y: 4, z: 4, possibleValues: [], value: null })
      items.push({ x: 4, y: 5, z: 4, possibleValues: [], value: null })
      items.push({ x: 4, y: 6, z: 5, possibleValues: [], value: 6 })
      items.push({ x: 4, y: 7, z: 5, possibleValues: [], value: 1 })
      items.push({ x: 4, y: 8, z: 5, possibleValues: [], value: 2 })

      items.push({ x: 5, y: 0, z: 3, possibleValues: [], value: null })
      items.push({ x: 5, y: 1, z: 3, possibleValues: [], value: 6 })
      items.push({ x: 5, y: 2, z: 3, possibleValues: [], value: 4 })
      items.push({ x: 5, y: 3, z: 4, possibleValues: [], value: null })
      items.push({ x: 5, y: 4, z: 4, possibleValues: [], value: 1 })
      items.push({ x: 5, y: 5, z: 4, possibleValues: [], value: null })
      items.push({ x: 5, y: 6, z: 5, possibleValues: [], value: null })
      items.push({ x: 5, y: 7, z: 5, possibleValues: [], value: 5 })
      items.push({ x: 5, y: 8, z: 5, possibleValues: [], value: null })

      items.push({ x: 6, y: 0, z: 6, possibleValues: [], value: 9 })
      items.push({ x: 6, y: 1, z: 6, possibleValues: [], value: 1 })
      items.push({ x: 6, y: 2, z: 6, possibleValues: [], value: null })
      items.push({ x: 6, y: 3, z: 7, possibleValues: [], value: 3 })
      items.push({ x: 6, y: 4, z: 7, possibleValues: [], value: 4 })
      items.push({ x: 6, y: 5, z: 7, possibleValues: [], value: 2 })
      items.push({ x: 6, y: 6, z: 8, possibleValues: [], value: 8 })
      items.push({ x: 6, y: 7, z: 8, possibleValues: [], value: null })
      items.push({ x: 6, y: 8, z: 8, possibleValues: [], value: 7 })

      items.push({ x: 7, y: 0, z: 6, possibleValues: [], value: null })
      items.push({ x: 7, y: 1, z: 6, possibleValues: [], value: 2 })
      items.push({ x: 7, y: 2, z: 6, possibleValues: [], value: 7 })
      items.push({ x: 7, y: 3, z: 7, possibleValues: [], value: null })
      items.push({ x: 7, y: 4, z: 7, possibleValues: [], value: null })
      items.push({ x: 7, y: 5, z: 7, possibleValues: [], value: null })
      items.push({ x: 7, y: 6, z: 8, possibleValues: [], value: null })
      items.push({ x: 7, y: 7, z: 8, possibleValues: [], value: 9 })
      items.push({ x: 7, y: 8, z: 8, possibleValues: [], value: null })

      items.push({ x: 8, y: 0, z: 6, possibleValues: [], value: 6 })
      items.push({ x: 8, y: 1, z: 6, possibleValues: [], value: null })
      items.push({ x: 8, y: 2, z: 6, possibleValues: [], value: 3 })
      items.push({ x: 8, y: 3, z: 7, possibleValues: [], value: null })
      items.push({ x: 8, y: 4, z: 7, possibleValues: [], value: 9 })
      items.push({ x: 8, y: 5, z: 7, possibleValues: [], value: null })
      items.push({ x: 8, y: 6, z: 8, possibleValues: [], value: 5 })
      items.push({ x: 8, y: 7, z: 8, possibleValues: [], value: null })
      items.push({ x: 8, y: 8, z: 8, possibleValues: [], value: null })
    }

    if (size == 9 && mapNumber == 2) {
      items.push({ x: 0, y: 0, z: 0, value: 6, possibleValues: [] })
      items.push({ x: 0, y: 1, z: 0, value: 8, possibleValues: [] })
      items.push({ x: 0, y: 2, z: 0, value: null, possibleValues: [] })
      items.push({ x: 0, y: 3, z: 1, value: null, possibleValues: [] })
      items.push({ x: 0, y: 4, z: 1, value: null, possibleValues: [] })
      items.push({ x: 0, y: 5, z: 1, value: null, possibleValues: [] })
      items.push({ x: 0, y: 6, z: 2, value: 9, possibleValues: [] })
      items.push({ x: 0, y: 7, z: 2, value: null, possibleValues: [] })
      items.push({ x: 0, y: 8, z: 2, value: null, possibleValues: [] })

      items.push({ x: 1, y: 0, z: 0, value: null, possibleValues: [] })
      items.push({ x: 1, y: 1, z: 0, value: null, possibleValues: [] })
      items.push({ x: 1, y: 2, z: 0, value: null, possibleValues: [] })
      items.push({ x: 1, y: 3, z: 1, value: null, possibleValues: [] })
      items.push({ x: 1, y: 4, z: 1, value: null, possibleValues: [] })
      items.push({ x: 1, y: 5, z: 1, value: null, possibleValues: [] })
      items.push({ x: 1, y: 6, z: 2, value: null, possibleValues: [] })
      items.push({ x: 1, y: 7, z: 2, value: 8, possibleValues: [] })
      items.push({ x: 1, y: 8, z: 2, value: 7, possibleValues: [] })

      items.push({ x: 2, y: 0, z: 0, value: null, possibleValues: [] })
      items.push({ x: 2, y: 1, z: 0, value: 3, possibleValues: [] })
      items.push({ x: 2, y: 2, z: 0, value: null, possibleValues: [] })
      items.push({ x: 2, y: 3, z: 1, value: 7, possibleValues: [] })
      items.push({ x: 2, y: 4, z: 1, value: null, possibleValues: [] })
      items.push({ x: 2, y: 5, z: 1, value: 4, possibleValues: [] })
      items.push({ x: 2, y: 6, z: 2, value: null, possibleValues: [] })
      items.push({ x: 2, y: 7, z: 2, value: null, possibleValues: [] })
      items.push({ x: 2, y: 8, z: 2, value: null, possibleValues: [] })

      items.push({ x: 3, y: 0, z: 3, value: null, possibleValues: [] })
      items.push({ x: 3, y: 1, z: 3, value: null, possibleValues: [] })
      items.push({ x: 3, y: 2, z: 3, value: null, possibleValues: [] })
      items.push({ x: 3, y: 3, z: 4, value: null, possibleValues: [] })
      items.push({ x: 3, y: 4, z: 4, value: null, possibleValues: [] })
      items.push({ x: 3, y: 5, z: 4, value: null, possibleValues: [] })
      items.push({ x: 3, y: 6, z: 5, value: null, possibleValues: [] })
      items.push({ x: 3, y: 7, z: 5, value: 5, possibleValues: [] })
      items.push({ x: 3, y: 8, z: 5, value: null, possibleValues: [] })

      items.push({ x: 4, y: 0, z: 3, value: null, possibleValues: [] })
      items.push({ x: 4, y: 1, z: 3, value: 4, possibleValues: [] })
      items.push({ x: 4, y: 2, z: 3, value: null, possibleValues: [] })
      items.push({ x: 4, y: 3, z: 4, value: 5, possibleValues: [] })
      items.push({ x: 4, y: 4, z: 4, value: null, possibleValues: [] })
      items.push({ x: 4, y: 5, z: 4, value: 7, possibleValues: [] })
      items.push({ x: 4, y: 6, z: 5, value: 3, possibleValues: [] })
      items.push({ x: 4, y: 7, z: 5, value: null, possibleValues: [] })
      items.push({ x: 4, y: 8, z: 5, value: 8, possibleValues: [] })

      items.push({ x: 5, y: 0, z: 3, value: 5, possibleValues: [] })
      items.push({ x: 5, y: 1, z: 3, value: null, possibleValues: [] })
      items.push({ x: 5, y: 2, z: 3, value: null, possibleValues: [] })
      items.push({ x: 5, y: 3, z: 4, value: null, possibleValues: [] })
      items.push({ x: 5, y: 4, z: 4, value: 9, possibleValues: [] })
      items.push({ x: 5, y: 5, z: 4, value: 3, possibleValues: [] })
      items.push({ x: 5, y: 6, z: 5, value: 4, possibleValues: [] })
      items.push({ x: 5, y: 7, z: 5, value: null, possibleValues: [] })
      items.push({ x: 5, y: 8, z: 5, value: 1, possibleValues: [] })

      items.push({ x: 6, y: 0, z: 6, value: null, possibleValues: [] })
      items.push({ x: 6, y: 1, z: 6, value: null, possibleValues: [] })
      items.push({ x: 6, y: 2, z: 6, value: null, possibleValues: [] })
      items.push({ x: 6, y: 3, z: 7, value: null, possibleValues: [] })
      items.push({ x: 6, y: 4, z: 7, value: null, possibleValues: [] })
      items.push({ x: 6, y: 5, z: 7, value: null, possibleValues: [] })
      items.push({ x: 6, y: 6, z: 8, value: 1, possibleValues: [] })
      items.push({ x: 6, y: 7, z: 8, value: null, possibleValues: [] })
      items.push({ x: 6, y: 8, z: 8, value: null, possibleValues: [] })

      items.push({ x: 7, y: 0, z: 6, value: 9, possibleValues: [] })
      items.push({ x: 7, y: 1, z: 6, value: 7, possibleValues: [] })
      items.push({ x: 7, y: 2, z: 6, value: null, possibleValues: [] })
      items.push({ x: 7, y: 3, z: 7, value: null, possibleValues: [] })
      items.push({ x: 7, y: 4, z: 7, value: 4, possibleValues: [] })
      items.push({ x: 7, y: 5, z: 7, value: 6, possibleValues: [] })
      items.push({ x: 7, y: 6, z: 8, value: null, possibleValues: [] })
      items.push({ x: 7, y: 7, z: 8, value: null, possibleValues: [] })
      items.push({ x: 7, y: 8, z: 8, value: null, possibleValues: [] })

      items.push({ x: 8, y: 0, z: 6, value: 8, possibleValues: [] })
      items.push({ x: 8, y: 1, z: 6, value: null, possibleValues: [] })
      items.push({ x: 8, y: 2, z: 6, value: 6, possibleValues: [] })
      items.push({ x: 8, y: 3, z: 7, value: null, possibleValues: [] })
      items.push({ x: 8, y: 4, z: 7, value: 2, possibleValues: [] })
      items.push({ x: 8, y: 5, z: 7, value: null, possibleValues: [] })
      items.push({ x: 8, y: 6, z: 8, value: null, possibleValues: [] })
      items.push({ x: 8, y: 7, z: 8, value: 3, possibleValues: [] })
      items.push({ x: 8, y: 8, z: 8, value: null, possibleValues: [] })
    }

    items.forEach(item => {
      if (item.value !== null)
        item.possibleValues = [item.value];
    })
  };
  const getMapSize = () => mapSize;
  const getItems = () => items;

  const getPossibleValues = (items: TileItem[]) => {
    const values = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const itemValues = items.map(i => i.value).filter(v => v != null);
    return values.filter(v => !itemValues.includes(v));
  }
  
  const fillWherePossible = () => {    
    const emptyItems = items.filter(item => item.value == null);
        
    emptyItems.forEach((item) => {
      const itemsToCheck = items.filter(i => i.x == item.x || i.y == item.y || i.z == item.z);
      item.possibleValues = getPossibleValues(itemsToCheck);

      if (item.possibleValues.length == 1) {
        item.value = item.possibleValues[0];
        item.possibleValues = [item.possibleValues[0]];
      }
    })    
  }
  const inductZPossible = () => {    
    const emptyItems = items.filter(item => item.value == null);
    emptyItems.forEach((item) => {
      const itemsToCheck = items.filter(i => i.x == item.x || i.y == item.y || i.z == item.z);
      item.possibleValues = getPossibleValues(itemsToCheck);      
    })
    
    for (let i = 0; i < 9; i++) {
      const allZItems = items.filter(item => item.z == i);      
      for (let numberToCheck = 1; numberToCheck <= 9; numberToCheck++) {
        const itemsWithNumber = allZItems.filter(item => item.possibleValues.includes(numberToCheck));
        if (itemsWithNumber.length == 1) {
          itemsWithNumber[0].value = numberToCheck;
          itemsWithNumber[0].possibleValues = [numberToCheck];
        }
      }
    }    
  }
  const inductXPossible = () => {    
    const emptyItems = items.filter(item => item.value == null);
    emptyItems.forEach((item) => {
      const itemsToCheck = items.filter(i => i.x == item.x || i.y == item.y || i.z == item.z);
      item.possibleValues = getPossibleValues(itemsToCheck);      
    })
    
    for (let i = 0; i < 9; i++) {
      const allXItems = items.filter(item => item.x == i);      
      for (let numberToCheck = 1; numberToCheck <= 9; numberToCheck++) {
        const itemsWithNumber = allXItems.filter(item => item.possibleValues.includes(numberToCheck));
        if (itemsWithNumber.length == 1) {
          itemsWithNumber[0].value = numberToCheck;
          itemsWithNumber[0].possibleValues = [numberToCheck];
        }
      }
    }
  }
  const inductYPossible = () => {
    const emptyItems = items.filter(item => item.value == null);
    emptyItems.forEach((item) => {
      const itemsToCheck = items.filter(i => i.x == item.x || i.y == item.y || i.z == item.z);
      item.possibleValues = getPossibleValues(itemsToCheck);      
    })
    
    for (let i = 0; i < 9; i++) {
      const allYItems = items.filter(item => item.z == i);      
      for (let numberToCheck = 1; numberToCheck <= 9; numberToCheck++) {
        const itemsWithNumber = allYItems.filter(item => item.possibleValues.includes(numberToCheck));
        if (itemsWithNumber.length == 1) {
          itemsWithNumber[0].value = numberToCheck;
          itemsWithNumber[0].possibleValues = [numberToCheck];
        }
      }
    }
  }
  const solve = () => {
    setInProgress(true);

    let lastItemsToCheckAmount = items.filter(i => i.value == null).length + 1;
    while (lastItemsToCheckAmount > 0 && lastItemsToCheckAmount != items.filter(i => i.value == null).length) {
      lastItemsToCheckAmount = items.filter(i => i.value == null).length;
      fillWherePossible();
      inductZPossible();
      inductXPossible();
      inductYPossible();
    }
    setInProgress(false);
  }  
  const updateTile = (x: number, y: number, z: number, newValue: number | null) => {
    const item = items.find(i => i.x == x && i.y == y && i.z == z);
    if (item) {
      item.value = newValue;
      item.possibleValues = newValue ? [newValue] : [];
    }
  }

  const getMode = () => mode;
  const toggleEdit = () => { mode.value = mode.value == TileMode.Play ? TileMode.Edit : TileMode.Play; }

  const getInProgress = () => inProgress;
  const setInProgress = (state: boolean) => { inProgress.value = state }

  const clear = () => {
    items.forEach(i => {
      i.value = null;
      i.possibleValues = [];
    })
  }

  return {
    initialize,
    getItems,
    getMapSize,
    fillWherePossible,
    inductZPossible,
    inductXPossible,
    inductYPossible,
    solve,
    getMode,
    toggleEdit,
    updateTile,
    getInProgress,
    setInProgress,
    clear
  }
})
