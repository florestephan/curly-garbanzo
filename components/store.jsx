import {create} from 'zustand';
import {devtools} from 'zustand/middleware';

export const useDataStore = create(devtools((set, get) => ({
    dataStores: [],
    visibleStores: [],
    selectedShop: null,
    hoveredStoreIndex: null,
    selectedStoreIndex: null,


    updateDataStores: (stores) => set({dataStores: stores}),
    setVisibleStores: (stores) => set({visibleStores: stores}),
    setSelectedShop: (shop) => set({selectedShop: shop}),
    setHoveredStoreIndex: index => set({hoveredStoreIndex: index}),
    setSelectedStoreIndex: (index) => set({ selectedStoreIndex: index }),


    updateFilteredStores: (searchQuery, filterValue) => {
        const allStores = get().dataStores;
        const filtered = allStores.filter(store => {
            const nameMatch = store.richText[0].children[0].text.toLowerCase().includes(searchQuery.toLowerCase());
            return filterValue === 'all' ? nameMatch : (nameMatch && store.cols === filterValue);
        });
        set({visibleStores: filtered});
    },

    clearSelectedShop: () => set({selectedShop: null}),
})));
