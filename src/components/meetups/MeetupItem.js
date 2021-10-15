import { useContext } from 'react';

import Card from '../ui/Card';
import classes from './MeetupItem.module.css';
import FavoritesContext from '../../store/favorites-context';

function MeetupItem(props) {
  const favoritesContx = useContext(FavoritesContext);

  const itemIsFavorite = favoritesContx.itemIsFavorite(props.id);

  function toggleFavoriteStatusHandler() {
     if (itemIsFavorite) {
       favoritesContx.removeFavorite(props.id);
     } else {
       favoritesContx.addFavorite({
         id: props.id,
         title: props.title,
         description: props.description,
         image: props.image,
         address: props.address,
       });
     }
   }


  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
          <div className={classes.action}>
            <button onClick={toggleFavoriteStatusHandler}>{itemIsFavorite ? 'Remove from Favorites' : 'To Favourites'}</button>
          </div>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
