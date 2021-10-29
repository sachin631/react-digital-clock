import React,{useState} from "react";
import  "./Main.css";
const App=()=>{
const time=new Date().toLocaleTimeString();
const date=new Date().toLocaleDateString();
const day=new Date().getDay();
const[ctime,setCtime]=useState(time);

const updatedtime=()=>{
   const time=new Date().toLocaleTimeString();
   setCtime(time);
};
setInterval(updatedtime,1000);
   return(<>
            <div className="main_div">
               <div className="center_div">
                    <h1 >{ctime}</h1>
                    <h1>{date}</h1>
                    <h1> {day}</h1>
                    <h1>Created By Sachin Sangwan</h1>
               </div>
            </div>

          </>)
}
export default App;
