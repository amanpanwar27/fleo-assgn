import react from "react";
import "./Repocard.css";
const RepoCard = (props)=>{
    console.log("***********");
    return <div className="RepoContainer">
    <div className="UserDetails">
    <img src={props.itemdetails.owner.avatar_url}/>
    <span id="name" onClick={()=>{
        window.location.href = props.itemdetails.svn_url;
    }}>{props.itemdetails.owner.login}</span>
    </div>
    <div className="RepoDetails">
    <div>
    <span>{props.itemdetails.full_name}</span>
    <span id="desc">{props.itemdetails.description}</span>
    <span id="lang">{props.itemdetails.language}</span>
    </div>
    <div>
    <div id="others">
    <span><img src="/assets/star.png"/><span>stars({props.itemdetails.stargazers_count})</span></span>
    <span><img src="/assets/git.png"/><span>forks({props.itemdetails.forks})</span></span>
    </div>
    </div>
    </div>
    </div>
}
export default RepoCard;