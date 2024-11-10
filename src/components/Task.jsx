import Tag from "./Tag";
import FavStarSvg from "./UI/svg/FavStarSvg";
import StarSvg from "./UI/svg/StarSvg";

const Task = ({ task }) => {
  const { id, title, description, tags, priority, favorite } = task;
  return (
    <tr className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2">
      <td>{favorite ? <FavStarSvg /> : <StarSvg />}</td>
      <td>{title}</td>
      <td>
        <div>{description}</div>
      </td>
      <td>
        <ul className="flex justify-center gap-1.5 flex-wrap">
          {/* Tags */}
          {tags.map((tag, index) => (
            <Tag key={index++} tag={tag} />
          ))}
        </ul>
      </td>
      <td className="text-center">{priority}</td>
      <td>
        <div className="flex items-center justify-center space-x-3">
          <button className="text-red-500">Delete</button>
          <button className="text-blue-500">Edit</button>
        </div>
      </td>
    </tr>
  );
};

export default Task;
