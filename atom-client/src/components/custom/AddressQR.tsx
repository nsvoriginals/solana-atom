import React from "react";
import { useTheme } from "@/components/theme-provider";
import { QRCode } from "react-qrcode-logo";

const WalletQRCode = ({ publicKey }) => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";
  return (
    <div className="flex flex-col items-center p-4 border-2 m-10">
      <h2 className="text-xl font-bold mb-2 ">
        Public Address
      </h2>
      <QRCode
        value={publicKey}
        size={250}
        logoImage="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAYFBMVEX..."
        logoWidth={50}
        logoHeight={50}
        logoOpacity={0.8}
        qrStyle="squares"
        eyeRadius={10}
        fgColor={isDarkMode ? "#ffffff" : "#000000"}
        bgColor={isDarkMode ? "#000000" : "#ffffff"}
      />
      <h1 className="text-center">{publicKey}</h1>
    </div>
  );
};

export default WalletQRCode;
