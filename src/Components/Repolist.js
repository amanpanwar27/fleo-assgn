import react, { useState } from "react";
import RepoCard from "./RepoCard";
import { useEffect } from "react";
import "./Repolist.css";
const Repolist = ()=>{
    const [repoitems,setrepoitems] = useState([]);
    useEffect(async ()=>{
        await fetch("https://api.github.com/search/repositories?q=language:Javascript&sort=stars&order=desc").then((res)=>res.json()).then((data)=>{
            setrepoitems(data.items);
        })
    },[]);
    console.log(repoitems);
    return <div className="Repolistcontainer">
    {repoitems.map((item)=><RepoCard itemdetails = {item}/>)}
    </div>
}
export default Repolist;