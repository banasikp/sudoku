import { defineStore } from "pinia"
import { ref, reactive } from "vue"
import type { TileItem } from "@/models/tileItem.ts"

export const useSudokuStore = defineStore('sudoku', () => {
  const mapSize = ref<number>(9);
  const items = reactive<TileItem[]>([])

  const initialize = (size: number) => {
    if (size == 2) {
      items.push({ x: 0, y: 0, z: 0, value: 2 })
      items.push({ x: 0, y: 1, z: 0, value: 1 })
      items.push({ x: 1, y: 0, z: 0, value: 1 })
      items.push({ x: 1, y: 1, z: 0, value: 2 })

    }


    if (size == 9) {
      items.push({ x: 0, y: 0, z: 0, value: null })
      items.push({ x: 0, y: 1, z: 0, value: null })
      items.push({ x: 0, y: 2, z: 0, value: 1 })
      items.push({ x: 0, y: 3, z: 1, value: null })
      items.push({ x: 0, y: 4, z: 1, value: null })
      items.push({ x: 0, y: 5, z: 1, value: 6 })
      items.push({ x: 0, y: 6, z: 2, value: 4 })
      items.push({ x: 0, y: 7, z: 2, value: 3 })
      items.push({ x: 0, y: 8, z: 2, value: 5 })

      items.push({ x: 1, y: 0, z: 0, value: null })
      items.push({ x: 1, y: 1, z: 0, value: null })
      items.push({ x: 1, y: 2, z: 0, value: null })
      items.push({ x: 1, y: 3, z: 1, value: null })
      items.push({ x: 1, y: 4, z: 1, value: null })
      items.push({ x: 1, y: 5, z: 1, value: 1 })
      items.push({ x: 1, y: 6, z: 2, value: null})
      items.push({ x: 1, y: 7, z: 2, value: null})
      items.push({ x: 1, y: 8, z: 2, value: null })

      items.push({ x: 2, y: 0, z: 0, value: null })
      items.push({ x: 2, y: 1, z: 0, value: 5 })
      items.push({ x: 2, y: 2, z: 0, value: null })
      items.push({ x: 2, y: 3, z: 1, value: 4 })
      items.push({ x: 2, y: 4, z: 1, value: 7 })
      items.push({ x: 2, y: 5, z: 1, value: null })
      items.push({ x: 2, y: 6, z: 2, value: 9 })
      items.push({ x: 2, y: 7, z: 2, value: 8 })
      items.push({ x: 2, y: 8, z: 2, value: null })

      items.push({ x: 3, y: 0, z: 3, value: null })
      items.push({ x: 3, y: 1, z: 3, value: null })
      items.push({ x: 3, y: 2, z: 3, value: 2 })
      items.push({ x: 3, y: 3, z: 4, value: null })
      items.push({ x: 3, y: 4, z: 4, value: 8 })
      items.push({ x: 3, y: 5, z: 4, value: null })
      items.push({ x: 3, y: 6, z: 5, value: 7 })
      items.push({ x: 3, y: 7, z: 5, value: null })
      items.push({ x: 3, y: 8, z: 5, value: 9 })

      items.push({ x: 4, y: 0, z: 3, value: null })
      items.push({ x: 4, y: 1, z: 3, value: null })
      items.push({ x: 4, y: 2, z: 3, value: 8 })
      items.push({ x: 4, y: 3, z: 4, value: 7 })
      items.push({ x: 4, y: 4, z: 4, value: null })
      items.push({ x: 4, y: 5, z: 4, value: null })
      items.push({ x: 4, y: 6, z: 5, value: 6 })
      items.push({ x: 4, y: 7, z: 5, value: 1 })
      items.push({ x: 4, y: 8, z: 5, value: 2 })

      items.push({ x: 5, y: 0, z: 3, value: null })
      items.push({ x: 5, y: 1, z: 3, value: 6 })
      items.push({ x: 5, y: 2, z: 3, value: 4 })
      items.push({ x: 5, y: 3, z: 4, value: null })
      items.push({ x: 5, y: 4, z: 4, value: 1 })
      items.push({ x: 5, y: 5, z: 4, value: null })
      items.push({ x: 5, y: 6, z: 5, value: null })
      items.push({ x: 5, y: 7, z: 5, value: 5 })
      items.push({ x: 5, y: 8, z: 5, value: null })

      items.push({ x: 6, y: 0, z: 6, value: 9 })
      items.push({ x: 6, y: 1, z: 6, value: 1 })
      items.push({ x: 6, y: 2, z: 6, value: null })
      items.push({ x: 6, y: 3, z: 7, value: 3 })
      items.push({ x: 6, y: 4, z: 7, value: 4 })
      items.push({ x: 6, y: 5, z: 7, value: 2 })
      items.push({ x: 6, y: 6, z: 8, value: 8 })
      items.push({ x: 6, y: 7, z: 8, value: null })
      items.push({ x: 6, y: 8, z: 8, value: 7 })

      items.push({ x: 7, y: 0, z: 6, value: 0 })
      items.push({ x: 7, y: 1, z: 6, value: 2 })
      items.push({ x: 7, y: 2, z: 6, value: 7 })
      items.push({ x: 7, y: 3, z: 7, value: null })
      items.push({ x: 7, y: 4, z: 7, value: null })
      items.push({ x: 7, y: 5, z: 7, value: null })
      items.push({ x: 7, y: 6, z: 8, value: null })
      items.push({ x: 7, y: 7, z: 8, value: 9 })
      items.push({ x: 7, y: 8, z: 8, value: null })

      items.push({ x: 8, y: 0, z: 6, value: 6 })
      items.push({ x: 8, y: 1, z: 6, value: null })
      items.push({ x: 8, y: 2, z: 6, value: 3 })
      items.push({ x: 8, y: 3, z: 7, value: null })
      items.push({ x: 8, y: 4, z: 7, value: 9 })
      items.push({ x: 8, y: 5, z: 7, value: null })
      items.push({ x: 8, y: 6, z: 8, value: 5 })
      items.push({ x: 8, y: 7, z: 8, value: null })
      items.push({ x: 8, y: 8, z: 8, value: null })
    }

  };
  const getMapSize = () => mapSize;
  const getItems = () => items;
  const fillWherePossible = () => {
    console.log('fillWherePossible');

    //todo: kontynuowac: sprawdzic wiersz, kolumne, kwadrat

  }

  return {
    initialize,
    getItems,
    getMapSize,
    fillWherePossible
  }
})
