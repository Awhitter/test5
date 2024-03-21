// composables/useAirtable.js
import { ref } from 'vue';
import axios from 'axios';

const airtableBase = 'your_airtable_base_id';
const airtableTable = 'YourTableName';
const apiKey = 'your_airtable_api_key'; 

export const useAirtable = () => {
  const records = ref([]);

  const fetchRecords = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    };
    try {
      const response = await axios.get(`https://api.airtable.com/v0/${airtableBase}/${encodeURIComponent(airtableTable)}`, config);
      records.value = response.data.records;
    } catch (error) {
      console.error('Error fetching data from Airtable:', error);
    }
  };

  return { records, fetchRecords };
};
