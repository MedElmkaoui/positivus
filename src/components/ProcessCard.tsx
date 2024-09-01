import { ReactNode } from "react"


interface Props {
    title : string,
    nb : string,
    expand : boolean,
    description : string,
    children : ReactNode
}


const ProcessCard = ({nb, title, expand, description, children}: Props)=> {

    return (
        <div className={`${expand ? 'bg-primary' : 'bg-gray'}  p-12 rounded-3xl border border-b-8 border-black`}>
            <div className={`w-full ${expand ? 'border-b mb-5' : ''}  flex items-center justify-between py-5`}>
                <div className="flex items-center gap-5">
                    <span className="text-2xl font-semibold">{nb}</span>
                    <h2 className="text-md font-semibold">{title}</h2>
                </div>
                {
                    children
                }
            </div>
            <p className={`${expand ? 'black' : 'hidden'}`}>
                {description}
            </p>
        </div>
    )
}


export default ProcessCard