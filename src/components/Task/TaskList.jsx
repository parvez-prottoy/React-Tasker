import { FaRegStar, FaStar } from "react-icons/fa";

export default function TaskList({ tasks, onEditTask, onDeleteTask }) {
  const tagColors = [
    "bg-green-500",
    "bg-blue-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-yellow-500",
    "bg-red-500",
    "bg-indigo-500",
    "bg-teal-500",
  ];
  return (
    <div className="overflow-y-hidden overflow-x-scroll lg:overflow-x-hidden">
      <table className="table-auto w-full mt-10 border-slate-300 border-1 p-5 rounded-lg">
        <thead>
          <tr className="bg-slate-100 border-b-1 border-slate-300">
            <th className="px-4 py-3"></th>
            <th className="px-4 py-3">Title</th>
            <th className="px-4 py-3">Description</th>
            <th className="px-4 py-3">Tags</th>
            <th className="px-4 py-3">Priority</th>
            <th className="px-4 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <tr key={task.id} className="border-b-1 border-slate-300">
                <td className="px-4 py-3 text-center">
                  <button className="border-0 bg-transparent cursor-pointer text-xl">
                    {task.isFavorite ? (
                      <FaStar className="text-yellow-500" />
                    ) : (
                      <FaRegStar className="text-gray-400" />
                    )}
                  </button>
                </td>
                <td className="px-4 py-3 font-semibold text-md">
                  {task.title}
                </td>
                <td className="px-4 py-3">{task.description}</td>
                <td className="px-4 py-3 text-center">
                  <ul>
                    {task.tags.map((tag, index) => (
                      <li
                        key={task.id + index}
                        className={`inline-block px-3 py-1 m-1 ${
                          tagColors[index % tagColors.length]
                        } text-white rounded-full mr-1 text-sm`}
                      >
                        {tag.toUpperCase()}
                      </li>
                    ))}
                  </ul>
                </td>
                <td className="text-center">
                  <span
                    className={`${
                      task.priority === "high"
                        ? "text-red-500 "
                        : task.priority === "medium"
                        ? "text-yellow-500 "
                        : "text-green-500 "
                    }`}
                  >
                    {task.priority.charAt(0).toUpperCase() +
                      task.priority.slice(1)}
                  </span>
                </td>
                <td className="px-4 py-3 text-center">
                  <button
                    onClick={() => onDeleteTask(task.id)}
                    className="px-3 py-2 text-red-700 cursor-pointer"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => onEditTask(task)}
                    className="px-3 py-2 text-green-t cursor-pointer"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr className="border-b-1 border-slate-300">
              <td colSpan="6" className="text-center py-4">
                No tasks available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
