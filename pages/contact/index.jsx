import React from "react";

const Contact = () => {
  return (
    <div className="text-white container pt-[100px] text-[20px]">
      <div className="flex gap-2">
        <p className="inline-block">Mail: </p>
        <a
          className="text-[#14B8A6] italic hover:text-[#197a6f]"
          href="mailto::ibnnumon@gmail.com"
        >
          ibnnumon@gmail.com
        </a>
      </div>
      <div className="flex gap-2 mt-4">
        <p className="inline-block">Telegram: </p>
        <a
          className="text-[#14B8A6] italic hover:text-[#197a6f]"
          target="_blank"
          rel="noreferrer"
          href="https://t.me/frontend_uz"
        >
          @frontend_uz
        </a>
      </div>
    </div>
  );
};

export default Contact;
