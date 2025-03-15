

import { RepoStructure } from "../utils/RepoStructure";
import { useState } from "react";
import Repository from "./Repository";
import {  Pagination } from "@mui/material";

const RepositoriesList = ({reposData}:{reposData:RepoStructure[]})=>{


    const [currentPage,setCurrentPage] = useState(1);
    const itemsPerPage=5;

    const totalPages = Math.ceil(reposData.length / itemsPerPage)
    const startIndex = (currentPage -1 )*itemsPerPage
    const selectedRepos = reposData.slice(startIndex,startIndex+itemsPerPage);

    return(

        <div>
             <div style={  {display:'flex',justifyContent:'center',gap:'10px',marginTop:'10px'}}>
             
             <Pagination
         count={totalPages} 
         page={currentPage}
         onChange={(_,value) => setCurrentPage(value)} 
         color="primary" 
         shape="rounded"
         sx={{ display: "flex", justifyContent: "center", mt: 2 }} 
       />
             </div>
            <ul style={{listStyleType:'none'}}>
                { selectedRepos.map((repo,index) =>(
                    <li key= {index}style= {{padding:'20px',alignItems:'center'}}>
                        <Repository prop={repo}/>
                    </li>
                )

                )}
            </ul>

           
        </div>
    );
};

export default RepositoriesList
