import taskImg from "../../assets/task.png";
export default function Banner() {
  return (
    <section className="py-10 px-5 lg:px-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-12 items-center justify-between">
          <div className="col-span-12 lg:col-span-4 w-80 h-auto lg:order-2">
            <img src={taskImg} alt="tasker" />
          </div>
          <div className="col-span-10 lg:col-span-8 lg:order-1 text-wrap">
            <h2 className="font-bold text-8xl text-green-t mb-4">Tasker</h2>
            <p className="text-xl">
              Tasker is a simple task management app that allows you to create,
              update, and delete tasks. You can also mark tasks as completed or
              incomplete.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
