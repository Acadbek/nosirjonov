import { data } from "../data/home";

export default function Home() {
  return (
    <article className="max-w-[720px] my-0 mx-auto mt-[20px] px-[10px]">
      <h1 className="text-[#fff] text-[45px] tracking-wide font-[500] select-none btn-shine">
        {data[0].title}
      </h1>
      <p className="text-[#fff] leading-[35px] text-[20px] tracking-wide	font-[500] mt-[20px]">
        <span className="text-[#14B8A6]">JavaScript </span>
        {/* <Image src={js}/> */}
        enthusiast, practicing minimalist, and electronic lover in search of
        good shortcut. Writing about my coding style and some extra shit interested in low level languages
      </p>
      <p className="text-[#fff] leading-[35px] text-[20px] tracking-wide font-[500] mt-[20px]">
        Working at Blaze.ERP
      </p>
      <p className="text-[#fff] leading-[35px] text-[20px] tracking-wide font-[400] mt-[50px]">
        ⌘K or Alt+K to let the dark magic happen or press the ⌘ button on
        navigation
      </p>
    </article>
  );
}
