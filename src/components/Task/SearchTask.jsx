import { CiSearch } from "react-icons/ci";

export default function SearchTask() {
  return (
    <div className="flex items-center justify-start">
      <form className="relative inline-block">
        {/* Search input field */}
        <input
          className="w-70 px-5 py-2 border-1 border-slate-500 focus:border-red-500 focus:border-1 rounded-full mb-2 lg:mr-2"
          placeholder="Search task..."
          type="search"
          required
        />
        {/* Search button with icon */}
        <button
          className="absolute z-9 top-2 right-5 text-2xl text-slate-500 cursor-pointer"
          type="submit"
        >
          <CiSearch />
        </button>
      </form>
    </div>
  );
}
