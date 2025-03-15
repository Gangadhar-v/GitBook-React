
import {useParams} from 'react-router-dom';
import { useEffect,useState } from 'react';
import ProfileStructure from '../utils/ProfileStructure';
import Profile from '../components/Profile';
import { RepoStructure } from '../utils/RepoStructure';

import RepositoriesList from '../components/RepositoriesList';
export default function GitProfile(){



    const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;


    const {username} = useParams();
    const [userData,setUserData] = useState<ProfileStructure|null>(null);
    const [userError,setError]  = useState<string|null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const [reposData,setReposData] = useState<RepoStructure[] | null>(null);
    const [repoError,setRepoError] = useState<string | null>(null);

   
    useEffect( ()=>{

        if(!username) return;

        const fetchUserData = async () => {
            console.log('------------log------4---------', userError)
            try{
                setLoading(true);
                const response = await fetch(`https://api.github.com/users/${username}`, {
                    headers: {
                      Authorization: `Bearer ${GITHUB_TOKEN}`,
                      "Content-Type": "application/json",
                    },})
                if(!response.ok){
    
                    throw new Error('Unknown Error occured')
                
                }

                const data:ProfileStructure = await response.json();
                console.log('--------------log---3-----------', data)
                if(data.message) {
                    setError(data.message)
                }
                setUserData(data)

            }catch(error:any){

                console.log(error)
                setError(error.message)

                console.log('---------fetch failted--------',userError);
            }finally{
                setLoading(false);

            }
        
    
        };

        const fetchReposData = async()=>{

            if(!username) return;
            try{

                setRepoError(null);
                const response = await fetch(`https://api.github.com/users/${username}/repos`,{
                    headers: {
                      Authorization: `Bearer ${GITHUB_TOKEN}`,
                      "Content-Type": "application/json",
                    },})

                    if(!response.ok){
                        throw new Error('error occured');
                    }
                    const data:RepoStructure[] = await response.json();
                    setReposData(data)

            }catch(error){

                setRepoError('error occured in repo fetching');
                console.log('---------fetch failted--------',repoError);
                console.log(loading);
            }

        }
        fetchUserData();
        fetchReposData();

    },[username]);




    return(
       
        <div style={{display:'flex',flexDirection:'column',gap:'20px'}}>
          
            {userData && userData.id  && <Profile userData={userData}/>}
           { !userError && <h1 style={  {fontSize:'40px',fontWeight:'bolder',textAlign:'center',fontFamily:'monospace'}}>Repositories</h1>}
            {/* <ul style={  {listStyleType:'none'}}>{reposArray}</ul> */}
          {reposData && < RepositoriesList reposData={reposData}/>}  
            <h2>{userError}</h2>
      
        </div>
    )
}