import { useState } from "react";
import Search from "./Search";
import TaskBody from "./TaskBody";
import TaskHead from "./TaskHead";
import Form from "./Form";

const TaskBoard = () => {
  const [tasks, setTasks] = useState([
    {
      id: crypto.randomUUID(),
      title: "Learn React",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      tags: ["wev", "react", "js"],
      priority: "High",
      favorite: false,
    },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);
  const [isAdd, setIsAdd] = useState(taskToUpdate === null ? true : false);
  // handlers
  const handleAddEditTask = (newTask) => {
    if (isAdd) {
      console.log("Add");
      setTasks([newTask, ...tasks]);
    } else {
      console.log("Update");
      setTasks(
        tasks.map((task) => {
          if (task.id === newTask.id) {
            return newTask;
          } else {
            return task;
          }
        })
      );
    }
    setIsModalOpen(false);
  };
  const handleAddTask = () => {
    setTaskToUpdate(null);
    setIsAdd(true);
    setIsModalOpen(true);
  };
  const handleEditTask = (task) => {
    setTaskToUpdate(task);
    setIsAdd(false);
    setIsModalOpen(true);
  };
  return (
    <section className="pb-[114px] pt-20 md:mt-[100px]">
      {isModalOpen && (
        <Form
          onAddEditTask={handleAddEditTask}
          onCloseModal={() => setIsModalOpen(false)}
          taskToUpdate={taskToUpdate}
          isAdd={isAdd}
        />
      )}
      <div className="container">
        {/* Search Box */}
        <Search />
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskHead onAddTask={handleAddTask} />
          <TaskBody tasks={tasks} onEditTask={handleEditTask} />
        </div>
      </div>
    </section>
  );
};

export default TaskBoard;
