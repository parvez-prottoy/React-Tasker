import { useState } from "react";
import FilterTask from "./FilterTask";
import SearchTask from "./SearchTask";
import TaskActions from "./TaskActions";
import TaskList from "./TaskList";
import TaskModal from "./TaskModal";

const defaultTask = {
  id: crypto.randomUUID(),
  title: "Learn React",
  description: "Learn React by building a task management app",
  tags: ["react", "javascript", "web development"],
  priority: "high",
  isFavorite: false,
};
export default function TaskBoard() {
  const [tasks, setTasks] = useState([defaultTask]);
  const [showModal, setShowModal] = useState(false);
  // Function to add a new task
  const handleAddTask = (task) => {
    setTasks([task, ...tasks]);
  };
  console.log(tasks);
  return (
    <section className="mb-10 px-5 lg:px-20">
      {showModal && (
        <TaskModal
          onAddTask={handleAddTask}
          onCloseModal={() => setShowModal(false)}
        />
      )}
      <div className="container mx-auto flex md:flex-row flex-col items-center justify-between mb-5">
        {/* Search Task */}
        <SearchTask />
        {/* Filter Task */}
        <FilterTask />
      </div>
      <div className="container mx-auto">
        <div className="p-8 bg-gray-t rounded-lg shadow-md border-t-1 border-slate-100">
          {/* Task Actions */}
          <TaskActions onOpenModal={() => setShowModal(true)} />
          {/* Task List */}
          <TaskList tasks={tasks} />
        </div>
      </div>
    </section>
  );
}
