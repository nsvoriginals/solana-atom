import { Footer } from "@/components/custom/Footer"
import { Marquee } from "@/components/custom/Marquee"
import { Navbar } from "@/components/custom/Navbar"

export const Landing=()=>{
    return <div className="w-screen h-screen flex flex-col justify-center items-center"> 
     <div className="flex items-center flex-col justify-center text-center">
 <h1 className="text-8xl font-Nue">ALL IN <span className="text-8xl font-Nokia font-bold">o</span>NE PLA<span className="font-Nokia font-bold">c</span>E</h1>
 <h1 className="text-8xl font-bold font-Nokia mt-16 mb-24">solana</h1>
     </div>
     <Marquee></Marquee>
     <Footer></Footer>
    </div>
}