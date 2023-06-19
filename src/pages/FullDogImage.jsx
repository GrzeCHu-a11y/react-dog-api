import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import style from "../styles/fullDogImage.module.scss";
import axios from "axios";

const FullDogImage = () => {
  const [dogImg, setDogImg] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const { dog } = useParams();

  useEffect(() => {
    fetchDog();
  }, []);

  const fetchDog = async () => {
    try {
      const response = await axios.get(`https://dog.ceo/api/breed/${dog}/images/random`);
      const data = response.data;
      const dogImgUrl = data.message;
      setDogImg(dogImgUrl);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <div className={style.container}>
      <div className={style.imageContainer}>
        <h2>Random {dog} dog Image</h2>
        <br />
        {isLoading ? <div className={style.loader}></div> : <img src={dogImg} alt="Random Dog" className={style.dogImage} />}
        <Link to="/" className={style.backLink}>
          Back to dogs list
        </Link>
      </div>
    </div>
  );
};

export default FullDogImage;
