import React from 'react';

function first() {
  return (
    <div
      style={{
        display: 'flex',          // ‼️ Make it a flex container
        alignItems: 'center',     // vertical centering
        justifyContent: 'center', // horizontal centering
        minHeight: '100vh',       // full‑viewport height (optional)
         marginTop:'50px',
      }}
    >
      <img
        src="/staregticconsulting.svg"
        alt="Strategic Consulting"
        style={{
         
          maxWidth: '100%',       // keeps it responsive
          height: 'auto',
        }}
      />
    </div>
  );
}

export default first;
