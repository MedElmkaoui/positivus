'use client'
import Heading from "../Heading"
import ProcessCard from "../ProcessCard"
import { useState } from "react"
import { workingProcess } from "@/lib/const"


const OurProcess = ()=> {
    const [expand, setExpand] = useState(0)
    return (
        <div className={`lg:mx-auto mx-2.5 my-24 lg:w-[80%]`}>
            <Heading title="Our Working Process" subTitle="Step-by-Step Guide to Achieving Your Business Goals"/>
            <div className="my-12 space-y-5">
                {
                    workingProcess.map((ele, index)=> (
                        <ProcessCard expand={expand == index}  nb={ele.nb} title={ele.title} description={ele.description} >
                            <button 
                                onClick={()=> setExpand(index)}
                                className="flex items-center justify-center h-10 w-10 bg-gray border rounded-full"
                            >
                                <span className="text-lg font-semibold"> {expand === index ? '-' : '+'}  </span>
                            </button>
                        </ProcessCard>
                    ))
                }
               
            </div>
            
        </div>
    )
}


export default OurProcess