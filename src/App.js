import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import WelcomePage from "./components/WelcomePage";
import Character from "./components/Character";


import { Route } from "react-router-dom";



export default function App() {



  return (
    <main>
      <Header />
      <Route exact path="/" component={WelcomePage} />
      <Route 
        path="/CharacterList" 
        render={props => {
          return <CharacterList {...props} />;
        }}
      />
      <Route
        path="/Character-List/:id"
        render={props => {
          return <Character {...props} />;
        }}
      />
    </main>
  );
}
