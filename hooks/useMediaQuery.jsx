import {useState, useEffect} from 'react';

export const useMediaQuery = (query) => {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(query);
        const listener = () => setMatches(media.matches);
        listener(); // Appel initial pour régler l'état correctement
        media.addListener(listener);
        return () => media.removeListener(listener);
    }, [query]);

    return matches;
}