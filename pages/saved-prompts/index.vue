<!-- pages/saved-prompts/index.vue -->
<template>
    <div>
      <h1>Saved Prompts</h1>
      <div v-if="error">{{ error }}</div>
      <ul v-else>
        <li v-for="prompt in prompts" :key="prompt.id">
          <NuxtLink :to="`/saved-prompts/${prompt.id}`">
            <h2>{{ prompt['Use Case'] }}</h2>
            <p>Last updated: {{ prompt['Last Significantly Updated At'] }}</p>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { useairtable } from '@/composables/useairtable';
  
  const { prompts, fetchPrompts, error } = useairtable();
  
  onMounted(fetchPrompts);
  </script>
  