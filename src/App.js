import "./App.css";
import Hero from "./components/Hero";
import React, { useState, useEffect } from "react";

function App() {
  const API_KEY = "23182425-11dd7e2a724aa85d4a73cb277";

  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [inputVal, setInputVal] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(inputVal);
    setInputVal("");
  };

  const newImages = (direction) => {
    if (direction === "next") {
      setCurrentPage((prevCurrent) => prevCurrent + 1);
    } else if (direction === "prrevious" && currentPage !== 1) {
      setCurrentPage((prevCurrent) => prevCurrent - 1);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    fetch(
      `https://pixabay.com/api/?key=${API_KEY}&q=${search}&image_type=photo&per_page=9&page=${currentPage}&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => setImages(data.hits));
  }, [search, currentPage]);

  return (
    <div className="App">
      <Hero
        images={images}
        inputVal={inputVal}
        setInputVal={setInputVal}
        handleSearch={handleSearch}
        newImages={newImages}
      />
    </div>
  );
}

export default App;
