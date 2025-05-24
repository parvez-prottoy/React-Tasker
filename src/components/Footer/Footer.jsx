export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-5 border-t-1 border-gray-200 bg-gray-t">
      <div className="container mx-auto">
        <p className="text-center">
          Copyright &copy; {currentYear} | All right reservd by{" "}
          <a
            href="https://parvez-ahmed-prottoy.netlify.app"
            target="_blank"
            className="text-green-t font-semibold"
          >
            Parvez Ahmed Prottoy.
          </a>
        </p>
      </div>
    </footer>
  );
}
