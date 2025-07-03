import React from 'react';

function Modulus() {
  // Array of image data including src and text
  const images = [
    { src: "/Frame 46.png", text: "Text 1" },
    { src: "/Frame 46 (1).png", text: "Text 2" },
    { src: "/Frame 46 (2).png", text: "Text 3" },
    { src: "/Frame 46 (3).png", text: "Text 4" },
    { src: "/Frame 46 (4).png", text: "Text 5" },
    { src: "/Frame 46 (5).png", text: "Text 6" }
  ];

  return (
    <>
      <div style={{
        textAlign: 'center',
        position: 'relative' // Added to make absolute positioning work
      }}>
        <p style={{
          color: 'black',
          fontSize: '33px',
          textAlign: 'center',
        }}>How Does Talank as consultancy helps customer to overcome business challenges?</p>

        {/* Scre1 image positioned absolutely on top */}
        <img src="/scre1.png" alt="" style={{
          position: 'absolute',
          width: '75px',
          height: '85px',
          top: '285px', // Adjust this value to position vertically
          left: '178px', // Adjust this value to position horizontally
          zIndex: 10 // Ensure it appears above other elements
        }} />
        <img src="/scre2.png" alt="" style={{
          position: 'absolute',
          width: '75px',
          height: '85px',
          top: '285px', // Adjust this value to position vertically
          left: '392px', // Adjust this value to position horizontally
          zIndex: 10 // Ensure it appears above other elements
        }} />
        <img src="/scre3.png" alt="" style={{
          position: 'absolute',
          width: '75px',
          height: '85px',
          top: '285px', // Adjust this value to position vertically
          left: '578px', // Adjust this value to position horizontally
          zIndex: 10 // Ensure it appears above other elements
        }} />
        <img src="/scre4.png" alt="" style={{
          position: 'absolute',
          width: '75px',
          height: '85px',
          top: '285px', // Adjust this value to position vertically
          left: '778px', // Adjust this value to position horizontally
          zIndex: 10 // Ensure it appears above other elements
        }} />
        <img src="/scre5.png" alt="" style={{
          position: 'absolute',
          width: '75px',
          height: '85px',
          top: '285px', // Adjust this value to position vertically
          left: '978px', // Adjust this value to position horizontally
          zIndex: 10 // Ensure it appears above other elements
        }} />
        <img src="/scre6.png" alt="" style={{
          position: 'absolute',
          width: '75px',
          height: '85px',
          top: '285px', // Adjust this value to position vertically
          left: '1187px', // Adjust this value to position horizontally
          zIndex: 10 // Ensure it appears above other elements
        }} />

        <div style={{ position: 'relative', display: 'inline-block', marginTop: '-70px' }}>
          <img src="/Rectangle 58.png" alt="" style={{ display: 'block', width: '100%' }} />
          <p
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              color: '#8F0000',
              fontWeight: 'bold',
              fontSize: '18px',
              textAlign: 'center'
            }}
          >
            Modus Operandi [4DOT] Framework
          </p>
        </div>
      </div>

      <div style={{
        marginLeft: '80px',
      }}>
        <div style={{
          display: 'flex',
          width: '100%',
          flexWrap: 'wrap',
          padding: '10px 0',
          marginLeft: '65px',
        }}>
          <div style={{ width: '28%', textAlign: 'center', transform: 'translateY(0px)' }}>
            <img src="/Group 940.png" alt="" style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
          </div>
          <div style={{ width: '28%', textAlign: 'center', transform: 'translateY(10px)', transform: 'translateX(-187px)' }}>
            <img src="/Group 942.png" alt="" style={{ width: '550px', height: 'auto', objectFit: 'contain' }} />
          </div>
          <div style={{ width: '28%', textAlign: 'center', transform: 'translateY(-5px)', transform: 'translateX(-365px)' }}>
            <img src="/Group 943.png" alt="" style={{ width: '100%', height: 'auto', objectFit: 'contain', transform: 'translateX(-10px)' }} />
          </div>
        </div>
        <div style={{ width: '28%', textAlign: 'center', transform: 'translateY(-10px)', transform: 'translateX(-10px)', marginTop: '-163px', marginLeft: '661px' }}>
          <img src="/Group 944.png" alt="" style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
        </div>
        <div style={{ width: '28%', textAlign: 'center', transform: 'translateY(0px)', marginTop: '-140px', marginLeft: '840px' }}>
          <img src="/Group 945.png" alt="" style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
        </div>
      </div>
    </>
  );
}

export default Modulus;