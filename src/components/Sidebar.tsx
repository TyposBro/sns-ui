import { ArrowDown } from "../assets/icons";

export const Sidebar = () => {
  return (
    <nav className="sidebar">
      <ul className="sidebar__list">
        <li className="sidebar__item">
          <a href="http://localhost:3000" className="sidebar__link">
            <img className="sidebar__icon sidebar__icon--img" src="assets/person/me.jpg" alt="profile" sizes="" srcSet="" />
            Azizbek Umidjonov
          </a>
        </li>
        <li className="sidebar__item">
          <a href="http://localhost:3000" className="sidebar__link">
            <img className="sidebar__icon" src="assets/fb/friends.png" alt="friends" sizes="" srcSet="" />
            Friends
          </a>
        </li>
        <li className="sidebar__item">
          <a href="http://localhost:3000" className="sidebar__link">
            <img className="sidebar__icon" src="assets/fb/groups.png" alt="groups" sizes="" srcSet="" />
            Groups
          </a>
        </li>
        <li className="sidebar__item">
          <a href="http://localhost:3000" className="sidebar__link">
            <img className="sidebar__icon" src="assets/fb/watch.png" alt="watch" sizes="" srcSet="" />
            Watch
          </a>
        </li>
        <li className="sidebar__item">
          <a href="http://localhost:3000" className="sidebar__link">
            <img className="sidebar__icon" src="assets/fb/memories.png" alt="memories" sizes="" srcSet="" />
            Memories
          </a>
        </li>
        <li className="sidebar__item">
          <a href="http://localhost:3000" className="sidebar__link">
            <img className="sidebar__icon" src="assets/fb/saved.png" alt="saved" sizes="" srcSet="" />
            Saved
          </a>
        </li>
        <li className="sidebar__item">
          <a href="http://localhost:3000" className="sidebar__link">
            <img className="sidebar__icon" src="assets/fb/pages.png" alt="pages" sizes="" srcSet="" />
            Pages
          </a>
        </li>
        <li className="sidebar__item">
          <a href="http://localhost:3000" className="sidebar__link">
            <img className="sidebar__icon" src="assets/fb/events.png" alt="events" sizes="" srcSet="" />
            Events
          </a>
        </li>

        <li className="sidebar__item sidebar__more">
          <ArrowDown className="sidebar__more sidebar__more--icon " />
          <span className="sidebar__more sidebar__more--txt">See more</span>
        </li>
      </ul>
      <div className="sidebar__divide">
        <div className="sidebar__line"></div>
      </div>
      <h3 className="sidebar__shortcuts">Your shortcuts</h3>
      <ul className="sidebar__list">
        <li className="sidebar__item">
          <a href="http://localhost:3000" className="sidebar__link">
            <img className="sidebar__icon sidebar__icon--round" src="assets/person/1.jpeg" alt="shortcut" sizes="" srcSet="" />
            UISO
          </a>
        </li>
        <li className="sidebar__item">
          <a href="http://localhost:3000" className="sidebar__link">
            <img className="sidebar__icon sidebar__icon--round" src="assets/person/2.jpeg" alt="shortcut" sizes="" srcSet="" />
            Uzbek Students in Korea
          </a>
        </li>
        <li className="sidebar__item">
          <a href="http://localhost:3000" className="sidebar__link">
            <img className="sidebar__icon sidebar__icon--round" src="assets/person/3.jpeg" alt="shortcut" sizes="" srcSet="" />
            Programming jokes
          </a>
        </li>
      </ul>
    </nav>
  );
};
