const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer class="py-6 md:py-8">
      <div class="container mx-auto">
        <p class="text-center text-xs text-[#6A6A6A] lg:text-sm">
          Copyright ©{date} | All rights reserved by Parvez Ahmed Prottoy
        </p>
      </div>
    </footer>
  );
};

export default Footer;
