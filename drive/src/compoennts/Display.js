import React, { useState } from "react";

export default function Display({ contract, account }) {
  const [address, setAddress] = useState("");

  const get = async () => {
    // Use the address state variable here
    const addr = address;
    if(addr)
    {
      const datarr = await contract.display(addr).call();
      console.log(datarr);
      
       
    }else{
alert("please add adress")
    }
   
  };

  return (
    <>
      <div>iMAGE DISPLAY</div>
      <input
        className=""
        placeholder="address"
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <button onClick={get}>GET PICTURES</button>
    </>
  );
}
