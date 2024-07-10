//Task 2 Gallery component
import React from "react";
import Profile from "./Profile.js";

//Task 4: header component to show I can use named exports
export const Header = () => {
  return (
    <header className="header">
      <h1>Meet The Team</h1>
    </header>
  );
};

const Gallery = ({ teamMembers }) => {
  return (
    <div className="gallery">
      <h2>Our Team Members</h2>
      <div className="gallery-container">
        {teamMembers.map((member) => (
          <Profile key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;