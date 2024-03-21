<!-- pages/saved-prompts/_slug.vue -->
<template>
  <div>
    <div v-if="error">{{ error }}</div>
    <div v-else-if="prompt">
      <h1>{{ prompt['Use Case'] }}</h1>
      <p>Last updated: {{ prompt['Last Significantly Updated At'] }}</p>
      <div v-html="prompt.Description"></div>
      <!-- Display other fields as needed -->
    </div>
    <div v-else>Loading prompt...</div>
  </div>
</template>

<script setup>
import { useairtable } from '@/composables/useairtable';
import { useRoute } from 'vue-router';

const route = useRoute();
const promptId = route.params.slug;

const { prompts, fetchPrompts, error } = useairtable();

onMounted(fetchPrompts);

const prompt = computed(() => prompts.value.find(p => p.id === promptId));
</script>
