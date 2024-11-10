import Button from "./UI/Button";

const TaskHead = () => {
  return (
    <div className="mb-14 items-center justify-between sm:flex">
      <h2 className="text-2xl font-semibold max-sm:mb-4">Your Tasks</h2>
      <div className="flex items-center space-x-5">
        {/* Add Task Button */}
        <Button bg="bg-blue-500">Add Tasks</Button>
        {/* Delete All Tasks Button */}
        <Button bg="bg-red-500">Delete All</Button>
      </div>
    </div>
  );
};

export default TaskHead;