import Image from "next/image";
const TrendingCard = () => {
  return (
    <div className="bg-white w-[360px] h-[240px] rounded-xl relative">
      <Image
        src="/card.png"
        width={250}
        height={0}
        className="absolute h-[250px] rounded-xl"
      />
      <div className="relative">
        <p className="bg-[#4B6BFB] w-[120px] text-[#fff] h-[30px] items-center flex justify-center rounded-xl mt-[120px] ml-[20px]">
          Technology
        </p>
        <p className="font-[600] text-[15px] w-[230px] h-[80px] mt-[20px]  ml-[20px]">
          The Impact of Technology on the Workplace: How Technology is Changing
        </p>
      </div>
    </div>
  );
};

export default TrendingCard;
