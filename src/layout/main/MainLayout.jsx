import React from "react";
import { Route, Switch } from "react-router-dom";
import PokemonList from "../../pages/public/pokemon-list/PokemonList";
import Navbar from "./navbar/Navbar";

const MainLayout = () => (
  <div className="flex flex-col h-full w-full">
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
