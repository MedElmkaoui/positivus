import Heading from "../Heading"


const CaseStudies = ()=> {
    return (
        <div className={`lg:mx-auto mx-8 my-24 lg:w-[70%]`}>
            <Heading title="Case Studies" subTitle="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"/>
            <div className="my-36 relative rounded-3xl grid grid-cols-11 items-center gap-8 bg-black p-8 lg:p-12">
                <div className="lg:h-[20vh] col-span-3">
                    <p className="my-2.5 text-white text-sm font-light">For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.</p>
                    <button className="text-primary">Learn more </button>
                </div>
                <hr className="rotate-90 text-white col-span-1 w-full" />
                <div className="lg:h-[20vh] col-span-3">
                    <p className="my-2.5 text-white text-sm font-light">For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.</p>
                    <button className="text-primary">Learn more </button>
                </div>
                <hr className="rotate-90 text-white col-span-1 w-full" />
                <div className="lg:h-[20vh] col-span-3">
                    <p className="my-2.5 text-white text-sm font-light">For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.</p>
                    <button className="text-primary">Learn more </button>
                </div>
            </div>
        </div>
    )
}

export default CaseStudies