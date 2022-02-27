import { Post } from "./Post";
import { Stories } from "./Stories";

export const Content = ()=>{
    return (
      <div className="content">
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
      </div>
    );
}