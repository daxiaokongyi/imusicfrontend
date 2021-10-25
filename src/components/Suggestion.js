import {useEffect} from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Suggestion = () => {
    const history = useHistory();
    const genreRecommendArray = useSelector(st => st.users.user.favoriteSongs);     
    // const [isLoading, setIsLoading] = useState(true);
    let genreNameSelected = genreRecommendArray && genreRecommendArray.length !== 0 ? genreRecommendArray[genreRecommendArray.length - 1][3] : 'singer';

    // check if the current genren name includes forward slash, /
    if (genreNameSelected.includes('/')) {
        genreNameSelected = genreNameSelected.split('/')[0];
    }

    useEffect(()=> {
        async function getSuggestionSongs(genreName) {
            history.push(`/search?term=${genreName}`);
        }
        if (genreNameSelected) {
            getSuggestionSongs(genreNameSelected);
        }
    },[genreNameSelected, history]);

    return(null);
}

export default Suggestion;