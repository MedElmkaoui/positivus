import Image from "next/image"
import Heading from "../Heading"
import BlackBtn from "../BlackBtn"



const Contact = ()=> {
    return (
        <div className={`w-[90%] mx-auto lg:w-[80%]`}>
            <Heading title="Contact Us" subTitle="Connect with Us: Let's Discuss Your Digital Marketing Needs" />
            <div className="relative my-12 bg-gray rounded-3xl p-12 overflow-hidden">
                <div className="lg:w-1/2">
                    <form action="" className="space-y-3">
                        <div className="flex gap-12">
                            <div className="flex gap-3.5">
                                <input type="radio" name="" id="" checked className="h-5 w-5 " />
                                <span className="">Say Hi</span>
                            </div>
                            <div className="flex gap-3.5">
                                <input type="radio" name="" id=""  className="h-5 w-5 "/>
                                <span className="">Get a Quoat</span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2.5">
                            <span>Name</span>
                            <input type="text"  className="py-2.5 border border-black rounded-md ring-0 outline-none px-3.5"/>
                        </div>
                        <div className="flex flex-col gap-2.5">
                            <span>Email</span>
                            <input type="email"  className="py-2.5 border border-black rounded-md ring-0 outline-none px-3.5"/>
                        </div>
                        <div className="flex flex-col gap-2.5">
                            <span>Message</span>
                           <textarea name="" id="" rows={5}  className="py-2.5 border border-black rounded-md ring-0 outline-none px-3.5">

                           </textarea>
                        </div>
                        <BlackBtn label="Send Message"  />
                    </form>
                </div>
                <div className="hidden lg:block absolute -right-[18%] top-[10%] ">
                    <Image src={'/images/illustration-03.png'} alt="" width={500} height={180} />
                </div>
            </div>
        </div>
    )
}

export default Contact