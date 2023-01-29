import { redirect } from "next/dist/server/api-utils";
import s from "../../styles/Navbar.module.css";
import Link from "next/link";

const Navbar = ({ onClick }) => {
  return (
    <nav className={s.nav}>
      <div className={s.container}>
        <Link href={"/"} className={s.logo}>
          A
        </Link>
        <button onClick={onClick} className={s.command}></button>
      </div>
    </nav>
  );
};

export default Navbar;
