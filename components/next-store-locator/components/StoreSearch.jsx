import React, {useCallback, useEffect, useState} from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import {debounce} from "lodash";
import SearchIcon from "./icons/SearchIcon.jsx";
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group";
import {Label} from "@/components/ui/label";

const StoreSearch = ({handleShopSelect, visibleStores}) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [isFilterVisible, setIsFilterVisible] = useState(false);
    const [filteredStores, setFilteredStores] = useState([]);
    const [filterValue, setFilterValue] = useState('all')


    const toggleFilter = () => {
        setIsFilterVisible(!isFilterVisible)
    }

    const handleFilterChange = (e) => {
        setFilterValue(e)
    }

    const handleSearch = useCallback(debounce(query => {
        const lowerCaseQuery = query.toLowerCase();
        const filtered = visibleStores.filter(store =>
                store.richText[0].children[0].text.toLowerCase().includes(lowerCaseQuery) && store.cols === filterValue
            )
        ;
        setFilteredStores(filtered);
    }, 500), [visibleStores, filterValue]);

    useEffect(() => {
        handleSearch(searchQuery);
    }, [searchQuery, handleSearch]);

    useEffect(() => {
        return () => handleSearch.cancel();
    }, [handleSearch]);

    return (
        <div className="h-[60vh] lg:h-[80vh] border-1-2 border-gray-300 z-10 m-5">
            <div className="w-full flex justify-between items-center">
                <h2 className="block text-34 py-4">TROUVEZ UN MAGASIN <span
                    className="text-GreyP">({filteredStores.length})</span></h2>
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
                    className="font-robotoFlex text-[14px] uppercase absolute h-full content-center right-6">RECHERCHER</span>
            </div>


            <div className="flex items-center justify-between mt-2.5">
                <span className="text-12 text-Black block">Magasin près de “lieu recherché”</span>
                <span className="text-Black text-12 flex items-center justify-center gap-x-2 cursor-pointer"
                      onClick={toggleFilter}>
                Filtre
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="9" fill="none" viewBox="0 0 12 9">
                    <path fill="#484848" fillRule="evenodd" d="M5 5L0 0h12L7 5v3.111L5 9V5z" clipRule="evenodd">
                    </path>
                </svg>
            </span>
            </div>

            {/*Filtre mettre foncitonnement en place via la value et le field sanity*/}
            {isFilterVisible && (
                <RadioGroup onValueChange={(e) => handleFilterChange(e)}
                            className="flex items-center justify-between mt-6"
                            defaultValue="mllebarro">

                    <div className="flex items-baseline space-x-2">
                        <RadioGroupItem value="all" id="option-all"/>
                        <Label htmlFor="option-all">All</Label>
                    </div>

                    <div className="flex items-baseline space-x-2">
                        <RadioGroupItem value="barro" id="option-one"/>
                        <Label htmlFor="option-one">Barro</Label>
                    </div>

                    <div className="flex items-baseline space-x-2">
                        <RadioGroupItem value="mllebarro" id="option-two"/>
                        <Label htmlFor="option-two">Barro & Mademoiselle by Barro</Label>
                    </div>

                    <div className="flex items-baseline space-x-2">
                        <RadioGroupItem value="mlle" id="option-three"/>
                        <Label htmlFor="option-three">Mademoiselle by Barro</Label>
                    </div>

                </RadioGroup>
            )}

            <ul className="overflow-y-auto h-full scrollbar">
                {filteredStores.map((store, index) => (
                    <div className="cursor-pointer hover:bg-gray-100 pl-4" onClick={() => handleShopSelect(store)}
                         key={index}>
                        <div className="py-4 border-b last:border-b-0 ">
                            <div className="py-4 border-b last:border-b-0 ">
                                <div className="font-semibold text-lg">{store.company}</div>
                                <div className="ml-1 text-sm text-gray-600 capitalize"><span
                                    className="text-black font-semibold">Address:</span> {store.state} {store.land} {store.postcode}
                                </div>
                                <div className="ml-1 text-sm text-gray-600"><span
                                    className="text-black font-semibold">Phone:</span> {store.phone}</div>
                                <div className="ml-1 text-sm text-gray-600"><span
                                    className="text-black font-semibold">Email:</span> <a href={`mailto:${store.email}`}
                                                                                          className="text-blue-600">{store.email}</a>
                                </div>
                                <div className="ml-1 text-sm text-gray-600"><span
                                    className="text-black font-semibold">Website:</span> <a href={store.web}
                                                                                            target="_blank"
                                                                                            rel="noopener noreferrer"
                                                                                            className="text-blue-600">{store.web}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default StoreSearch;
