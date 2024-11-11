import { useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";

const Form = ({ onAddTask, onCloseModal }) => {
  const [inputValues, setInputValues] = useState({
    id: crypto.randomUUID(),
    title: "",
    description: "",
    tags: [],
    priority: "",
    favorite: false,
  });
  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name === "tags") {
      value = value.split(",");
    }
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTask(inputValues);
  };
  return (
    <>
      <div className="bg-black bg-opacity-70 h-full w-full z-50 absolute top-0 left-0"></div>
      <form
        onSubmit={handleSubmit}
        className="w-[90%] max-w-[740px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9"
      >
        <div className="mb-9 lg:mb-11 relative">
          <h2 className="text-center text-2xl font-bold text-white  lg:text-[28px]">
            Add New Task
          </h2>
          <IoIosCloseCircleOutline
            onClick={onCloseModal}
            className="text-4xl absolute top-0 right-0 cursor-pointer hover:scale-[1.2] duration-300"
          />
        </div>
        {/* inputs */}
        <div className="space-y-9 text-white lg:space-y-10">
          {/* title */}
          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="title">Title</label>
            <input
              onChange={handleChange}
              value={inputValues.title}
              className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
              type="text"
              name="title"
              id="title"
              required
            />
          </div>
          {/* description */}
          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="description">Description</label>
            <textarea
              onChange={handleChange}
              value={inputValues.description}
              className="block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 lg:min-h-[180px]"
              type="text"
              name="description"
              id="description"
              required
            ></textarea>
          </div>
          {/* input group */}
          <div className="grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20">
            {/* tags */}
            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="tags">Tags</label>
              <input
                onChange={handleChange}
                value={inputValues.tags}
                className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                type="text"
                name="tags"
                id="tags"
                required
              />
            </div>
            {/* priority */}
            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="priority">Priority</label>
              <select
                onChange={handleChange}
                className="block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5"
                name="priority"
                id="priority"
                required
              >
                <option value="">Select Priority</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
          </div>
        </div>
        {/* inputs ends */}
        <div className="mt-16 flex justify-center lg:mt-20">
          <button
            type="submit"
            className="rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80"
          >
            Create New Task
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
