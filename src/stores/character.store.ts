import { defineStore } from 'pinia'
import type { CharacterItem } from '@/models/character.models'

export interface State {
  characterList: CharacterItem[]
}

export const useCharacterStore = defineStore('character', {
  state: (): State => ({
    characterList: []
  }),
  actions: {
    setCharacterList(payload: CharacterItem[]) {
      this.characterList = payload
    }
  }
})