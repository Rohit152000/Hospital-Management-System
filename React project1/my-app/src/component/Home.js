import React from 'react';

function Home() {
  return (
    <div className="container">
      <h1>Welcome to HEALTH CARE</h1>
      <img src={"https://wallpapercave.com/wp/wp6681951.jpg"} alt="Hospital Image" style={{ maxWidth: "1600px" }} />
      <div className="good-thoughts">
        <p style={{ fontSize: "18px", fontStyle: "italic", color: "#333" }}>The greatest wealth is health</p>
        <p style={{ fontSize: "18px", fontStyle: "italic", color: "#333" }}>Health is a state of complete harmony of the body, mind, and spirit.</p>
        <p style={{ fontSize: "18px", fontStyle: "italic", color: "#333" }}>The art of medicine consists of amusing the patient while nature cures the disease</p>
      </div>
    </div>
  );
}

export default Home;
