const { default: Allblog } = require("./allblog");
const { default: Allblogplus } = require("./allblogplus");
const { default: Content } = require("./content");
const { default: Header } = require("./header");
const { default: Middle } = require("./middle");
const { default: TrendingCard } = require("./trendingcard");

const Allitem = ()=> {
    return (
      <>
        <div className=" flex flex-col items-center justify-center">
          <Header />
          <Content />
          <Middle />
          <p className="font-bold text-[20px] flex justify-start w-[1216px] mt-[40px] mb-[20px] ">
            Trending
          </p>
          <div className="flex w-[1216px]">
            <TrendingCard />
            <TrendingCard />
            <TrendingCard />
            <TrendingCard />
          </div>
          <Allblog
           />
          <Allblogplus />
        </div>
        <div className="flex justify-center ">
          <p className="bg-[#999] h-[40px] w-[100px] flex items-center rounded-xl ">
            Load More...
          </p>
        </div>
      </>
    );
}
export default Allitem;