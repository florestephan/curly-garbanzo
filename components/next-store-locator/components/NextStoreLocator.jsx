"use client";

import {useEffect, Suspense} from 'react';
import StoreLocatorMap from "./StoreLocatorMap.jsx";
import StoreSearch from "./StoreSearch.jsx";
import ShopDetail from "./ShopDetail.jsx";
import '../styles.css';
import {useDataStore} from "@/components/store";

const NextStoreLocator = ({locationsProp, apiKey, mapOptionsProp, iconPaths}) => {
    const updateDataStores = useDataStore(state => state.updateDataStores);
    const visibleStores = useDataStore(state => state.visibleStores);
    const selectedShop = useDataStore(state => state.selectedShop);
    const setSelectedShop = useDataStore(state => state.setSelectedShop);

    // Hydrate the store with initial locations if provided
    useEffect(() => {
        if (locationsProp && locationsProp.length > 0) {
            updateDataStores(locationsProp);
        }
    }, [locationsProp, updateDataStores]);

    const handleCloseDetail = () => setSelectedShop(null);

    return (
        <div className="relative grid grid-cols-6 overflow-hidden mobile:flex mobile:flex-col-reverse">
            <StoreLocatorMap
                apiKey={apiKey}
                mapOptionsProp={mapOptionsProp}
                iconPaths={iconPaths}
            />

            <div className="absolute left-20 top-10 w-1/3 bg-white overflow-hidden mobile:static mobile:w-full">
                <Suspense fallback={<p>Loading feed...</p>}>
                    <StoreSearch/>
                </Suspense>

                <Suspense fallback={<p>Loading feed...</p>}>
                    <ShopDetail
                        selectedShop={selectedShop}
                        handleCloseDetail={handleCloseDetail}
                    />
                </Suspense>
            </div>
        </div>
    );
};

export default NextStoreLocator;
