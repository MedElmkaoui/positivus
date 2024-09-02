import { team } from "@/lib/const"
import Heading from "../Heading"
import TeamCard from "../TeamCard"
import BlackBtn from "../BlackBtn"


const Team = ()=> {
    return (
        <div className={`lg:mx-auto mx-2.5 my-24 lg:w-[80%]`}>
            <Heading title="Team" subTitle="Meet the skilled and experienced team behind our successful digital marketing strategies" />
            <div className="my-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    team.map((ele)=> (<TeamCard key={ele.id} name={ele.name} description={ele.description} status={ele.status} img={ele.img} />)  )
                }
            </div>
            <div className="flex justify-end">
               <BlackBtn label="See all team" /> 
            </div>
            
        </div>
    )
}

export default Team