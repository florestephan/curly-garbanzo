import React, {useCallback, useEffect, useState, useRef} from 'react';
import {Loader} from '@googlemaps/js-api-loader';
import {MarkerClusterer} from '@googlemaps/markerclusterer';
import {mapOptions} from '../utils/utils';
import defaultMarkerIcon from '../assets/mls-marker.png';
import {useDataStore} from '@/components/store';

const StoreLocatorMap = React.memo(({apiKey, mapOptionsProp, iconPaths}) => {
    const mapRef = useRef(null);
    const inputRef = useRef(null);
    const map = useRef(null);
    const [mapLoaded, setMapLoaded] = useState(false); // State to track whether map is loaded
    const markers = useRef([]);
    const markerCluster = useRef(null);

    const dataStores = useDataStore(state => state.dataStores);
    const setSelectedShop = useDataStore(state => state.setSelectedShop);
    const visibleStores = useDataStore(state => state.visibleStores);
    const hoveredIndex = useDataStore(state => state.hoveredStoreIndex);
    const selectedStoreIndex = useDataStore(state => state.selectedStoreIndex);

    const addMarkers = useCallback((storeData) => {
        if (!map.current || !storeData) return;

        const newMarkers = storeData.map((location, index) => new google.maps.Marker({
            position: new google.maps.LatLng(location.location.lat, location.location.lng),
            icon: iconPaths.markerIcon || defaultMarkerIcon,
            map: map.current,
            id: index,
        }));

        markers.current.forEach(marker => marker.setMap(null));
        markers.current = newMarkers;

        if (!markerCluster.current) {
            markerCluster.current = new MarkerClusterer({
                map: map.current,
                markers: markers.current,
                renderer: {
                    render: ({markers, _position: position}) => new google.maps.Marker({
                        position: {lat: position.lat(), lng: position.lng()},
                        label: {text: String(markers.length), color: '#484848'},
                        icon: iconPaths.markerIcon,
                    })
                },
            });
        } else {
            markerCluster.current.clearMarkers();
            markerCluster.current.addMarkers(markers.current);
        }
    }, [iconPaths]);

    useEffect(() => {
        const loader = new Loader({
            apiKey,
            version: 'weekly',
            libraries: ['places', 'maps']
        });

        loader.load().then(() => {
            setMapLoaded(true); // Set mapLoaded to true when API is loaded
        }).catch((error) => {
            console.error('Error loading Google Maps API:', error);
        });
    }, [apiKey]);

    useEffect(() => {
        if (mapLoaded) { // Check if map is loaded before initializing
            map.current = new google.maps.Map(mapRef.current, mapOptionsProp || mapOptions);

            const autocomplete = new google.maps.places.Autocomplete(inputRef.current, {
                componentRestrictions: {country: 'FR'},
                fields: ['geometry', 'name']
            });

            autocomplete.addListener('place_changed', () => {
                const place = autocomplete.getPlace();
                if (place.geometry) {
                    map.current.panTo(place.geometry.location);
                    map.current.setZoom(12);
                }
            });

            if (dataStores.length) {
                addMarkers(dataStores);
            }
        }
    }, [mapLoaded, mapOptionsProp, dataStores, addMarkers]);

    useEffect(() => {
        if (map.current && dataStores.length) {
            addMarkers(dataStores);
        }
    }, [dataStores, addMarkers]);

    useEffect(() => {
        if (selectedStoreIndex !== null && markers.current[selectedStoreIndex]) {
            const selectedMarker = markers.current[selectedStoreIndex];
            map.current.panTo(selectedMarker.getPosition());
            map.current.setZoom(15);
        }
    }, [selectedStoreIndex]);

    useEffect(() => {
        markers.current.forEach((marker, index) => {
            marker.setOpacity(1);
            markerCluster.current?.clusters[index]?.marker.setOpacity(1);
        });

        markerCluster.current?.clusters?.forEach((cluster) => {
            cluster.markers.forEach(marker => {
                if (marker?.id === hoveredIndex) {
                    cluster.marker.setOpacity(0.5);
                }
            });
        });
    }, [hoveredIndex, markers.current]);

    useEffect(() => {
        if (visibleStores.length) {
            addMarkers(visibleStores);
        }
    }, [visibleStores, addMarkers]);

    // Clean up markers when unmounting
    useEffect(() => {
        return () => {
            markerCluster.current && markerCluster.current.clearMarkers();
            markers.current.forEach(marker => marker.setMap(null));
        };
    }, []);

    return (
        <div className="col-span-6 lg:col-span-4 mobile:col-span-12">
            <div ref={mapRef} style={{width: '100%', height: '90vh'}} className="h-[90vh] lg:h-[80vh]"/>
            <div className="hidden">
                <input
                    type="text"
                    ref={inputRef}
                    className="border-none p-1.5 w-36 lg:w-auto lg:p-2 relative z-20 cursor-pointer bg-white shadow rounded overflow-hidden text-black text-xs font-medium text-center"
                    placeholder="Find location by city"
                />
            </div>
        </div>
    );
});

StoreLocatorMap.displayName = 'StoreLocatorMap';

export default StoreLocatorMap;
