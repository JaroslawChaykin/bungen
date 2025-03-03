export const BunIconButton = ({ children, ...rest }) => {
  return (
    <button
      className="p-1 bg-linear-to-r rounded-sm from-pink-300/20 to-gray-800/10 backdrop-blur-xl shadow-2xl cursor-pointer hover:scale-125"
      {...rest}
    >
      {children}
    </button>
  );
};
