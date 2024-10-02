import Image from "next/image";
import Link from "next/link";
const Header = () => {
    return(
  <div className="w-[1130px] flex items-center justify-between mx-auto">
    <div>
      <Image className="" src="/Logo.png" alt="" width={158} height={36} />
    </div>
    <div className="flex gap-10">
      <Link href="" className="font-bold text-[20px]">
        Home
      </Link>
      <Link href="" className="font-bold text-[20px]">
        About
      </Link>
      <Link href="" className="font-bold text-[20px]">
        Contact
      </Link>
    </div>
    <div className="w-[166px] h-[36px] bg-[#F4F4F5] rounded-lg flex justify-around">
      <p className="mt-[4px]">Search</p>
      <Image
        className=""
        src="/search-outline.png"
        alt=""
        width={16}
        height={16}
      />
    </div>
  </div>
    )

};

export default Header;
