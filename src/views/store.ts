import { defineStore } from "pinia"
import { ref, reactive } from "vue"
import type { TileItem } from "@/models/tileItem.ts"

export const useSudokuStore = defineStore('sudoku', () => {
  const mapSize = ref<number>(9);
  const items = reactive<TileItem[]>([])
  

  const getMapSize = () => mapSize;
  const getItems = () => items;

  return {
    getItems,
    getMapSize
  }
})
