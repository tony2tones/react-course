import { Route } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetups";
import FavouritesPage from "./pages/Favourites";

function App() {
  // localhost: 3000
  // my-page.com/
  // the path is here =>/ or a /Favourites

  return <div>
<Route path='/'>
  <AllMeetupsPage />
</Route>
<Route path='/new-meetup'>
  <NewMeetupPage />
</Route>
<Route path='favourites'>
  <FavouritesPage />
</Route>
  </div>
}

export default App;
