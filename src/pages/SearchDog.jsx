import style from "../styles/searchDog.module.scss";
import Header from "../components/molecules/Header/Header";
import DogSearcher from "../components/organisms/DogSearcher/DogSearcher";
const SearchDog = () => {
  return (
    <div className={style.searchDog}>
      <Header headerName="Search Dog" />
      <DogSearcher />
    </div>
  );
};

export default SearchDog;
