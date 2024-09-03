import { sponsors } from "@/lib/const"
import Image from "next/image"


const Sponsor = ()=> {
    return (
        <div className={`w-full lg:mx-auto lg:w-[70%] `}>
            <div className="mx-2.5 my-8 flex flex-wrap items-center justify-between backdrop-filter ">
                {
                    sponsors.map((ele)=> (<Image key={ele.id} src={ele.img}  width={110} height={25} alt="" className="grayscale"/>))
                }
            </div>
        </div>
        
    )
}

export default Sponsor