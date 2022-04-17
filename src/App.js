import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Repolist from "./Components/Repolist";
import { Pagination } from 'antd';
import 'antd/dist/antd.css';
const App = ()=>{
  const [currentpage,setcurrentpage] = useState(1);
  return <div>
  <Navbar/>
  <Repolist/>
  <div style={{display:"flex",
  width:"100vw",
  justifyContent: 'center',
}}>
  <Pagination defaultCurrent={currentpage} total={50} style={{
  marginBottom:"20px",
  marginTop:"10px",
}}/>
  </div>
</div>
}
export default App;
