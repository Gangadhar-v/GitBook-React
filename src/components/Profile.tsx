import ProfileStructure from "../utils/ProfileStructure";

interface ProfileProps {
  userData: ProfileStructure | null;
}

export default function Profile({ userData }: ProfileProps) {
 

  return (
    <>
      {userData && (
        <div
          style={{
            width: "700px",
            borderRadius: "20px",
            backgroundColor: "#161B22",
            padding: "20px",
            display: "flex",
            flexDirection: "row",
            color: "#C9D1D9",
            fontFamily: "Arial, sans-serif",
            boxShadow: "0 0 15px rgba(88, 166, 255, 0.3)",
          }}
        >
      
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "20px",
              padding: "10px",
            }}
          >
            <img
              style={{
                borderRadius: "50%",
                width: "180px",
                height: "180px",
                boxShadow: "0 0 15px rgba(88, 166, 255, 0.5)",
              }}
              src={`${userData.avatar_url}`}
              alt="Profile"
            />
            <h2 style={{ fontFamily: "sans-serif", color: "#58A6FF" }}>{userData.name}</h2>
          </div>

       
          <div
            style={{
              width: "1px",
              height: "auto",
              background: "#58A6FF",
              margin: "0 15px",
            }}
          ></div>

        
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "20px",
              margin: "10px",
            }}
          >
            <ul
              style={{
                listStyleType: "none",
                display: "flex",
                flexDirection: "row",
                gap: "10px",
                fontWeight: "bold",
                fontSize: "15px",
                fontFamily: "monospace",
              }}
            >
              <li style={{ margin: "9px" }}> Followers: {userData.followers}</li>
              <li style={{ margin: "9px" }}> Following: {userData.following}</li>
              <li style={{ margin: "9px" }}> Public Repos: {userData.public_repos}</li>
            </ul>

            <p style={{ fontWeight: "bolder", fontSize: "15px", fontFamily: "monospace", textAlign: "center" }}>
              {userData.bio}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
