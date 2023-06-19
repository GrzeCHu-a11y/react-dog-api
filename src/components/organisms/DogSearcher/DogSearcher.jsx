import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./DogSearcher.module.scss";

const DogSearcher = () => {
  const [dogBreed, setDogBreed] = useState("");
  const [dogImage, setDogImage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (event) => {
    setDogBreed(event.target.value);
  };

  const handleSearchClick = async () => {
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch(`https://dog.ceo/api/breed/${dogBreed}/images/random`);
      if (response.ok) {
        const data = await response.json();
        setDogImage(data.message);
      } else {
        setError("Dog not found");
      }
    } catch (error) {
      setError("An error occurred while downloading data.");
    }

    setIsLoading(false);
  };

  return (
    <div className={style.container}>
      <div className={style.inputContainer}>
        <input type="text" className={style.textInput} value={dogBreed} onChange={handleInputChange} />
        <button className={style.button} onClick={handleSearchClick}>
          Search
        </button>
      </div>

      {isLoading && <div className={style.loader}></div>}
      {error && <div>{error}</div>}
      {dogImage && (
        <div className={style.imageContainer}>
          <img src={dogImage} alt="Dog image" className={style.image} />
        </div>
      )}
      <Link to="/" className={style.backLink}>
        Back to dogs list
      </Link>
    </div>
  );
};

export default DogSearcher;
