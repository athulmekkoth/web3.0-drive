import React from "react";
import axios from "axios";
import { useState } from "react";
export default function FileUpload({contract,account,provider})
{
    const[file,setFile]=useState(null)
    const[name,setName]=useState("No image selected")
    const handlesubmit=async(e)=>{
e.preventDefault();
if(file)
{
    try{
     
        const formData = new FormData();
        formData.append("file", file);

        const resFile = await axios({
            method: "post",
            url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
            data: formData,
            headers: {
                'pinata_api_key': `${process.env.PINATA_API_KEY}`,
                'pinata_secret_api_key': `${process.env.PINATA_API_SECRET}`,
                "Content-Type": "multipart/form-data"
            },
        });
        const ImgHash = `ipfs://${resFile.data.IpfsHash}`;
     //   const signer=contract.conect(provider.getSigner());
        await contract.add(account,ImgHash)
        alert("successfulll yuploaded")
        setFile(null)
        setName('no image selected')

    }
    catch(e)
    {
        alert("cant upload")
    }
}
    }
    const retrive=(e)=>{
        const img=e.target.files[0]
        console.log(img)
        const read=new window.FileReader()
        read.readAsArrayBuffer(img)
        read.onload=()=>{
            setFile(e.target.files[0])
        }
        setName(e.target.file[0].name)
        e.preventDefault()

    }
    return(
       <div>
        <form onSubmit={handlesubmit}> 
<label htmlFor="fileupload">FIle Uplaod</label>
<input disabled={!account} type="file" id="fileupload"name="data"onChange={retrive}/>
<span>{name}</span>
<button type="submit">Submit</button>
        </form>
       </div>
    )
}

/*
API Key


API Secret


JWT
(Secret access token)
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJmMWJkNzYxYy0zZTJlLTQwODItODRiOS1jYmYyOGJhZGM4MTYiLCJlbWFpbCI6ImF0aHVsbWVra290aDIyQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaW5fcG9saWN5Ijp7InJlZ2lvbnMiOlt7ImlkIjoiRlJBMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfSx7ImlkIjoiTllDMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfV0sInZlcnNpb24iOjF9LCJtZmFfZW5hYmxlZCI6ZmFsc2UsInN0YXR1cyI6IkFDVElWRSJ9LCJhdXRoZW50aWNhdGlvblR5cGUiOiJzY29wZWRLZXkiLCJzY29wZWRLZXlLZXkiOiIzMzdlY2I1MmY4Nzk0NDI4YWI4MiIsInNjb3BlZEtleVNlY3JldCI6IjM3ZWU0NjVmYjk5MDEwMGI1NTJiMTg3NjE3ZWVmMDNiNjg2YTU1YmFmNmQxYjg2NjQzMmY0ODJmOThmZDA1NGUiLCJpYXQiOjE2ODQ1MjA0Nzl9.__sGu4_Mn37c-U1bYzUd3W0h1urdD8NlAjB2mgjQ91k
*/