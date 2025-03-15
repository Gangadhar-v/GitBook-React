import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaGithub, FaSearch } from "react-icons/fa";

export default function LaunchComponent() {
  const [username, setUserName] = useState("");
  const navigate = useNavigate();

  const navigateToProfile = () => {
    if (username.trim()) {
      navigate(`/profile/${username}`);
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "#0D1117",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        color: "#C9D1D9",
        fontFamily: "Arial, sans-serif",
      }}
    >
      
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          fontSize: "2.5rem",
          fontWeight: "bold",
          color: "#58A6FF",
          marginBottom: "20px",
        }}
      >
        <FaGithub size={40} />
        <span>GitBook</span>
      </div>

     
      <div
        style={{
          display: "flex",
          alignItems: "center",
          background: "#161B22", 
          padding: "12px 20px",
          borderRadius: "30px",
          width: "400px",
          boxShadow: "0 0 15px rgba(88, 166, 255, 0.3)",
        }}
      >
        <input
          style={{
            flex: 1,
            border: "none",
            background: "transparent",
            color: "#C9D1D9",
            fontSize: "18px",
            outline: "none",
            padding: "8px",
          }}
          type="text"
          placeholder="Search GitHub User..."
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button
          style={{
            backgroundColor: "#58A6FF",
            border: "none",
            padding: "10px",
            borderRadius: "50%",
            cursor: "pointer",
            transition: "0.3s",
          }}
          onClick={navigateToProfile}
        >
          <FaSearch size={20} color="#000" />
        </button>
      </div>

     
      <p style={{ marginTop: "20px", fontSize: "14px", color: "#8B949E" }}>
        Explore GitHub Profiles with GitBook 🚀
      </p>
    </div>
  );
}


