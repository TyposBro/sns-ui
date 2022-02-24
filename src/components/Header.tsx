import { ReactComponent as Logo } from "../logo.svg";
import HomeIcon from "@mui/icons-material/Home";
export const Header = () => {
  return (
    <div className="header">
      <div className="fb">
        <Logo className="fb__logo" />

        <input type="text" name="fb__search" id="fb__search" className="fb__search" />
      </div>

      <nav className="nav">

      </nav>
    </div>
  );
};
