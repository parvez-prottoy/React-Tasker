import FilterTask from "./FilterTask";
import SearchTask from "./SearchTask";
import TaskActions from "./TaskActions";
import TaskList from "./TaskList";

export default function TaskBoard() {
  return (
    <section className="mb-10 px-5 lg:px-20">
      <div className="container mx-auto flex md:flex-row flex-col items-center justify-between mb-5">
        {/* Search Task */}
        <SearchTask />
        {/* Filter Task */}
        <FilterTask />
      </div>
      <div className="container mx-auto">
        <div className="p-8 bg-gray-t rounded-lg shadow-md border-t-1 border-slate-100">
          {/* Task Actions */}
          <TaskActions />
          {/* Task List */}
          <TaskList />
        </div>
      </div>
    </section>
  );
}
