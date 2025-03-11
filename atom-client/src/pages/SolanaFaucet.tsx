import WalletButton from "@/components/custom/WalletButton"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export const Faucet=()=>{
    return <div className="w-screen h-screen flex flex-col justify-center items-center">
        <h1 className="text-8xl mb-10 ">Solana Faucet</h1>
        <Input type="text" className="w-[70%] mb-10" placeholder="Enter the wallet address"/>
        <h1 className="text-center mb-10 text-4xl">OR</h1>


        <WalletButton />
        <h1 className="text-3xl text-center mt-10">Public Dev/Test Network Adress </h1>
        <p className="text-center text-4xl my-10">dfdslfsdnfljsdnfnsdlsdnlnfsdlnfdsnfsdfn</p>

        <Button className="px-10 py-5">Airdrop SOL</Button>
    </div>
}