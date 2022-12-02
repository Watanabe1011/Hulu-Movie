import type { NextPage } from "next";
import Image from "next/image";
import { headerItems } from "./imports";

type HeroIcon = (props: React.ComponentProps<"svg">) => JSX.Element;

type HeaderItemType = {
  title: string;
  Icon: HeroIcon;
};

const HeaderItem: NextPage<HeaderItemType> = ({ title, Icon }) => {
  return (
    <div className="group flex flex-col items-center cursor-pointer w-12 sm:w-20 hover:text-white">
      <Icon className="h-8 mb-1 group-hover:animate-bounce" />
      <p className="opacity-0 group-hover:opacity-100 tracking-widest uppercase">
        {title}
      </p>
    </div>
  );
};

const Header: NextPage = () => {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        {headerItems.map((headerItem) => (
          <HeaderItem
            key={headerItem.title}
            title={headerItem.title}
            Icon={headerItem.Icon}
          />
        ))}
      </div>
      <Image
        src="/hulu-logo.png"
        width={200}
        height={100}
        alt="Hulu logo"
        className="object-contain"
      />
    </header>
  );
};

export default Header;
