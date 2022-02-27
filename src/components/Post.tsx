import { Globe } from "../assets/icons";
import { TiThumbsUp } from "react-icons/ti";
import { RiShareForwardLine } from "react-icons/ri";
import { FaRegCommentAlt } from "react-icons/fa";
export const Post = () => {
  return (
    <div className="post">
      <div className="post__meta">
        <img className="post__meta-img" src="assets/person/me.jpg" alt="author" srcSet="assets/person/me.jpg" />
        <h4 className="post__author">Azizbek Umidjonov</h4>
        <h5 className="post__date">
          February 24 at 12:03AM · Ulsan ·{" "}
          <span className="post__shared-with">
            <Globe className="post__globe-icon"></Globe>
          </span>
        </h5>
      </div>
      <div className="post__content">
        <div className="post__content-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ratione assumenda a impedit suscipit facere ea itaque quas nobis sequi, consequatur beatae rerum aperiam fugiat voluptatibus accusamus, reiciendis
          quis laborum!
        </div>
        <img src="assets/person/me.jpg" alt="" srcSet="assets/person/me.jpg" className="post__content-img" />
      </div>

      <div className="reactions">
        <div className="reactions-count">
          <img src="assets/icons/like.png" alt="" srcSet="" className="reactions-count__icon reactions-count__icon--first" />
          <img src="assets/icons/haha.png" className="reactions-count__icon reactions-count__icon--second" alt="" srcSet="" />
          <img src="assets/icons/wow.png" className="reactions-count__icon reactions-count__icon--third" alt="" srcSet="" />

          <span className="reactions-count__text">You and 10 others</span>
        </div>
        <div className="interactions">
          <div className="interactions__emoji">
            <TiThumbsUp className="interactions__icon" />
            Like
          </div>
          <div className="interactions__comment">
            <FaRegCommentAlt className="interactions__icon interactions__icon--comment" /> Comment
          </div>
          <div className="interactions__share">
            <RiShareForwardLine className="interactions__icon" /> Share
          </div>
        </div>
      </div>

      <div className="write-comment">
        <img className="write-comment__img" src="assets/person/me.jpg" alt="" srcSet="" />
        <div className="write-comment__input-wrap">
          <input type="text" placeholder="Write a comment ..." name="" id="" className="write-comment__input" />
        </div>
      </div>
    </div>
  );
};
