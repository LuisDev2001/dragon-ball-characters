import API from '@/api'
import type { CharacterResponse } from '@/models/character.models'

export const getCharacters = async (): Promise<CharacterResponse> => {
  try {
    const { data } = await API.get('/characters')
    return data
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : String(error))
  }
}
