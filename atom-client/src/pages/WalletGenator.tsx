import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
export const WalletGenerator=()=>{
    return <div className="w-screen h-screen flex flex-col justify-start items-center gap-10">

 <h1 className="text-7xl font-Nue text-left">Secret Recover Key</h1>
 
<Input placeholder="Enter you secret phrase (or leave blank to generate) " className=" w-[70%] border-2 px-10 py-5"/>
<Button className="px-10 py-5 rounded-full">Generate</Button>
    </div>
}