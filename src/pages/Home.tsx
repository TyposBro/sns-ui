import { Header } from "../components/Header";
import { Info } from "../components/Info";
import { Post } from "../components/Post";
import { Profile } from "../components/Profile";
import { Sidebar } from "../components/Sidebar";
export const Home = () => {
  return (
    <div className="home">
      <Header></Header>
      <Sidebar></Sidebar>
      <main className="home__content">
        <Profile></Profile>
        <div className="Home__feed">
          <Post></Post>
          <Post></Post>
          <Post></Post>
          <Post></Post>
          <Post></Post>
          <Post></Post>
        </div>
        <Info></Info>
      </main>
    </div>
  );
};
