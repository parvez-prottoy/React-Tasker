const Button = ({ bg, onAction, children }) => {
  return (
    <button
      onClick={onAction}
      className={`rounded-md ${bg} px-3.5 py-2.5 text-sm font-semibold`}
    >
      {children}
    </button>
  );
};

export default Button;
