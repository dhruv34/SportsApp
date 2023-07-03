import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function StartScreen({ onCodeSubmit }) {
  const [code, setCode] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    onCodeSubmit(code);
  };
  return (
    <div className = "start-screen">
      <h1>Enter Code</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <button type="submit">Enter</button>
      </form>
    </div>
  );
}

function NewScreen({ submittedCode }) {
  return (
    <div className='new-screen'>
      <h1>New Screen</h1>
      <p>Submitted Code: {submittedCode}</p>
    </div>
  );
}

function App() {
  const [submittedCode, setSubmittedCode] = useState('');
  const [showNewScreen, setShowNewScreen] = useState(false);
  const handleCodeSubmit = (code) => {
    setSubmittedCode(code);
    setShowNewScreen(true);
  };
  return (
    <div>
      {!showNewScreen ? (
        <StartScreen onCodeSubmit={handleCodeSubmit} />
      ) : (
        <NewScreen submittedCode={submittedCode} />
      )}
    </div>
  );
}

export default App;
