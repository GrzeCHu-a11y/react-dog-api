import React, { createContext, useState } from "react";

export const dogImageContext = createContext({});

const ImageContext = ({ children }) => {
  const [dogName, setDogName] = useState(null);

  const catchDogName = (value) => {
    setDogName(value);
    console.log(value);
  };

  return <dogImageContext.Provider value={{ catchDogName, dogName }}>{children}</dogImageContext.Provider>;
};

export default ImageContext;
