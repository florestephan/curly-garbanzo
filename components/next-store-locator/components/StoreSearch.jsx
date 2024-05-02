import {useCallback, useState, useEffect, Suspense} from 'react';
import {debounce} from "lodash";
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group";
import {Label} from "@/components/ui/label";
import {useDataStore} from "@/components/store";
import {PortableText} from "@portabletext/react";

const StoreSearch = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [isFilterVisible, setIsFilterVisible] = useState(false);
    const [filterValue, setFilterValue] = useState('all');

    // Accessing store functions and states
    const {
        updateFilteredStores,
        visibleStores,
        setSelectedShop,
        setHoveredStoreIndex,
        setSelectedStoreIndex,
    } = useDataStore(state => ({
        updateFilteredStores: state.updateFilteredStores,
        visibleStores: state.visibleStores,
        setSelectedShop: state.setSelectedShop,
        setHoveredStoreIndex: state.setHoveredStoreIndex,
        setSelectedStoreIndex: state.setSelectedStoreIndex,

    }));


    // Debounced search function
    const handleSearch = useCallback(debounce(() => {
        updateFilteredStores(searchQuery, filterValue);
    }, 500), [searchQuery, filterValue, updateFilteredStores]);

    // Update search on query change
    useEffect(() => {
        handleSearch();
        return () => handleSearch.cancel(); // Cleanup on unmount
    }, [handleSearch]);

    // Toggle visibility of filter options
    const toggleFilter = () => setIsFilterVisible(!isFilterVisible);

    // Update the filter value and perform a new search
    const handleFilterChange = (value) => {
        setFilterValue(value);
        updateFilteredStores(searchQuery, value); // Immediately apply filter
    };

    return (
        <div className="h-[60vh] lg:h-[80vh] z-10 m-5 grid">
            <div className="w-full flex justify-between items-center">
                <h2 className="block text-34 py-4">TROUVEZ UN MAGASIN <span
                    className="text-GreyP">({visibleStores.length})</span></h2>
            </div>

            <div className="relative">
                <input
                    type="text"
                    placeholder="Cherchez par villes ou pays"
                    className="border border-Grey bg-GreyM py-3 pl-2 w-full focus:outline-none"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <span
                    className="font-robotoFlex text-[14px] uppercase absolute h-full content-center right-6"></span>
            </div>

            <div className="flex items-center justify-between mt-2.5">
                <span className="text-12 text-Black block">Magasin près de “lieu recherché”</span>
                <span className="text-Black text-12 flex items-center justify-center gap-x-2 cursor-pointer"
                      onClick={toggleFilter}>
                    Filtre
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="9" fill="none" viewBox="0 0 12 9">
                        <path fill="#484848" fillRule="evenodd" d="M5 5L0 0h12L7 5v3.111L5 9V5z"
                              clipRule="evenodd"></path>
                    </svg>
                </span>
            </div>

            {isFilterVisible && (
                <RadioGroup onValueChange={handleFilterChange}
                            className="flex items-center justify-between mt-6"
                            defaultValue="all">
                    <div className="flex items-end space-x-2">
                        <RadioGroupItem value="all" id="option-all"/>
                        <Label className="text-12" htmlFor="option-all">All</Label>
                    </div>

                    <div className="flex items-end space-x-2">
                        <RadioGroupItem value="Barro" id="option-one"/>
                        <Label className="text-12" htmlFor="option-one">Barro</Label>
                    </div>

                    <div className="flex items-end space-x-2">
                        <RadioGroupItem value="Barro & Mademoiselle by Barro" id="option-two"/>
                        <Label className="text-12" htmlFor="option-two">Barro & Mademoiselle by Barro</Label>
                    </div>

                    <div className="flex items-end space-x-2">
                        <RadioGroupItem value="Mademoiselle by Barro" id="option-three"/>
                        <Label className="text-12" htmlFor="option-three">Mademoiselle by Barro</Label>
                    </div>
                </RadioGroup>
            )}

            <div className="wrapper overflow-y-scroll" data-lenis-prevent>
                <ul className="">
                    <Suspense fallback={<p>Loading feed...</p>}>
                        {visibleStores.map((store, index) => (
                            <div
                                className="border-t-[1px] border-GreyBlue first:mt-5 cursor-pointer hover:bg-gray-100 px-2"
                                onClick={() => setSelectedStoreIndex(index)}
                                onMouseEnter={() => setHoveredStoreIndex(index)}
                                onMouseLeave={() => setHoveredStoreIndex(null)}
                                key={index}>
                                <div className="py-5 border-b last:border-b-0 ">
                                    <div className="text-20 text-Black uppercase">{store.company}</div>

                                    <div className="pb-5 w-full flex justify-between">
                                        <div className="portabletxt text-12">
                                            <PortableText value={store.richText}/>
                                            <a href={`tel:${store.phone}`}>{store.phone}</a>
                                        </div>

                                        <div
                                            className="flex flex-col gap-y-5 items-end font-robotoFlex text-12 text-Black uppercase">
                                            <a target="_blank" href={store.route}>Itinéraire</a>

                                            <a target="_blank" href={store.web}>Site internet</a>
                                        </div>
                                    </div>

                                    <p className="text-12 bg-GreyBlue flex items-center justify-center h-7">
                                        {store.cols}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </Suspense>
                </ul>
            </div>

        </div>
    );
};

export default StoreSearch;
