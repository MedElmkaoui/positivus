import Image from "next/image"


const Sponsor = ()=> {
    return (
        <div className={`w-full lg:mx-auto lg:w-[70%]`}>
            <div className="mx-2.5 my-8 flex flex-wrap items-center justify-between backdrop-filter">
                <Image src={'/images/sponsors/amazon.png'}  width={110} height={10} alt=""/>
                <Image src={'/images/sponsors/dribble.png'}  width={110} height={10} alt=""/>
                <Image src={'/images/sponsors/hubspot.png'}  width={110} height={10} alt=""/>
                <Image src={'/images/sponsors/netflex.png'}  width={110} height={10} alt=""/>
                <Image src={'/images/sponsors/notion.png'}  width={110} height={10} alt=""/>
                <Image src={'/images/sponsors/zoom.png'}  width={110} height={10} alt=""/>
            </div>
        </div>
        
    )
}

export default Sponsor