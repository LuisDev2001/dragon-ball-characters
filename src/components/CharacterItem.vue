<script setup lang="ts">
  const props = defineProps<{
    name: string
    ki: string
    race: string
    description: string
    image: string
  }>()
</script>

<template>
  <div class="py-4 px-6 gap-2 shadow-md border border-gray-200 rounded-md flex items-center flex-col md:flex-row">
    <img
      :src="props.image"
      :alt="props.name"
      class="w-44 h-44 rounded-full object-contain aspect-square"
    >
    <div>
      <h2 class="text-xl font-semibold">
        {{ props.name }}
      </h2>
      <p class="text-sm text-gray-500">
        <b>Raza:</b> {{ props.race }}
      </p>
      <p class="text-sm text-gray-500">
        <b>Ki:</b> {{ props.ki }}
      </p>
      <p class="text-sm text-gray-500">
        <b>Descripción:</b> {{ props.description }}
      </p>
    </div>
  </div>
</template>

