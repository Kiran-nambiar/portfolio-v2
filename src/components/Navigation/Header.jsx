import { HeaderWrapper } from "./styles";

const Header = () => {

  function myFunction() {
    document.body.classList.toggle("open");
  }

  return (
    <HeaderWrapper>
      <button onClick={myFunction} id="hamburger" className="menu-toggle"></button>
      <nav>
        <ul className="menu">
          <li className="nav-title" data-text="About">About</li>
          <li className="nav-title" data-text="Work">Work</li>
          <li className="nav-title" data-text="Contact">Contact</li>
        </ul>
      </nav>
    </HeaderWrapper>
  );
};

export default Header;
