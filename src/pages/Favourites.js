import { useContext } from 'react';

import FavoritesContext from '../store/favorites-context';
import MeetupList from '../components/meetups/MeetupList';

function FavouritesPage() {
    const favoritesContx = useContext(FavoritesContext);

    let content;

    if(favoritesContx.totalFavorites === 0) {
        content = <p>You have selected no favorites, start adding some?</p>
    } else {
        content = <MeetupList meetups={favoritesContx.favorites} />
    }
    return <section>
        <h1>My Favorites</h1>
        {content}
    </section> 
}


export default FavouritesPage;