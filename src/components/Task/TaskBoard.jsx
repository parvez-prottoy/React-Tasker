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
  const [updateTask, setUpdateTask] = useState(null);
  // Function to add or edit a task
  const handleAddEditTask = (task, isAddMode) => {
    if (isAddMode) {
      setTasks([...tasks, task]);
    } else {
      setTasks(tasks.map((t) => (t.id === task.id ? task : t)));
    }
  };
  const handleEditTask = (updateTask) => {
    console.log("Edit Task", updateTask);
    setUpdateTask(updateTask);
    setShowModal(true);
  };
  // Function to delete a task
  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };
  // Function to delete all tasks
  const handleDeleteAllTasks = () => {
    setTasks([]);
  };
  // Function to toggle favorite status of a task
  const handleToggleFavorite = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, isFavorite: !task.isFavorite } : task
      )
    );
  };
  return (
    <section className="mb-10 px-5 lg:px-20">
      {showModal && (
        <TaskModal
          onAddEditTask={handleAddEditTask}
          onCloseModal={() => setShowModal(false)}
          editTask={updateTask}
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
          <TaskActions
            onAllDelete={handleDeleteAllTasks}
            onOpenModal={() => setShowModal(true)}
          />
          {/* Task List */}
          <TaskList
            tasks={tasks}
            onEditTask={handleEditTask}
            onDeleteTask={handleDeleteTask}
            onFavoriteTask={handleToggleFavorite}
          />
        </div>
      </div>
    </section>
  );
}
