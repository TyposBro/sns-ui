import { Create } from "../components/Create";
import { Header } from "../components/Header";
import { Contacts } from "../components/Info";
import { Post } from "../components/Post";

import { Sidebar } from "../components/Sidebar";
import { Stories } from "../components/Stories";
export const Home = () => {
  return (
    <div className="home">
      <Header></Header>
      <Sidebar></Sidebar>
      <main className="home__content">
        <Stories />
        {/* <Create />
        <div className="Home__feed">
          <Post></Post>
          <Post></Post>
          <Post></Post>
          <Post></Post>
          <Post></Post>
          <Post></Post>
        </div> */}
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>

        <Post></Post>
        <Post></Post>
        <Post></Post>
      </main>
      <Contacts></Contacts>
    </div>
  );
};
