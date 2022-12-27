import { forwardRef } from "react";

// eslint-disable-next-line react/display-name
const Input = forwardRef(({ placeholder, modalStatus }, ref) => (
  <input
    ref={ref}
    placeholder={placeholder}
    type="text"
    className="bg-black tracking-wide rounded-t-lg mt-1 w-full p-4 text-white outline-none border-b border-[#262222]"
  />
));

export default Input;
