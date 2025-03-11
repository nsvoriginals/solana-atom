import WalletButton from "@/components/custom/WalletButton";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import TokenCard from "@/components/custom/tokens";

export const TokenLaunchpad = () => {
  const [logo, setLogo] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setLogo(file);
  };

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center gap-10 p-6">

      <h1 className="text-6xl font-bold text-center">
        Launch tokens on{" "}
        <span className="text-inherit bg-[#512da8]">Solana</span>
      </h1>

    
      <div className="w-full flex justify-around items-center mt-10">
        <h1 className="text-4xl font-semibold">Token Details</h1>
        <WalletButton />
      </div>
     
      <div id="tokendata" className="w-[70%] flex flex-col items-center justify-center gap-6 p-6 shadow-lg rounded-xl border border-gray-300">
        
   
        <div className="w-full">
          <label className="block font-medium text-gray-700">Token Name</label>
          <Input placeholder="Solana Coin" />
        </div>

    
        <div className="w-full">
          <label className="block font-medium text-gray-700">Token Symbol</label>
          <Input placeholder="SOLC" />
        </div>

       
        <div className="w-full">
          <label className="block font-medium text-gray-700">Token Description</label>
          <Input placeholder="A revolutionary token on Solana blockchain" />
        </div>

        
        <div className="w-full">
          <label className="block font-medium text-gray-700">Total Supply</label>
          <Input type="number" placeholder="1000000" />
        </div>

        <div className="w-full">
          <label className="block font-medium text-gray-700">Decimals</label>
          <Input type="number" placeholder="9" />
        </div>

     
        <div className="w-full">
          <label className="block font-medium text-gray-700">Token Logo</label>
          <div className="border-dashed border-2 border-gray-400 rounded-lg p-4 flex flex-col items-center justify-center">
            <input
              type="file"
              className="hidden"
              id="fileUpload"
              onChange={handleFileChange}
            />
            <label
              htmlFor="fileUpload"
              className="cursor-pointer px-4 py-2 rounded-md border border-gray-400 hover:border-gray-600"
            >
              {logo ? logo.name : "Choose File"}
            </label>
          </div>
        </div>

        <Button className="w-full border rounded-full hover:bg-purple-500 ">
          Create Token
        </Button>
      </div>
      
    </div>
  );
};
