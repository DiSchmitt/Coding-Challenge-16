import React from "react";
import Gallery from "./Gallery";
import GaryStu from "./Images/Gary_Stu.jpg";
import MarySue from "./Images/Mary_Sue.jpg";
import "./App.css";
//Task 4: Integrate at least one additional component (e.g., Header for the page title) within the same file as another component.
//So as to demonstrate my capability to export multiple components from the same file using named exports.
export const Header = () => {
  return (
    <header className="header">
      <h1>Meet The Team</h1>
    </header>
  );
};

//Task 1: Utilize the App.js file as the entry point of your application
const App = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Gary Stu",
      position: "Quality control",
      picture: GaryStu,
    },
    {
      id: 2,
      name: "Mary Sue",
      position: "Future Planning Officer",
      picture: MarySue,
    },
  ];

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Gallery teamMembers={teamMembers} />
      </main>
    </div>
  );
};

export default App;
