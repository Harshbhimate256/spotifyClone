import React, { useEffect, useState } from "react";
import App from "../App";
import axios from "axios";
import Card from "./Card";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";

function Foreground({ apidata, setInput, Call }) {
  const [showSearch, setshowSearch] = useState(false);
  
    // console.log(showSearch)
  return (
    <div className="h-full w-full bg-black flex">
      <Sidebar setshowSearch={setshowSearch} />
      <MainContent
        showSearch={showSearch}
        data={apidata}
        setinput={setInput}
        call={Call}
      />
      {/* <App /> */}
    </div>
  );
}

export default Foreground;
