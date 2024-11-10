const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer className="py-6 md:py-8">
      <div className="container mx-auto">
        <p className="text-center text-xs text-[#6A6A6A] lg:text-sm">
          Copyright ©{date} | All rights reserved by Parvez Ahmed Prottoy
        </p>
      </div>
    </footer>
  );
};

export default Footer;
