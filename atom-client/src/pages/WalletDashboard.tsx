import React from "react";
import { IoSendSharp } from "react-icons/io5";
import { GrTransaction } from "react-icons/gr";
import { Button } from "@/components/ui/button";
import WalletQRCode from "@/components/custom/AddressQR";
export const Dashboard = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center font-Nue  ">

      <div className="flex flex-col justify-between items-center border-2 rounded-lg p-5">
        <div
          id="display"
          className="flex flex-col justify-between items-center gap-5   p-5"
        >
          <h1 className="text-5xl font-Nue">Balance</h1>

          <div className="flex items-center justify-between">
            <h1 className="text-8xl">0.009</h1>
            <h2 className="text-5xl ml-5">SOL</h2>
          </div>
        </div>
        <div
          id="buttons"
          className="flex justify-between items-center gap-10 mt-16 p-5"
        >
          <Button className="px-10 py-5 rounded-full flex justify-between items-center">
            <span className="px-5">Send</span>
            <IoSendSharp className="w-4 h-4" />
          </Button>
          <Button className="px-10 py-5 rounded-full flex justify-between items-center">
            <span className="px-2">Transactions</span>
            <GrTransaction className="w-4 h-4 " />
          </Button>
          <Button className="px-10 py-5 rounded-full ">
            Connect Wallet
          </Button>
        </div>
      </div>
      <WalletQRCode publicKey={'sdfsdjlknsffs'} />
    </div>
  );
};
