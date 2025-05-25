export default function TaskActions() {
  return (
    <div className="grid grid-cols-2 items-center justify-between">
      <div>
        <h3 className="font-semibold text-2xl">Your Tasks</h3>
      </div>
      <div className="text-end">
        <button className="px-6 py-2 rounded-md bg-green-t text-white mb-2 lg:mr-2 cursor-pointer hover:opacity-80 duration-300">
          Add Task
        </button>
        <button className="px-6 py-2 rounded-md bg-red-400 text-white cursor-pointer hover:opacity-80 duration-300">
          Delete All
        </button>
      </div>
    </div>
  );
}
