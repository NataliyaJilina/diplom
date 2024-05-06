import { Link } from "react-router-dom";
import { AppButton } from "../AppButton/AppButton";
import { SCHeader } from "./Header.styled";

export const Header = () => {
  return (
    <SCHeader>
      <Link to="/profile">
        <button className="profileBtn"></button>
      </Link>
      <nav id="navigation">
        <Link to="/main" className="a">
          Main
        </Link>  
        <Link to="/details" className="a">
          Details
        </Link>
        <Link to="/favorites" className="a">
          Favorites
        </Link>
      

      </nav>
      <Link to="/">
        <button className="LogOutBtn">LogOut</button>
      </Link>
    
    </SCHeader>
  );
};