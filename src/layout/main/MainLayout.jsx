import React from "react";
import { Route, Switch } from "react-router-dom";
import PokemonList from "../../pages/public/pokemon-list/PokemonList";
import Navbar from "./navbar/Navbar";

const MainLayout = () => (
  <div className="main-layout d-flex flex-column h-100 w-100">
    <Navbar />

    <div className="content">
      <Switch>
        <Route path="/">
          <PokemonList />
        </Route>
      </Switch>
    </div>
  </div>
);

export default MainLayout;
