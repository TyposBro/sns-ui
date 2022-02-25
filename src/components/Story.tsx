import { Plus } from "../assets/icons";

export const Story = ({ author = false }) => {
  console.log(author);

  return (
    <div className="story">
      {!author && (
        <div className="story__author">
          <img src="assets/person/1.jpeg" alt="" sizes="" srcSet="" className="story__author--img" />
        </div>
      )}
      <div className="story__container">
        <img src="assets/person/1.jpeg" alt="" sizes="" srcSet="" className="story__img" />
        {author ? (
          <div className="story__create">
            <Plus className="story__create--icon" />
            <h4 className="story__create--txt">Create story</h4>
          </div>
        ) : (
          <h4 className="story__txt">Your story</h4>
        )}
      </div>
    </div>
  );
};
