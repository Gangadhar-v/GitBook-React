import { RepoStructure } from "../utils/RepoStructure";
import { useState } from "react";
import Repository from "./Repository";
import { Pagination } from "@mui/material";

const RepositoriesList = ({ reposData }: { reposData: RepoStructure[] }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(reposData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedRepos = reposData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div
      style={{
        backgroundColor: "#0D1117",
        minHeight: "100vh",
        padding: "20px",
        color: "#C9D1D9",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={(_: React.ChangeEvent<unknown>, value: number) => setCurrentPage(value)}
          color="primary"
          shape="rounded"
          sx={{
            "& .MuiPaginationItem-root": {
              color: "#C9D1D9",
              backgroundColor: "#161B22",
              border: "1px solid #58A6FF",
            },
            "& .Mui-selected": {
              backgroundColor: "#58A6FF !important",
              color: "#000",
              fontWeight: "bold",
            },
          }}
        />
      </div>

      <ul style={{ listStyleType: "none", padding: 0, display: "flex", flexDirection: "column", alignItems: "center", gap: "15px" }}>
        {selectedRepos.map((repo, index) => (
          <li key={index} style={{ width: "100%", maxWidth: "650px", padding: "10px" }}>
            <Repository prop={repo} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RepositoriesList;
