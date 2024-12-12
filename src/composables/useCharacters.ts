import { useQuery } from '@pinia/colada'
import { getCharacters } from '@/services/dragon.ball.services'
import { useCharacterStore } from '@/stores/character.store'

const useCharacters = () => {
  const { setCharacterList } = useCharacterStore()

  const { data, isLoading, asyncStatus } = useQuery({
    key: ['characters'],
    query: async () => {
      const response = await getCharacters()
      setCharacterList(response.items)
      return response
    },
    staleTime: 1000 * 60 * 5 // 5 minutes
  })

  return {
    characters: data,
    isLoading,
    asyncStatus
  }
}

export default useCharacters
