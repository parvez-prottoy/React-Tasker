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
  // handlers

  return (
    <section className="pb-[114px] pt-20 md:mt-[100px]">
      {isModalOpen ? (
        <Form onCloseModal={() => setIsModalOpen(false)} />
      ) : (
        <div className="container">
          {/* Search Box */}
          <Search />
          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            <TaskHead onOpenModal={() => setIsModalOpen(true)} />
            <TaskBody tasks={tasks} />
          </div>
        </div>
      )}
    </section>
  );
};

export default TaskBoard;
