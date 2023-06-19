import React, { useContext, useState, useEffect } from "react";
import { dogImageContext } from "../contexts/ImageContex";

const FullDogImage = () => {
  const context = useContext(dogImageContext);

  const dogName = context.dogName;
  const [dogImg, setDogImg] = useState("");

  useEffect(() => {
    fetchDog();
  }, []);

  const fetchDog = async () => {
    try {
      const response = await fetch(`https://dog.ceo/api/breed/${dogName}/images/random`);
      const data = await response.json();
      console.log(data);
      const dogImgUrl = data.message;
      setDogImg(dogImgUrl);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div>
        <h1>Random {dogName} dog Image</h1>
        {<img src={dogImg} alt="Random Dog" />}
      </div>
    </div>
  );
};

export default FullDogImage;
