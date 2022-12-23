import { forwardRef } from "react";

// eslint-disable-next-line react/display-name
const Input = forwardRef(({ placeholder, modalStatus }, ref) => (
  console.log(modalStatus, 'xxxxxxxx'),
  <input
    ref={ref}
    placeholder={placeholder}
    type="text"
    className="bg-black tracking-wide rounded-lg mt-1 w-full p-4 text-white outline-none"
  />
));

export default Input;
