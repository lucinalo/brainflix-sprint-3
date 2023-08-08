import "./_Header.scss";
import brainFlixLogo from "../../assets/images/BrainFlix-logo.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="border-bottom" >
      <div className="header">
        <Link to="/" className="header__logo">
          <img src={brainFlixLogo} alt="Brain Flix Nav Logo"></img>
        </Link>
        <div className="header__actions">
          <div placeholder="Search" className="header__search">Search</div>
          <Link to={"/upload"} className="header__upload-link">
            UPLOAD
          </Link>
          <div className="header__user"></div>
        </div>
      </div>
    </div>
  );
}

export default Header;
