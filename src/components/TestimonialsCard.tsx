

interface Props {
    description : string,
    name : string,
    status : string
}

const TestimonialCard = ({ description, name, status }: Props) => ( 
    <div className="relative w-[100%] md:w-[500px] lg:w-[50%]">
      <p className="w-[280px] lg:w-[500px] text-sm text-white border border-primary p-8 rounded-3xl traingle">
        {description}
      </p>
      <div className="absolute -bottom-20 left-10">
        <h2 className="text-primary">{name}</h2>
        <span className="text-white text-xs">{status}</span>
      </div>
    </div>
  );

  export default TestimonialCard