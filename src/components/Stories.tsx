import { Story } from "./Story";

export const Stories = () => {
  return (
    <div className="stories">
      <ul className="stories__list">
        <li className="stories__item">
          <Story author={true} />
        </li>

        <li className="stories__item">
          <Story />
        </li>
        <li className="stories__item">
          <Story />
        </li>
        <li className="stories__item">
          <Story />
        </li>
        <li className="stories__item">
          <Story />
        </li>
      </ul>
    </div>
  );
};
