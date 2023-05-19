import React from "react";
import axios from "axios";
import { useState } from "react";
export default function FileUpload({contract,account,provider})
{
    const[file,setFile]=useState(null)
    const[name,setName]=useState("No image selected")
    const handlesubmit=(e)=>{
e.preventDefault();
if(file)
{
    try{
        const Formdata=new Data()
        Formdata("file",file)

    }
    catch(e)
    {
        alert("cant upload")
    }
}
    }
    const retrive=()=>{

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