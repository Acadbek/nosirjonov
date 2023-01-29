// import { forwardRef } from "react";

import { useState } from "react";

// const Input = ({ placeholder, search }, ref) => (
//   return (
//     <div>

//   <input
//     onKeyUp={(e) => search(e.target.value)}
//     ref={ref}
//     placeholder={placeholder}
//     type="text"
//     className="bg-black sticky top-0 tracking-wide rounded-t-lg w-full px-4 py-5 text-white outline-none border-b border-[#262222]"
// />
//     </div>
//   )
// );

// export default Input;

// const Input = ({ placeholder, search }) => {
//   <input type="text" />;
// };

const Input = ({ placeholder, search }) => {
  return (
    <input
      className="bg-black sticky top-0 tracking-wide rounded-t-lg w-full px-4 py-5 text-white outline-none border-b border-[#262222]"
      type="text"
      onChange={(e) => search(e.target.value)}
      placeholder={placeholder}
    />
  );
};

export default Input;
