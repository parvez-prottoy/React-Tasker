const Header = () => {
  return (
    <header>
      <nav className="py-4 md:py-6 fixed top-0 w-full !bg-[#191D26] z-50 border-b border-b-[rgba(206,206,206,0.12)]">
        <div className="container flex items-center justify-between gap-x-6">
          <h4 className="cursor-pointer text-3xl font-extrabold text-[#F5BF42]">
            Tasker
          </h4>
        </div>
      </nav>
    </header>
  );
};

export default Header;
