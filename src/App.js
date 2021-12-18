import React from 'react';
import {useSelector} from "react-redux"
import './App.css';
import Header from './Header';
import SideBar from "./SideBar.js"
import Feed from "./Feed.js"
import { selectUser } from "./features/userSlice.js"
import Login from "./Login.js"
import Widget from "./Widget.js"


function App() {
  const user = useSelector(selectUser)
  return (
    <div className="app">
      <Header />
      {!user ? <Login/>: (
        <div className="app_body">
        <SideBar/>
        <Feed/>
        <Widget />
        </div>
      )}
     

        {/* App Body */}
        {/*Sidebar */}
     
        {/*Widget*/}
        
    </div>
  );
}

export default App;
