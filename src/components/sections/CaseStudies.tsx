import { RiArrowRightUpLine } from "react-icons/ri"
import Heading from "../Heading"
import { caseStadies } from "@/lib/const"


const CaseStudies = ()=> {
    return (
        <div id="case" className={`lg:mx-auto mx-8 my-12 lg:w-[80%]`}>
            <Heading title="Case Studies" subTitle="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"/>
            <div className="my-12 relative rounded-3xl grid lg:grid-cols-3 items-center gap-8 bg-black p-8 lg:p-12">
                {
                    caseStadies.map((ele)=> (
                        <div key={ele.id} className="lg:h-[20vh] border-b lg:border-r border-gray lg:last:border-r-0 lg:border-b-0 last:border-b-0 pb-12 lg:pb-0">
                            <p className="my-2.5 text-white text-sm font-light"> {ele.description} </p>
                            <button className="text-primary flex items-center gap-2.5"><span>Learn more </span>  <RiArrowRightUpLine /> </button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default CaseStudies