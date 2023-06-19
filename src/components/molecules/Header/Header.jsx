import style from "./Header.module.scss";

const Header = ({ headerName }) => {
  return (
    <header className={style.header}>
      <h1 className={style.h1}>{headerName}</h1>
    </header>
  );
};

export default Header;
