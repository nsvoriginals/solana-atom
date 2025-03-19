import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "./components/mode-toggle";
import React, { Children } from "react";
import WalletQRCode from "./components/custom/AddressQR";
import { Dashboard } from "./pages/WalletDashboard";
import { WalletGenerator } from "./pages/WalletGenator";
import { TokenLaunchpad } from "./pages/TokenLaunchpad";
import { WalletContext } from "./WalletProvider";
import { Faucet } from "./pages/SolanaFaucet";
import { Landing } from "./pages/LandingPage";
import { Navbar } from "./components/custom/Navbar";
function App() {
  return (
    <ThemeProvider defaultTheme="dark"  >
      <div className="flex flex-col items-center justify-center min-h-screen ">
        <Navbar></Navbar>
        <ModeToggle />
        <Landing></Landing>
    <h1>Hi Test commit 223 </h1>
      </div>
    </ThemeProvider>
  );
}

export default App;
