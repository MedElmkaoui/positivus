
interface Props {
    label : string,
}

const BlackBtn =  ({ label }: Props)=> {

    return (
        <button className="w-full bg-black rounded-lg font-thin text-white p-3 lg:w-fit">
            {label}
        </button>
    )
}

export default BlackBtn