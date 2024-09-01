
interface Props {
    label : string,
}

const BlackBtn =  ({ label }: Props)=> {

    return (
        <button className="bg-black rounded-lg font-thin text-white p-3 w-fit">
            {label}
        </button>
    )
}

export default BlackBtn