import { ref, onMounted } from 'vue';
import parts from '@/data/parts';

const allParts = [...parts.heads, ...parts.arms, ...parts.torsos, ...parts.bases];

export default function useSearch(originalSearchTerm) {
    // array to store search results ===========
    const results = ref([]);
    // search function ========================
    const searchInventory = (searchTerm) => {
        let searchResults;
        const term = searchTerm || originalSearchTerm;

        if (!term) searchResults = allParts; // 如果沒有特別的filter就顯示allParts
        else {
            const lowerTerm = term.toLowerCase();
            searchResults = allParts.filter(
                (part) => part.title.toLowerCase().includes(lowerTerm),
            );
        }
        results.value = [...searchResults];
    };
    // run functions ==========================
    searchInventory(originalSearchTerm);

    onMounted(() => console.log('Mounted: useSearch'));

    // export functions and data ==============
    return { searchResults: results, search: searchInventory };
}