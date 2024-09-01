import Heading from "../Heading"





const Testimonials = ()=> {
    return (
        <div className={`w-full lg:mx-auto lg:w-[70%]`}>
            <Heading title="Testimonials" subTitle="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services" />
            <div className="overflow-x-scroll my-12 py-12 bg-black rounded-3xl" style={{ scrollbarWidth: 'none' }}>
                <div className="relative -ml-[350px] w-[1800px] flex gap-5 items-center justify-center">
                    <p className="text-sm text-white p-8 border border-primary rounded-3xl ">
                        "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."
                    </p>
                    <p className="text-sm text-white p-8 border border-primary rounded-3xl before:h-10 before:w-10 before:absolute before:border before:border-primary before:rotate-45 before:-bottom-5 before:border-t-0 before:border-l-0 after:h-10 after:w-10 after:absolute after:border-red-400 after:bottom-0  after:border-0 after:border-t">
                        "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."
                    </p>
                    <p className="text-sm text-white p-8 border border-primary rounded-3xl">
                        "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."
                    </p>
                </div>
            </div>
        </div>
        
    )
}

export default Testimonials