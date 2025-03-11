import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "./components/mode-toggle";
import React, { Children } from "react";
import WalletQRCode from "./components/custom/AddressQR";
import { Dashboard } from "./pages/WalletDashboard";
import { WalletGenerator } from "./pages/WalletGenator";
import { TokenLaunchpad } from "./pages/TokenLaunchpad";
import { WalletContext } from "./WalletProvider";
function App() {
  return (
    <ThemeProvider defaultTheme="dark"  >
      <div className="flex flex-col items-center justify-center min-h-screen font-N">
        <h1 className="text-2xl font-bold">Theme Toggle Example</h1>
        <ModeToggle />
<h1 className="font-Nue text-black">hi there</h1>
        <Dashboard/>
        <WalletGenerator></WalletGenerator>
        <WalletContext>
        <TokenLaunchpad>

</TokenLaunchpad>
        
        </WalletContext>
      </div>
    </ThemeProvider>
  );
}

export default App;
