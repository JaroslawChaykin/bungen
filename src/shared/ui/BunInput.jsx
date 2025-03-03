export const BunInput = ({ type = "text", ...rest }) => {
  return (
    <input
      className="w-full hover:border-b-1 border-pink-200 outline-0 text-2xl font-bold"
      type={type}
      {...rest}
    />
  );
};
