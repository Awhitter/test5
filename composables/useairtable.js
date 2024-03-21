// composables/useairtable.js
import { ref } from 'vue';
import axios from 'axios';

const airtableBase = 'app7AvGRiyQV3V3vP';
const airtableTable = 'Core Prompts';
const apiKey = process.env.NUXT_PUBLIC_AIRTABLE_API_KEY; // Ensure this is securely stored in your .env file

export const useairtable = () => {
  const prompts = ref([]);
  const error = ref(null);

  const fetchPrompts = async () => {
    try {
      const response = await axios.get(`https://api.airtable.com/v0/${airtableBase}/${encodeURIComponent(airtableTable)}`, {
        headers: { Authorization: `Bearer ${apiKey}` },
      });
      prompts.value = response.data.records.map(record => ({
        id: record.id,
        ...record.fields,
      }));
      error.value = null;
    } catch (err) {
      console.error('Error fetching data from Airtable:', err);
      error.value = 'Failed to fetch prompts from Airtable.';
    }
  };

  return { prompts, fetchPrompts, error };
};
