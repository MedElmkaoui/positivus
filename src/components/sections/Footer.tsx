import Image from "next/image"
import Link from "next/link"


const Footer = ()=> {
    return (
        <div className={`bg-black rounded-t-3xl p-12 w-[95%] mx-auto lg:w-[80%] space-y-12`}>
            <nav className="mb-2.5 py-2.5 flex gap-12 flex-wrap justify-center lg:justify-between items-center">
                <Image src={'/images/logo-white.png'} width={180} height={80} alt="logo"  />
                <ul className="md:flex justify-center items-center gap-5 text-white">
                    <li><Link href={'#about'}> About us </Link></li>
                    <li><Link href={'#about'}> Services </Link></li>
                    <li><Link href={'#about'}> Use Cases </Link> </li>
                    <li><Link href={'#about'}> Pricing </Link> </li>
                    <li><Link href={'#about'}> Blog </Link></li>
                    <div className="flex justify-between items-center">

                    </div>
                </ul>
            </nav>

            <div className="pb-12 flex gap-3.5 flex-wrap justify-between border-b border-gray">
                <div className="flex flex-col items-center lg:items-start gap-2.5 text-white text-center lg:text-left">
                    <h1 className="w-fit bg-primary font-semibold text-black p-1 rounded-lg">Contact</h1>
                    <span className="text-sm font-thin">Email: info@positivus.com</span>
                    <span className="text-sm font-thin">Phone: 555-567-8901</span>
                    <span className="text-sm font-thin">Address: 1234 Main St <br /> Moonstone City, Stardust State 12345</span>
                </div>
                <div className="bg-darkgray lg:p-12 p-5 rounded-3xl flex items-center justify-between gap-3.5 lg:gap-12 flex-wrap lg:flex-row">
                    <input type="text" placeholder="Email" className="py-2.5 px-3.5 bg-transparent border border-black rounded-lg" />
                    <button className="w-full lg:w-fit bg-primary py-2.5 px-3.5 rounded-lg"> Subscribe to news</button>
                </div>
            </div>

            <div className="text-center lg:text-left text-white text-sm  ">
                <span>© 2023 Positivus. All Rights Reserved.</span>
                <Link href={''} className="underline ml-12">Privacy Policy</Link>
            </div>
        </div>
    )
}

export default Footer