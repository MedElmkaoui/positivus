import Image from "next/image"
import { RiArrowRightUpLine, RiArrowUpCircleFill } from "react-icons/ri"

interface Props {
    title : string,
    subTitle : string,
    titleBg: 'gray' | 'black' | 'primary'
    img : string
    variant : 'gray' | 'black' | 'primary'
}


const ServicesCard = ({title, subTitle, titleBg, img, variant}: Props)=> {

    return (
        <div className={`flex gap-24 items-center justify-between bg-${variant} border border-b-8 rounded-3xl py-8 px-8 lg:px-12`}>
            <div className="flex flex-col justify-between h-[25vh]">
                <div>
                    <h1 className={`w-fit z-99 bg-${titleBg} text-lg text-nowrap p-1 font-semibold rounded-md`}>{title}</h1>
                    <span className={`w-fit  bg-${titleBg} text-lg text-nowrap p-1  font-semibold rounded-md`}>{subTitle}</span>
                </div>
                <button className={`w-fit text-nowrap flex items-center gap-3 ${variant == 'black' ? 'text-white' : 'text-black'}`}>
                    <RiArrowUpCircleFill size={30} className="rotate-45" />
                    Learn more
                </button>
            </div>
            <div>
                <Image src={`/images/services/${img}`} alt="" width={200} height={20} />
            </div>
        </div>
    )
}


export default ServicesCard