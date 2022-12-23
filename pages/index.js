import Image from "next/image";
import { data } from "../data/home";
import js from "../public/icons/js.svg";
export default function Home() {
  console.log(data);
  return (
    <article className="max-w-[720px] my-0 mx-auto mt-[70px] px-[10px]">
      <h1 className="text-[#fff] text-[45px] tracking-wide font-[500] select-none btn-shine">
        {data[0].title}
      </h1>
      <p className="text-[#fff] leading-[35px] text-[20px] tracking-wide	font-[500] mt-[50px]">
        <span className="text-yellow-400">JavaScript </span>
        {/* <Image src={js}/> */}
        enthusiast, practicing minimalist, and electronic lover in search of
        good shortcut. Writing about my coding style and some extra shit.
      </p>
      <p className="text-[#fff] leading-[35px] text-[20px] tracking-wide font-[500] mt-[20px]">
        Working at Najot ta&rsquo;lim to make Uzbekistan more survivable.
      </p>
      <p className="text-[#fff] leading-[35px] text-[20px] tracking-wide font-[400] mt-[50px]">
        ⌘K or Alt+K to let the dark magic happen or press the ⌘ button on
        navigation
      </p>
    </article>
  );
}
