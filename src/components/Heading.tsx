
interface Props {
    title : string,
    subTitle : string
}


const Heading = ({title, subTitle}: Props)=> {

    return (
        <div className="w-full flex flex-col lg:flex-row text-center lg:text-left gap-5 lg:gap-24 items-center">
            <h1 className="bg-primary text-xl p-1 font-semibold rounded-md">{title}</h1>
            <span className="lg:w-[50%] text-sm">{subTitle}</span>
        </div>
    )
}


export default Heading