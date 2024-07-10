//Task 2: Profile component
import React from "react";

const Profile = ({ member }) => {
  return (
    <div className="profile">
      <img
        src={member.picture}
        alt={member.name}
        style={{ width: "150px", height: "150px" }}
      />
      <h3>{member.name}</h3>
      <p>{member.position}</p>
    </div>
  );
};

export default Profile;
