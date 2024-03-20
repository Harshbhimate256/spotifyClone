import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";
function App() {
  const [artists, setartists] = useState([]);
  const [input, setinput] = useState("");
  // const [coverArt, setcoverArt] = useState("");
  const [albums, setalbums] = useState([]);
  const call = async () => {
    const options = {
      method: "GET",
      url: "https://spotify23.p.rapidapi.com/search/",
      params: {
        q: `${input}`,
        type: "multi",
        offset: "0",
        limit: "10",
        numberOfTopResults: "5",
      },
      headers: {
        "X-RapidAPI-Key": "ed67f26ca5msh9836f59584af8d5p137bc6jsn2e0fb0b90074",
        "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
      },
    };
    try {
      const response = await axios.request(options);
      const data = response.data;
      const artistsData = data.artists.items;
      setartists(artistsData);
      const albumData = data.albums.items;
      setalbums(albumData);
      // console.log(artists);
      console.log(data);
      // const coverArtData = albumData[0].data.coverArt.sources[0].url;
      // setcoverArt(coverArtData);
    } catch (error) {
      console.error(error.response);
    }
  };
  return (
    <>
      <input
        type="text"
        className="w-[20vw] border-2 border-black mt-[2vw] px-5"
        onChange={(e) => {
          const inputData = e.target.value;
          setinput(inputData);
          // console.log(input);
        }}
      />
      <button onClick={call} className="border-black border-2 w-[5vw] ml-2">
        search
      </button>
      <div className="text-white">
        {artists.map((item, index) => {
          return <p key={index}>{item.data.profile.name}</p>;
        })}
      </div>
      <div className="CardContainer flex gap-10 mt-10 flex-wrap">
        {albums.map((item, index) => {
          return (
            <>
              <Card albumData={item} key={index} />
              {console.log(item)}
            </>
          );
        })}
      </div>
    </>
  );
}

export default App;