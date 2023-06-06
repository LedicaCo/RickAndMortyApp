import { useEffect, useState } from "react";
import "./App.css";
import useFetch from "./hooks/useFetch";
import getRandomNumber from "./utils/getRandomNumber";
import LocationInfo from "./components/LocationInfo";
import ResidentCard from "./components/ResidentCard";
import FormSearch from "./components/FormSearch";
import Pagination from "./components/Pagination";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10; // El número total de páginas en tu aplicación

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Aquí puedes realizar cualquier acción adicional, como obtener datos de la página actual, etc.
  };
  
  const randomId = getRandomNumber(126);

  const [idLocation, setIdLocation] = useState(randomId);

  const url = `https://rickandmortyapi.com/api/location/${idLocation}`;

  const [location, getApiLocation, hasError] = useFetch(url);

  useEffect(() => {
    getApiLocation();
  }, [idLocation]);

  return (
    <div className="app app__content">
      <img className="app__banner" src="./banner.png" alt="banner" />
      <FormSearch setIdLocation={setIdLocation} />
      {hasError ? (
        <h2>Ooops, Hey! you must provide an id from 1 to 126</h2>
      ) : (
        <>
          <LocationInfo location={location} />
          <div className="resident-container">
            {location?.residents.map((url) => (
              <ResidentCard url={url} key={url} />
            ))}
          </div>
        </>
      )}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default App;
