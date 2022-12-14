import s from "../../styles/Navbar.module.css";

const Navbar = ({ onClick }) => {
  return (
    <>
      <nav className={s.nav}>
        <div className={s.container}>
          <h2 className={s.logo}>A</h2>
          <button onClick={onClick} className={s.command}></button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
