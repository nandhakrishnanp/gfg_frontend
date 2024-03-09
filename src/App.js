import "./App.css";
import axios from "axios";
import { Routes,Route,Link } from "react-router-dom";
import  icon from "./GeeksforGeeks.svg.png"
import { useState } from "react";
import Result from "./Result";
import Home from "./Home";
function App() {
    const [url , setUrl] = useState("")
    const [err,setErr] = useState("")
    const[data,setdata] =useState("")
    //https://worthofgeeks.onrender.com/
  const sendInputToApi = async () => {
   setdata("")
   if(url!=""){
      const BaseUrl = "https://worthofgeeks.onrender.com/";
      try{
         const res = await axios.post(BaseUrl, { url: url });
      const Data = res.data;
      console.log(Data);
      setdata(Data)
      setUrl("")
      }
      catch(err){
         console.log(err);
      }
      
   } 
   else{
        setErr("No Url")
   }
    
  };

   

  return (
    <div>
       <Routes>
         <Route path="/Result" element={<Result data = {data} setdata={setdata}/>}/>
         <Route path="/" element={<Home icon={icon}  sendInputToApi={sendInputToApi}  url={url} setUrl={setUrl}   />}/>
       </Routes>
     
    </div>
  );
}

export default App;
