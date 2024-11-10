const Button = ({ bg, children }) => {
  return (
    <button className={`rounded-md ${bg} px-3.5 py-2.5 text-sm font-semibold`}>
      {children}
    </button>
  );
};

export default Button;
