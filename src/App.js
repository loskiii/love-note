import React, { useState } from 'react';
import './App.css';

function App() {
  const [note, setNote] = useState('Click below to get a love note!');

  // Array of sweet messages with new additions
  const loveNotes = [
    "Amy, you make every day brighter just by being you.",
    "Amyy, I’m so lucky to have you in my life.",
    "Amy, remember that time we laughed until we couldn’t breathe? Best day ever.",
    "Amy, you’re my favorite person to adventure with.",
    "Amy, your smile is my happy place.",
    "Every moment with you feels like a gift Amy.",
    "You’re the peanut butter to my jelly—perfect together!",
    "I’d choose you over coffee, and that’s saying a lot.",
    "Amy, you make my heart do little happy dances.",
    "Being with you is like finding the perfect playlist.",
    "You’re the sweetest dream I never want to wake up from.",
    "I love how you make even the ordinary feel extraordinary."
  ];

  // Function to pick a random note
  const getRandomNote = () => {
    const randomIndex = Math.floor(Math.random() * loveNotes.length);
    setNote(loveNotes[randomIndex]);
  };

  return (
    <div className="App">
      <h1>Love Notes 💕</h1>
      <div className="note-box">
        <p>{note}</p>
      </div>
      <button onClick={getRandomNote}>Get a Note</button>
    </div>
  );
}

export default App;