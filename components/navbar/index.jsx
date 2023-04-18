import c from "../../styles/Navbar.module.css";
import Link from "next/link";

const Navbar = ({ onClick }) => {
  return (
    <nav className={c.nav}>
      <div className={c.container}>
        <Link href={"/"} className={c.logo}>
          A
        </Link>
        <button onClick={onClick} className={c.command}></button>
      </div>
    </nav>
  );
};

export default Navbar;
