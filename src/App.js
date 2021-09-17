import { BrowserRouter, Route, Switch } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupsPage from "./pages/NewMeetups";
import FavouritesPage from "./pages/Favourites";
import MainNavigation from "./components/layout/MainNavigation";

function App() {
  // localhost: 3000
  // my-page.com/
  // the path is here =>/ or a /Favourites

  return (
    <div>
      <BrowserRouter>
      <MainNavigation />
        <Switch>
          <Route path="/" exact>
            <AllMeetupsPage />
          </Route>
          <Route path="/new-meetup">
            <NewMeetupsPage />
          </Route>
          <Route path="/fav">
            <FavouritesPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
