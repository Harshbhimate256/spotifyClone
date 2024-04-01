import React, { useEffect, useState } from "react";
import App from "../App";
import { useDispatch, useSelector } from "react-redux";
import { setApiData } from "../store/apiDataSlice";
import axios from "axios";
import Card from "./Card";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";

function Foreground({ apidata, setInput, Call }) {
  const [showSearch, setshowSearch] = useState(false);
<<<<<<< HEAD
  
    // console.log(showSearch)
=======
  const dispatch = useDispatch();
  const [input, setinput] = useState("");
  const apiData = useSelector((state) => state.apiData.apidata);

  useEffect(() => {
    const call = async () => {
      try {
        const options = {
          // Your API options here
          method: "GET",
          url: "https://spotify23.p.rapidapi.com/search/",
          params: {
            q: `faded`,
            type: "multi",
            offset: "0",
            limit: "10",
            numberOfTopResults: "5",
          },
          headers: {
            "X-RapidAPI-Key":
              "api key",
            "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
          },
        };
        const response = await axios.request(options);
        const data = response.data;
        dispatch(setApiData(data));
      } catch (error) {
        console.error(error.response);
      }
    };
    if (input) {
      call();
    }
  }, [input]);

  // console.log(showSearch)
>>>>>>> c7b1c2914353032764855008f02c8a21e5df27a1
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
