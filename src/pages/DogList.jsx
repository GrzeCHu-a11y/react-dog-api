import style from "../styles/dogList.module.scss";
import Header from "../components/molecules/Header/Header";
import ListOfDogs from "../components/organisms/ListOfDogs/ListOfDogs";

const DogList = () => {
  return (
    <div className={style.dogList}>
      <Header headerName="Dog List" />
      <ListOfDogs />
    </div>
  );
};

export default DogList;
