const Allblog = ()=> {
    return (
      <div>
        <div>
          <p className="font-bold text-[24px] mt-[100px]">All Blog Post</p>
        </div>
        <div className="w-[1216px] flex justify-between items-center mb-[25px]">
          <div className=" flex gap-5 pt-[25px]">
            <p
              className="text-[16px] text-[#D4A373]">
              All
            </p>
            <p className="text-[16px]">Design</p>
            <p className="text-[16px]">Travel</p>
            <p className="text-[16px]">Fashion</p>
            <p className="text-[16px]">Technology</p>
            <p className="text-[16px]">Branding</p>
          </div>

          <p className="mt-[20px]">View All</p>
        </div>
      </div>
    );

}
export default Allblog;
