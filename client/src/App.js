import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./component/Main/Main";
import Profile from "./component/Profile/Profile";
import Video from "./component/Video/Video";


function App() {
  return (
    <BrowserRouter>
     <Switch>
       <Route path='/' exact component={Main}></Route>
       <Route path='/project' component={Video}></Route>
     </Switch>
    </BrowserRouter>
  );
}

export default App;
