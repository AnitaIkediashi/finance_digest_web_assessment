import Image from "next/image";
import Logo from "../public/blott.png";

export const Header = () => {
  return (
    <header className="h-[72px] w-full flex items-center justify-center mb-4">
      <Image
        src={Logo}
        alt="company logo"
        className="w-[200px] h-[48.2px] self-end"
      />
    </header>
  );
};
