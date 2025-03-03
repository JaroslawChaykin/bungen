export const BunButton = ({ children, ...rest }) => {
  return (
    <button
      className="h-10 px-5 rounded-xl bg-linear-65 from-pink-300 to-white text-black cursor-pointer"
      {...rest}
    >
      {children}
    </button>
  );
};
