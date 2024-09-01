import Image from "next/image"
import { ReactNode } from "react"
import { TiSocialLinkedin } from "react-icons/ti"


interface Props {
    name : string,
    img : string,
    status : string,
    description : string,
}


const TeamCard = ({img, name, status, description}: Props)=> {

    return (
        <div className={`p-12 rounded-3xl border border-b-8 border-black`}>
            <div className="mb-8 pb-5 border-b flex items-start gap-8">
                <div className="flex items-end gap-8">
                    <Image src={img} alt="" height={80} width={80} />
                    <div>
                        <h2 className="text-md font-medium" >{name}</h2>
                        <span>{status}</span>
                    </div>
                </div>
                <div className="bg-black text-primary rounded-full p-1 ">
                    <TiSocialLinkedin size={25} /> 
                </div>
            </div>
           <p >
                {description}
            </p>
        </div>
    )
}


export default TeamCard