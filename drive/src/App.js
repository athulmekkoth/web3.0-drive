import React from "react"
import { useState,useEffect } from "react";

import Upload from "../src/artifact/contracts/Upload.sol/Upload.json"
import FileUpload from "./compoennts/FileUpload";
const ethers = require("ethers")
function App() {
  const[account,setAccount]=useState("")
  const[contract,setContract]=useState(null)
  const[provider,setProvider]=useState(null)
  const[modalopen,setModalOpen]=useState(false)
  useEffect(()=>{
    //read
    const provider=new ethers.providers.Web3Provider(window.ethereum)

    const  loadprovider=async()=>{
      if(provider)
      {
        //if account chanegd instanlty update
      window.ethereum.on("chainChanged",()=>{
        window.location.reload()

      })
      window.ethereum.on("accountChanged",()=>{
        window.locaation.reload();
      })
        await provider.send("eth_requestAccounts",[]);
        const signer=provider.getSigner()
        const address=await signer.getAddress();
        setAccount(address)
        let contractadress="0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0"

        const contract= new ethers.Contract(
          contractadress,Upload.abi,signer
        )

        console.log(contract)
        setContract(contract)

        setProvider(provider)
      }else{
        console.log("metamask not found")

      }
  
    }
    provider &&  loadprovider( )
},[])


  return (
    <div className="">
<h1 className="text-base">TrustDrop</h1>

<p className="text-base">Account :{account ? account:"not cnnecged"}</p>
 <FileUpload account={account}  provider={provider} contract={contract}/>

    </div>
  );
}

export default App;
