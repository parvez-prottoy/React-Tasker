export default function TaskList() {
  return (
    <div className="overflow-y-hidden overflow-x-scroll lg:overflow-x-hidden">
      <table className="table-auto w-full mt-10 border-slate-300 border-1 p-5 rounded-lg">
        <thead>
          <tr className="bg-slate-100 border-b-1 border-slate-300">
            <th className="px-4 py-3"></th>
            <th className="px-4 py-3">Title</th>
            <th className="px-4 py-3">Description</th>
            <th className="px-4 py-3">Tags</th>
            <th className="px-4 py-3">Priority</th>
            <th className="px-4 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b-1 border-slate-300 hover:bg-slate-50">
            <td className="px-4 py-3">
              <input type="checkbox" />
            </td>
            <td className="px-4 py-3">Task Title</td>
            <td className="px-4 py-3">Task Description</td>
            <td className="px-4 py-3">#tag1 #tag2</td>
            <td className="px-4 py-3">High</td>
            <td className="px-4 py-3">
              <button className="text-blue-500 hover:underline">Edit</button>
              <button className="text-red-500 hover:underline ml-2">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
