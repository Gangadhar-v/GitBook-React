import { RepoStructure } from "../utils/RepoStructure";
import { Visibility, Star } from "@mui/icons-material";
import { FaCodeBranch } from "react-icons/fa";

const Repository = ({ prop }: { prop: RepoStructure }) => {
  return (
    <div
      style={{
        backgroundColor: "#161B22",
        borderRadius: "15px",
        maxWidth: "600px",
        padding: "20px",
        boxShadow: "0 0 10px rgba(88, 166, 255, 0.3)",
        color: "#C9D1D9",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h3
        style={{
          fontWeight: "bold",
          fontSize: "22px",
          textAlign: "center",
          color: "#58A6FF",
          marginBottom: "10px",
        }}
      >
        {prop.name}
      </h3>

      <div
        style={{
          width: "100%",
          height: "2px",
          backgroundColor: "#58A6FF",
          marginBottom: "15px",
        }}
      ></div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          marginBottom: "15px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <FaCodeBranch color="#8B949E" /> {prop.forks_count}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <Star color="warning" /> {prop.stargazers_count}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <Visibility color="info" /> {prop.watchers}
        </div>
      </div>

      <p
        style={{
          fontSize: "14px",
          textOverflow: "ellipsis",
          maxWidth: "500px",
          maxHeight: "100px",
          overflow: "hidden",
          paddingBottom: "10px",
        }}
      >
        {prop.description}
      </p>

      {prop.language && (
        <button
          style={{
            backgroundColor: "#58A6FF",
            padding: "5px 10px",
            borderRadius: "8px",
            color: "#000",
            fontWeight: "bold",
            border: "none",
            cursor: "pointer",
            marginTop: "10px",
          }}
        >
          {prop.language}
        </button>
      )}
    </div>
  );
};

export default Repository;
