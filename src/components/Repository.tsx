import { RepoStructure } from "../utils/RepoStructure";
import { Visibility, Star } from "@mui/icons-material";
import { FaCodeBranch } from "react-icons/fa";

const Repository = ({ prop }: { prop: RepoStructure })=>{


    return<>
    <div style= { {backgroundColor:'#9d4edd',borderRadius:'25px',maxWidth:'600px',height:'auto'}}>
        <div style={  {position:'relative',bottom:'5px',right:'5px',backgroundColor:'#edf2fb',borderRadius:'25px',width:'100%',height:'100%'}}>
            
            <h3 style={  {marginTop:'20px',fontWeight:'bolder',fontFamily:'monospace',fontSize:'25px',textAlign:'center',paddingTop:'20px'}}>{prop.name}</h3>

            <div style={  {width:'100%', height:'2px',backgroundColor:'#8093f1'}}></div>

            <div style={  {display:'flex',flexDirection:'row',rowGap:'10px',justifyContent:'space-evenly',marginTop:' 10px'}}>
                <div style={  {display:'flex',flexDirection:'row',rowGap:'5px',alignItems:'center',justifyContent:'center'}}> <FaCodeBranch /> {prop.forks_count}</div>
                <div  style={  {display:'flex',flexDirection:'row',rowGap:'5px',alignItems:'center',justifyContent:'center'}}> <Star/> {prop.stargazers_count}</div>
                <div  style={  {display:'flex',flexDirection:'row',rowGap:'5px',alignItems:'center',justifyContent:'center'}}><Visibility/> {prop.watchers}</div>
                <button style= {{backgroundColor:'black',padding:'5px',borderRadius:'10px',color:'white'}}>{prop.visibility}</button>
            </div>

            <h2 style={{fontFamily:'monospace',textOverflow: "ellipsis", 
  maxWidth: "500px",maxHeight:'200px',paddingLeft:'10px',paddingBottom:'10px' }}>{prop.description}</h2>
        {prop.language && (
  <button 
    style={{ 
      backgroundColor: 'black', 
      padding: '5px', 
      borderRadius: '10px', 
      color: 'white', 
      textAlign: 'start' ,
      marginBottom:'10px',
      marginLeft:'10px'
    }}
  >
    {prop.language}
  </button>
)}
        
        </div>

    </div>
    
    </>

}
export default Repository;