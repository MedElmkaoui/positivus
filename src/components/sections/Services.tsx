import Image from "next/image"
import Heading from "../Heading"
import ServicesCard from "../ServicesCard"
import BlackBtn from "../BlackBtn"
import { services } from "@/lib/const"


const Services = ()=> {
    return (
        <div className={`lg:mx-auto mx-2.5 my-24 lg:w-[80%]`}>
            <Heading title="Services" subTitle="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"/>
            <div className="grid lg:grid-cols-2 gap-10 my-12">
                {
                    services.map((ele)=> (
                        <ServicesCard key={ele.id} img={ele.img} title={ele.title} subTitle={ele.subTitle} titleBg={ele.titleBg} variant={ele.variant} />
                    ))
                }
            </div>
            <div className="my-36 relative rounded-3xl bg-gray p-8 lg:p-12">
                <div className="lg:h-[20vh] flex flex-col justify-between">
                    <h3 className="text-xl font-semibold">Let’s make things happen</h3>
                    <p className="my-2.5 lg:w-[50%]">Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p>
                    <BlackBtn label="Get your free proposal" />
                </div>
                <Image src={'/images/illustration-02.png'} className="hidden lg:block absolute right-24 -top-3" alt="" width={250} height={50} />
            </div>
        </div>
    )
}


export default Services