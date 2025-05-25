export default function FilterTask() {
  return (
    <div className="text-end">
      <select
        className="px-5 py-2 border-1 border-slate-500 focus:border-red-500 focus:border-1 rounded-full"
        name="sort"
        id="sort"
      >
        <option value="default">Default</option>
        <option value="ascending">A to Z</option>
        <option value="descending">Z to A</option>
        <option value="favorite">Favorite</option>
        <option value="unfavorite">Unfavorite</option>
      </select>
    </div>
  );
}
