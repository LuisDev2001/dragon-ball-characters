<script setup lang="ts">
  import { storeToRefs } from 'pinia'
  import useCharacters from '@/composables/useCharacters'
  import { useCharacterStore } from '@/stores/character.store'
  import CharacterItem from '@/components/CharacterItem.vue'

  const { isLoading } = useCharacters()
  const { characterList } = storeToRefs(useCharacterStore())
</script>

<template>
  <main class="max-w-4xl mx-auto px-4 mb-4">
    <div
      v-if="isLoading"
      class="text-center text-3xl font-bold my-2"
    >
      Cargando personajes...
    </div>
    <div v-else>
      <h1 class="text-center text-3xl font-bold my-4">
        Personajes de Dragon Ball Z 🐉
      </h1>
      <div class="space-y-4">
        <CharacterItem
          v-for="character in characterList"
          :key="character.id"
          :name="character.name"
          :description="character.description"
          :image="character.image"
          :ki="character.ki"
          :race="character.race"
        />
      </div>
    </div>
  </main>
</template>
