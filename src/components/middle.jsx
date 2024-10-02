import Image from "next/image"

const Middle= ()=> {
    return (
      <div className="flex w-[1216px] justify-end  mx-0 gap-3">
        <Image src="/back.png" width={40} height={40} />
        <Image src="/forward.png" width={40} height={40} />
      </div>
    );

}
export default Middle
