import Image from "next/image"
import Link from "next/link"
import BlackBtn from "../BlackBtn"

const Header = ()=> {

    return (
        <header className={`w-[90%] mx-auto lg:w-[80%]`}>
            <nav className="mb-2.5 py-2.5 flex justify-between items-center">
                <Image src={'/images/logo.png'} width={120} height={80} alt="logo"  />
                <ul className="hidden md:flex items-center gap-5">
                    <li><Link href={'#about'}> About us </Link></li>
                    <li><Link href={'#about'}> Services </Link></li>
                    <li><Link href={'#about'}> Use Cases </Link> </li>
                    <li><Link href={'#about'}> Pricing </Link> </li>
                    <li><Link href={'#about'}> Blog </Link></li>
                    <button className="border rounded-lg p-2.5">
                        Request a quote
                    </button>
                </ul> 
            </nav>
            <div className="grid lg:grid-cols-2 items-center lg:h-[80vh] gap-12">
                <div className="flex flex-col ">
                    <h1 className="text-4xl lg:text-6xl xl:text-7xl font-semibold mb-5">Navigating the digital landscape for success</h1>
                    <p className="mb-12 ">Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
                    <BlackBtn label="Book a consultation" />
                </div>
                <div className="flex justify-center items-center">
                    <Image src={'/images/Illustration-01.png'}  width={700} height={200} alt=""/>
                </div>
            </div>
           
        </header>
    )
}

export default Header