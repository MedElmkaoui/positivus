import Image from "next/image"
import Heading from "../Heading"
import ServicesCard from "../ServicesCard"


const Services = ()=> {
    return (
        <div className={`lg:mx-auto mx-2.5 my-24 lg:w-[70%]`}>
            <Heading title="Services" subTitle="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"/>
            <div className="grid lg:grid-cols-2 gap-10 my-12">
                <ServicesCard img="seo.png" title="Search engine" subTitle="optimization" titleBg="primary" variant="gray" />
                <ServicesCard img="Pay-per-click.png" title="Pay-per-click" subTitle="advertising" titleBg="gray" variant="primary" />
                <ServicesCard img="Social-Media.png" title="Social Media" subTitle="Marketing" titleBg="gray" variant="black" />
                <ServicesCard img="Email-Marketing.png" title="Email" subTitle="Marketing" titleBg="primary" variant="gray" />
                <ServicesCard img="Content-Creation.png" title="Content" subTitle="Creation" titleBg="gray" variant="primary" />
                <ServicesCard img="Analytics.png" title="Analytics and " subTitle="Tracking" titleBg="primary" variant="black" />
            </div>
            <div className="my-36 relative rounded-3xl bg-gray p-8 lg:p-12">
                <div className="lg:h-[20vh] flex flex-col justify-between">
                    <h3 className="text-xl font-semibold">Let’s make things happen</h3>
                    <p className="my-2.5 lg:w-[50%]">Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p>
                    <button className="bg-black rounded-lg font-thin text-white p-3 w-fit">
                        Get your free proposal
                    </button>
                </div>
                <Image src={'/images/illustration-02.png'} className="hidden lg:block absolute right-24 -top-3" alt="" width={250} height={50} />
            </div>
        </div>
    )
}


export default Services