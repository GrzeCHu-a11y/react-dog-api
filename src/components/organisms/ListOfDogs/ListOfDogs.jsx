import React, { useState, useEffect, useContext } from "react";
import style from "./ListOfDogs.module.scss";
import { Link } from "react-router-dom";
import axios from "axios";

const ListOfDogs = () => {
  const [dogs, setDogs] = useState([]);
  const [limit, setLimit] = useState(6);

  useEffect(() => {
    fetchDogs();
  }, []);

  const fetchDogs = async () => {
    try {
      const response = await axios.get("https://dog.ceo/api/breeds/list/all");
      const data = response.data;
      const dogNames = Object.keys(data.message).slice(0, limit);
      setDogs(dogNames);
      setLimit(limit + 6);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={style.listOfDogsContainer}>
      <div className={style.itemsWrapper}>
        {dogs.map((dog, index) => (
          <div className={style.item} key={index}>
            <Link to={`/${dog}`}>
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
