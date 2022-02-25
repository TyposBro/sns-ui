import { StoryItem } from "./StoryItem";

export const Stories = () => {
  return (
    <div className="stories">
      <ul className="stories__list">
        <li className="stories__item">
          <StoryItem />
          <StoryItem />
          <StoryItem />
          <StoryItem />
          <StoryItem />
        </li>
      </ul>
    </div>
  );
};
