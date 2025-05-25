import { useState } from "react";

export default function TaskModal({ onCloseModal, onAddEditTask, editTask }) {
  const [task, setTask] = useState(
    editTask || {
      id: crypto.randomUUID(),
      title: "",
      description: "",
      tags: [],
      priority: "",
      isFavorite: false,
    }
  );
  const [isAddMode] = useState(Object.is(editTask, null));
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]:
        name === "tags" ? value.split(",").map((tag) => tag.trim()) : value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddEditTask(task, isAddMode);
    onCloseModal();
  };
  return (
    <>
      {/* Overlay backdrop to darken the background when modal is open */}
      <div className="bg-black opacity-75 w-full h-screen z-10 absolute top-0 left-0 right-0 bottom-0"></div>

      {/* Modal container with form inputs */}
      <div className="bg-white p-5 border border-slate-400 rounded-lg w-100 items-center m-auto z-10 absolute top-10 left-1 right-1 md:top-1/6">
        {/* Modal title changes based on add or edit mode */}
        <h2 className="font-semibold text-2xl text-center mb-2">
          {isAddMode ? "Add New Task" : "Edit Task"}
        </h2>

        {/* Task form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title input */}
          <div className="mb-4">
            <label htmlFor="title">Title</label>
            <input
              className="w-full px-3 py-2 border-1 border-slate-500 rounded-md"
              type="text"
              name="title"
              id="title"
              value={task.title}
              onChange={handleChange}
              placeholder="Enter task title"
              required
            />
          </div>

          {/* Description textarea */}
          <div className="mb-4">
            <label htmlFor="description">Description</label>
            <textarea
              className="w-full px-3 py-2 border-1 border-slate-500 rounded-md"
              name="description"
              id="description"
              value={task.description}
              onChange={handleChange}
              placeholder="Enter task description"
              required
            ></textarea>
          </div>

          {/* Tags input - comma separated */}
          <div className="mb-4">
            <label htmlFor="tags">Tags</label>
            <input
              className="w-full px-3 py-2 border-1 border-slate-500 rounded-md"
              type="text"
              name="tags"
              id="tags"
              value={task.tags.join(", ")}
              onChange={handleChange}
              placeholder="Enter tags separated by commas"
              required
            />
          </div>

          {/* Priority select dropdown */}
          <div className="mb-4">
            <label htmlFor="priority">Priority</label>
            <select
              className="w-full px-3 py-2 border-1 border-slate-500 rounded-md"
              name="priority"
              id="priority"
              value={task.priority}
              onChange={handleChange}
              placeholder="Select priority"
              required
            >
              <option value="">Select Priority</option>
              <option value="high">High</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
            </select>
          </div>

          {/* Buttons to submit or close the modal */}
          <div className="text-center">
            <button
              onClick={handleSubmit}
              type="submit"
              className="px-6 py-2 rounded-md bg-green-t text-white mb-2 lg:mr-2 cursor-pointer hover:opacity-80 duration-300"
            >
              {isAddMode ? "Add Task" : "Update Task"}
            </button>
            <button
              onClick={onCloseModal}
              type="button"
              className="px-6 py-2 rounded-md bg-red-400 text-white mb-2 lg:mr-2 cursor-pointer hover:opacity-80 duration-300"
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
