import { Link } from "@mui/material";
import { HeaderWrapper } from "./styles";

const Header = () => {

  function handleClick() {
    document.body.classList.toggle("open");
  }

  return (
    <HeaderWrapper>
      <button onClick={handleClick} id="hamburger" className="menu-toggle"></button>
      <nav>
        <ul className="menu">
          <Link href="/about" color="unset" underline="none"><li className="nav-title" data-text="About">About</li></Link>
          <Link href="/work" color="unset" underline="none"><li className="nav-title" data-text="Work">Work</li></Link>
          <Link href="/contact" color="unset" underline="none"><li className="nav-title" data-text="Contact">Contact</li></Link>
        </ul>
      </nav>
    </HeaderWrapper>
  );
};

export default Header;
