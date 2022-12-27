import { forwardRef } from "react";

// eslint-disable-next-line react/display-name
const Input = forwardRef(({ placeholder, modalStatus }, ref) => (
  <input
    ref={ref}
    placeholder={placeholder}
    type="text"
    className="bg-black sticky top-0 tracking-wide rounded-t-lg w-full px-4 py-5 text-white outline-none border-b border-[#262222]"
  />
));

export default Input;
