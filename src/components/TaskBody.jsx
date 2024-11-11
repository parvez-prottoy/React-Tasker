import Task from "./Task";
import NotFound from "./UI/NotFound";

const TaskBody = ({ tasks, onEditTask, onDeleteTask }) => {
  return (
    <div className="overflow-auto">
      {tasks.length === 0 ? (
        <NotFound />
      ) : (
        <table className="table-fixed overflow-auto xl:w-full">
          {/* Table Head */}
          <thead>
            <tr>
              <th className="p-4 pb-8 text-sm font-semibold capitalize w-[48px]"></th>
              <th className="p-4 pb-8 text-sm font-semibold capitalize w-[300px]">
                {" "}
                Title{" "}
              </th>
              <th className="p-4 pb-8 text-sm font-semibold capitalize w-full">
                {" "}
                Description{" "}
              </th>
              <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[350px]">
                {" "}
                Tags{" "}
              </th>
              <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
                {" "}
                Priority{" "}
              </th>
              <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
                {" "}
                Options{" "}
              </th>
            </tr>
          </thead>
          {/* Table Body */}
          <tbody>
            {/* Task */}
            {tasks.map((task) => (
              <Task
                key={task.id}
                task={task}
                onEditTask={onEditTask}
                onDeleteTask={onDeleteTask}
              />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TaskBody;
