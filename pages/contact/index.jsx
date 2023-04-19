import React from "react";

const Contact = () => {
  return (
    <div className="text-white container !pt-[40px] text-[20px]">
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
        <p className="inline-block">Telegram Blog: </p>
        <a
          className="text-[#14B8A6] italic hover:text-[#197a6f]"
          target="_blank"
          rel="noreferrer"
          href="https://t.me/softwar3dev"
        >
          @softwar3dev
        </a>
      </div>
    </div>
  );
};

export default Contact;
