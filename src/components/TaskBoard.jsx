import Search from "./Search";
import TaskBody from "./TaskBody";
import TaskHead from "./TaskHead";

const TaskBoard = () => {
  return (
    <section className="pb-[114px] pt-20 md:mt-[100px]">
      <div className="container">
        {/* Search Box */}
        <Search />
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskHead />
          <TaskBody />
        </div>
      </div>
    </section>
  );
};

export default TaskBoard;
