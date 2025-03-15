

import ProfileStructure from "../utils/ProfileStructure";


interface ProfileProps{
    userData:ProfileStructure | null
}
export default function Profile( {userData}:ProfileProps){
  console.log('---------------log-------------------2---', userData)

  return (
    <>
    {userData && 
       <div style={  {width:'700px' ,borderRadius: '20px',backgroundColor:'whitesmoke',padding:'20px',display:'flex',flexDirection:'row'}
        }>

            <div style={  {display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',gap:'20px',padding:'10px'}}>
            <img  style={{borderRadius:'50%', width: '200px',
        height: 'fit-content'}}src={ `${userData.avatar_url}`}  />
       <h2 style=  {{fontFamily:'sans-serif'}}>{userData.name}</h2>
            </div>

            <div style={  {width:'0px',height:'auto',border:'1px solid violet'}}> </div>

            <div style={  {display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',gap:'20px',margin:'10px'}}>
                <ul   style={  {listStyleType:'none',display:'flex',flexDirection:'row',gap:'10px' , fontWeight:'bold',fontSize:'15px',fontFamily:'monospace'}}>
                    <li style={  {margin:'9px'}}>Followers: {userData.followers}</li>
                    <li style={  {margin:'9px'}}>Following: {userData.following}</li>
                    <li style={  {margin:'9px'}}>Public Repos: {userData.public_repos}</li>
                </ul>

                <p style={  {fontWeight:'bolder',fontSize:'15px',fontFamily:'monospace'}}>{userData.bio}</p>
               
            </div>
       
    </div>
    }
    </>
  )
}