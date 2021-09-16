import { Route, Switch } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupsPage from "./pages/NewMeetups";
import FavouritesPage from "./pages/Favourites";

function App() {
  // localhost: 3000
  // my-page.com/
  // the path is here =>/ or a /Favourites

  return (
    <div>
      <Switch>
        <Route path="/">
          <AllMeetupsPage />
        </Route>
        <Route path="/new-meetup">
          <NewMeetupsPage />
        </Route>
        <Route path="/fav">
          <FavouritesPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
