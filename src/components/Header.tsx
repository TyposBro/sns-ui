import { Account, Logo, Search, Home, Watch, Groups, Gaming, Menu, Messenger, Notification } from "../assets/icons/index";

export const Header = () => {
  return (
    <div className="header">
      <div className="fb">
        <Logo className="fb__logo" />
        <div className="fb__search-box">
          <Search className="fb__search" />
          <input type="text" placeholder="Search Facebook " name="fb__input" id="fb__input" className="fb__input" />
        </div>
      </div>

      <nav className="nav">
        <span className="nav__icon nav__active">
          <Home className="nav__home" />
        </span>

        <span className="nav__icon">
          <Watch className="nav__watch" />
        </span>
        <span className="nav__icon">
          <Groups className="nav__groups" />
        </span>
        <span className="nav__icon">
          <Gaming className="nav__gaming" />
        </span>
      </nav>

      <div className="manage">
        <div className="manage__profile">
          <img src="assets/person/me.jpg" alt="Profile" sizes="" srcSet="assets/person/me.jpg" className="manage__img" />
          <h3 className="manage__text">Azizbek</h3>
        </div>
        <div className="manage__icon-box">
          <span className="manage__icon">
            <Menu className="manage__menu" />
          </span>
          <span className="manage__icon">
            <Messenger className="manage__messenger" />
          </span>
          <span className="manage__icon">
            <Notification className="manage__notification" />
          </span>
          <span className="manage__icon">
            <Account className="manage__account" />
          </span>
        </div>
      </div>
    </div>
  );
};
