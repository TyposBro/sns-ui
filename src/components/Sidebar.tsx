export const Sidebar = () => {
  return (
    <nav className="sidebar">
      <ul className="sidebar__list">
        <li className="sidebar__item">
          <a href="http://localhost:3000" className="sidebar__link">
            <img src="assets/person/me.jpg" alt="profile" sizes="" srcSet="" />
            Azizbek Umidjonov
          </a>
        </li>
        <li className="sidebar__item">
          <a href="http://localhost:3000" className="sidebar__link">
            <img src="assets/fb/friends.png" alt="friends" sizes="" srcSet="" />
            Friends
          </a>
        </li>
        <li className="sidebar__item">
          <a href="http://localhost:3000" className="sidebar__link">
            <img src="assets/fb/groups.png" alt="groups" sizes="" srcSet="" />
            Groups
          </a>
        </li>
        <li className="sidebar__item">
          <a href="http://localhost:3000" className="sidebar__link">
            <img src="assets/fb/watch.png" alt="watch" sizes="" srcSet="" />
            Watch
          </a>
        </li>
        <li className="sidebar__item">
          <a href="http://localhost:3000" className="sidebar__link">
            <img src="assets/fb/memories.png" alt="memories" sizes="" srcSet="" />
            Memories
          </a>
        </li>
        <li className="sidebar__item">
          <a href="http://localhost:3000" className="sidebar__link">
            <img src="assets/fb/saved.png" alt="saved" sizes="" srcSet="" />
            Saved
          </a>
        </li>
        <li className="sidebar__item">
          <a href="http://localhost:3000" className="sidebar__link">
            <img src="assets/fb/pages.png" alt="pages" sizes="" srcSet="" />
            Pages
          </a>
        </li>
        <li className="sidebar__item">
          <a href="http://localhost:3000" className="sidebar__link">
            <img src="assets/fb/events.png" alt="events" sizes="" srcSet="" />
            Events
          </a>
        </li>
      </ul>
      -------
      <h3 className="sidebar__shortcuts">Your shortcuts</h3>
      <ul className="sidebar__list">
        <li className="sidebar__item">
          <a href="http://localhost:3000" className="sidebar__link">
            <img src="assets/person/1.jpeg" alt="shortcut" sizes="" srcSet="" />
            UISO
          </a>
        </li>
        <li className="sidebar__item">
          <a href="http://localhost:3000" className="sidebar__link">
            <img src="assets/person/2.jpeg" alt="shortcut" sizes="" srcSet="" />
            Uzbek Students in Korea
          </a>
        </li>{" "}
        <li className="sidebar__item">
          <a href="http://localhost:3000" className="sidebar__link">
            <img src="assets/person/3.jpeg" alt="shortcut" sizes="" srcSet="" />
            Programming jokes
          </a>
        </li>
      </ul>
    </nav>
  );
};
