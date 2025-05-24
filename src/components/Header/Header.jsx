export default function Header() {
  return (
    <header className="py-5 w-full bg-gray-t border-b-1 border-gray-200">
      <div className="container mx-auto gap-x-6 text-center lg:text-start">
        <h1 className="text-black uppercase font-extrabold text-2xl tracking-wider">
          Taster
          <span className="w-1.5 h-1.5 rounded-full bg-green-t inline-block"></span>
        </h1>
      </div>
    </header>
  );
}
