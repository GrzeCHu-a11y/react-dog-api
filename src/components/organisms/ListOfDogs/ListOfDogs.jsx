import React, { useState, useEffect, useContext } from "react";
import style from "./ListOfDogs.module.scss";
import { dogImageContext } from "../../../contexts/ImageContex";
import { Link } from "react-router-dom";

const ListOfDogs = () => {
  const [dogs, setDogs] = useState([]);
  const [limit, setLimit] = useState(6);

  const context = useContext(dogImageContext);

  useEffect(() => {
    fetchDogs();
  }, []);

  const fetchDogs = async () => {
    try {
      const response = await fetch("https://dog.ceo/api/breeds/list/all");
      const data = await response.json();
      console.log(data);
      const dogNames = Object.keys(data.message).slice(0, limit);
      setDogs(dogNames);
      setLimit(limit + 6);
    } catch (error) {
      console.log(error);
    }
  };

  const viewDogImage = (dog) => context.catchDogName(dog);

  return (
    <div className={style.listOfDogsContainer}>
      <div className={style.itemsWrapper}>
        {dogs.map((dog, index) => (
          <div className={style.item} onClick={() => viewDogImage(dog)} key={index}>
            <Link to="/fullDogImage">
              <h3>{dog}</h3>
            </Link>
          </div>
        ))}
      </div>
      <div className={style.buttonWrapper}>
        <button className={style.button} onClick={fetchDogs}>
          Load 6 more dogs
        </button>
      </div>
    </div>
  );
};

export default ListOfDogs;
