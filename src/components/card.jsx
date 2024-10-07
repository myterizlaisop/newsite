import Image from "next/image";

const Card = () => {
    return (
      <div className=" flex  bg-[#FFFFFF] ">
        <div className="flex gap-[13px]">
          <div className="h-[476px] w-[392px] border pl-[16px] pt-[16px] rounded-xl">
            <Image
              src="/photo.jpeg"
              className="rounded-xl"
              width={360}
              height={240}
            />
            <div className="bg-[#4B6BFB0D] w-[66px] h-[28px] rounded-lg flex justify-center items-center mt-[20px] mb-[20px]">
              <p className="text-[#4B6BFB] text-[14px]">Design</p>
            </div>
            <div>
              <p className="w-[344px] h-[84px] text-[24px] font-bold">
                The Impact of Technology on the Workplace: How Technology is
                Changing
              </p>
            </div>
            <div className="pt-[35px]">
              <p className="text-[#97989F]">August 20, 2022</p>
            </div>
          </div>
        </div>
      </div>
    );
}
export default Card;