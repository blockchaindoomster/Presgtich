import { useEffect, useState } from "react";
import {
  connectWallet,
  getCurrentWalletConnected,
} from "../../util/interact";
import {chainId, contractAddress} from '../../constants/address';
import { ethers } from 'ethers'
import Web3 from "web3";

function Header() {
  const [walletAddress, setWallet] = useState("");
  useEffect(async () => {
    const { address, status } = await getCurrentWalletConnected();
    addWalletListener();
    setWallet(address);
  }, []);

  const addWalletListener = () => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          setWallet(accounts[0]);
        } else {
          setWallet("");
        }
      });
      window.ethereum.on("chainChanged", (chain) => {
        connectWalletPressed()
        if (chain !== chainId) {
        }
      });
    } 
  }

  const connectWalletPressed = async () => {
    const walletResponse = await connectWallet();
    setWallet(walletResponse.address);
    window.web3 = new Web3(window.ethereum)
  };
  return (
    <>
      <header className="main-header" style={{height:'auto', position:'absolute'}}>
        <div className="section-content">
        <a href="index.html" title="Łaszczuk" className="logo col-2 col-4-s"  style={{height:'0'}}>
        <p className="company-motto">
        </p>
        </a>

        <div className="main-top-menu col-8-end col-10-s "  >
        <nav className="main-menu col-10-s">
          <ul className="menu-list" style={{marginTop:'20px'}}>
            <li className="menu-item col-10-s  menu-item menu-item-type-custom menu-item-object-custom menu-item-228">
              <a href="https://twitter.com/PrestigeDef" style={{fontSize:'24px !important', marginLeft:'10px'}} className="font-fa">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="https://www.youtube.com/channel/UC7LNw1x46FJGkaiew5ptdvg" target="_blank" style={{fontSize:'24px !important', marginLeft:'10px'}} className="font-fa">
               <i className="fa fa-youtube"></i>
              </a>
              <a href="https://discord.com/invite/B8j5R5VCtR" target="_blank" style={{fontSize:'24px !important', marginLeft:'10px'}} className="font-fa">
               <i className="fa fa-discord"></i>
              </a>
            </li>
            <li className="menu-item col-10-s  menu-item menu-item-type-custom menu-item-object-custom menu-item-228">
              <a style={{background:'#c0fee8', fontSize:'14px', color:'black', padding:'10px 20px', textDecoration:'none !important'}} href="#">
              View on Opensea
              </a>
            </li>
            <li className="menu-item col-10-s  menu-item menu-item-type-custom menu-item-object-custom menu-item-228" style={{marginLeft: '10px'}}>
              <a style={{background:'#c0fee8', fontSize:'14px', color:'black', padding:'10px 20px'}} href="#" onClick={connectWalletPressed}>
                {walletAddress.length > 0 ? (
                  "Connected: " +
                  String(walletAddress).substring(0, 6) +
                  "..." +
                  String(walletAddress).substring(38)
                  ) : (
                  <span>Connect Wallet</span>
                )}
              </a>
            </li>
          </ul>
        </nav>
        </div>
        </div>
      </header>
    </>
  )
}

export default Header