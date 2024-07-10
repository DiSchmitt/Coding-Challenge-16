//Task 2: Gallery component
import React from "react";
import Profile from "./Profile.js";

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
