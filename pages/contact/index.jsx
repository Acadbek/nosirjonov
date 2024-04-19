// import Page from "@/components/page";
import React from "react";
import Page from '../../components/page';

const Contact = () => {
  return (
    <Page title='Contact' description="Asad's contact">
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
          <p className="inline-block">TG ./Blog: </p>
          <a
            className="text-[#14B8A6] italic hover:text-[#197a6f]"
            target="_blank"
            rel="noreferrer"
            href="https://t.me/asadengineer"
          >
            @asadengineer
          </a>
        </div>
      </div>
    </Page>
  );
};

export default Contact;
