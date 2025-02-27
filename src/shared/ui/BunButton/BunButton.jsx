export const BunButton = ({ children, ...rest }) => {
  return (
    <button
      className="h-10 px-3 rounded-sm bg-amber-500 text-amber-900"
      {...rest}
    >
      {children}
    </button>
  );
};
