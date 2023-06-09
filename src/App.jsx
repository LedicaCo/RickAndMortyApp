import { useEffect, useState } from "react";
import "./App.css";
import useFetch from "./hooks/useFetch";
import getRandomNumber from "./utils/getRandomNumber";
import LocationInfo from "./components/LocationInfo";
import ResidentCard from "./components/ResidentCard";
import FormSearch from "./components/FormSearch";


function App() {
  
  
  const randomId = getRandomNumber(126);

  const [idLocation, setIdLocation] = useState(randomId);

  const url = `https://rickandmortyapi.com/api/location/${idLocation}`;

  const [location, getApiLocation, hasError] = useFetch(url);

  useEffect(() => {
    getApiLocation();
  }, [idLocation]);

  return (
    <div className="app app__content">
      <img className="app__banner" src="./banner.jpg" alt="banner" />
      <FormSearch setIdLocation={setIdLocation} />
      {hasError ? (
        <div className="msg__id">
          <i className='bx bxs-confused'></i>
          <h4 className="msg__id--location">Hey! you must provide an id from 1 to 126</h4>
        </div>
      ) : (
        <>
          <LocationInfo location={location} />
          <div className="resident__container">
            {location?.residents.map((url) => (
              <ResidentCard url={url} key={url} />
            ))}
          </div>
        </>
      )}
     
    </div>
  );
}

export default App;
