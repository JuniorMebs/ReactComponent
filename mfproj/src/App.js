import React from "react";
import ProfilPhoto from "./Component/Profile/ProfilePhoto"
import Fullname from "./Component/Profile/Full Name";
import Address from "./Component/Profile/Address";
import './App.css';

const App=() =>(
    <>
  
    <div className="MB">
      <div>
    <ProfilPhoto/>
    <Fullname/>
    <Address/>
    </div>
    </div>
    </>
  );
export default App;
