import Tag from "./Tag";
import FavStarSvg from "./UI/svg/FavStarSvg";
import StarSvg from "./UI/svg/StarSvg";

const Task = ({ task, onEditTask, onDeleteTask }) => {
  const { id, title, description, tags, priority, favorite } = task;
  return (
    <tr className="border-b border-[#2E3443] [&>td]:align-center [&>td]:px-4 [&>td]:py-2">
      <td>{favorite ? <FavStarSvg /> : <StarSvg />}</td>
      <td className="capitalize">{title}</td>
      <td>
        <div className="capitalize">{description}</div>
      </td>
      <td>
        <ul className="flex justify-center gap-1.5 flex-wrap">
          {/* Tags */}
          {tags.map((tag, index) => (
            <Tag key={index++} tag={tag} />
          ))}
        </ul>
      </td>
      <td className="text-center capitalize">{priority}</td>
      <td>
        <div className="flex items-center justify-center space-x-3">
          <button onClick={() => onDeleteTask(id)} className="text-red-500">
            Delete
          </button>
          <button onClick={() => onEditTask(task)} className="text-blue-500">
            Edit
          </button>
        </div>
      </td>
    </tr>
  );
};

export default Task;
