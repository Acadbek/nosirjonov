import s from "../../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <nav className={s.nav}>
        <div className={s.container}>
          <h1 className={s.logo}>Nosirjonov</h1>
          <button className={s.command}></button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
