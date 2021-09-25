import { BrowserRouter, Route, Switch } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupsPage from "./pages/NewMeetups";
import FavouritesPage from "./pages/Favourites";
// import MainNavigation from "./components/layout/MainNavigation";
import Layout from "./components/layout/layout";
function App() {
  return (
    <BrowserRouter>
      {/* <MainNavigation /> */}
      <Layout>
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
      </Layout>
    </BrowserRouter>
  );
}

export default App;
