//U4888-2664
//Task 1: Utilize the App.js file as the entry point of your application
import React from 'react';
import Gallery, { Header } from './Gallery';
import GaryStu from './Images/Gary_Stu.jpg';
import MarySue from './Images/Mary_Sue.jpg';
import './App.css'
const App = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Gary Stu',
      position: 'Quality control',
      picture: GaryStu
    },
    {
      id: 2,
      name: 'Mary Sue',
      position: 'Future Planning Officer',
      picture: MarySue
    }
  ];

  return (
    <div className="App">
      <main>
      <Header />
        <Gallery teamMembers={teamMembers} /> 
      </main>
    </div>
  );
}

export default App;