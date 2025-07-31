import React from 'react';
import { useMediaQuery } from '@mui/material';

function Consulting() {
  const isMobile = useMediaQuery('(max-width:768px)');

  // Original desktop version (EXACTLY as in your original code)
  if (!isMobile) {
    return (
      <div style={{ marginTop: '-8%' }}>
        <div style={{ padding: '20px', textAlign: 'center', color: 'black' }}>
          <h2 style={{ fontSize: '44px', fontWeight: 'bold', marginBottom: '5px' }}>
            How do we do?
          </h2>
          <h3 style={{ fontSize: '20px', color: '#555', marginBottom: '5px' }}>
            Our Modus Operandi
          </h3>
          <h4 style={{ fontSize: '18px', color: '#888' }}>
            [4-DOT] Framework
          </h4>
        </div>
        <img 
          src="/Screenshot 2025-07-28 at 1.25.44 PM.png" 
          alt="4-DOT Framework" 
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
    );
  }

  // Mobile version (EXACTLY extracted from Mandi component)
  return (
    <div style={{
      display: 'flex',
      alignItems: 'flex-start',
      overflowX: 'auto',
      padding: '20px 0',
      marginTop: '-4%'
    }}>
      {/* [D]ISCOVER */}
      <div style={{ position: 'relative', width: '250px', margin: '0 10px', flexShrink: 0 }}>
        <img 
          src="/Frame 46.png" 
          alt="Discover" 
          style={{ width: '100%', height: 'auto', borderRadius: '8px', opacity: '0.9' }} 
        />
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '10%',
          color: 'white',
          textShadow: '1px 1px 3px rgba(0,0,0,0.8)',
          maxWidth: '80%',
        }}>
          <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 'bold', textAlign: 'center' }}>
            [D]ISCOVER
          </h3>
          <p style={{ marginTop: '20px', fontSize: '13px', textAlign: 'center', color: 'white' }}>
            Discuss current state, identify the core problem(s), opportunities, G-T-Ms, Inclination, Culture and Design Specific objectives(O&KR) framework
          </p>
        </div>
      </div>

      {/* [D]EVELOP */}
      <div style={{ position: 'relative', width: '250px', margin: '0 10px', flexShrink: 0 }}>
        <img 
          src="/Frame 46 (1).png" 
          alt="Develop" 
          style={{ width: '100%', height: 'auto', borderRadius: '8px', opacity: '0.9' }} 
        />
        <div style={{
          position: 'absolute',
          top: '15%',
          left: '10%',
          color: 'white',
          textShadow: '1px 1px 3px rgba(0,0,0,0.8)'
        }}>
          <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 'bold', textAlign: 'center' }}>
            [D]EVELOP
          </h3>
          <p style={{ marginTop: '20px', fontSize: '13px', textAlign: 'center', color: 'white' }}>
            Configure the actual solution, Develop COE Plan, Next Gen Technology adaptation plan, Create Tech Stack, GTM plans, program plans
          </p>
        </div>
      </div>

      {/* [D]IGITIZE */}
      <div style={{ position: 'relative', width: '250px', margin: '0 10px', flexShrink: 0 }}>
        <img 
          src="/Frame 46 (2).png" 
          alt="Digitize" 
          style={{ width: '100%', height: 'auto', borderRadius: '8px', opacity: '0.9' }} 
        />
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          color: 'white',
          textShadow: '1px 1px 3px rgba(0,0,0,0.8)'
        }}>
          <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 'bold', textAlign: 'center' }}>
            [D]IGITIZE
          </h3>
          <p style={{ marginTop: '20px', fontSize: '13px', textAlign: 'center', color: 'white' }}>
            Design, Digitize, analyze data, Plan Re-engineer process, conceptualize and blueprint the future state solution
          </p>
        </div>
      </div>

      {/* [O]WN */}
      <div style={{ position: 'relative', width: '250px', margin: '0 10px', flexShrink: 0 }}>
        <img 
          src="/Frame 46 (4).png" 
          alt="Own" 
          style={{ width: '100%', height: 'auto', borderRadius: '8px', opacity: '0.9' }} 
        />
        <div style={{
          position: 'absolute',
          top: '30%',
          left: '10%',
          color: 'white',
          textShadow: '1px 1px 3px rgba(0,0,0,0.8)'
        }}>
          <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 'bold', textAlign: 'center' }}>
            [O]WN
          </h3>
          <p style={{ marginTop: '20px', fontSize: '13px', textAlign: 'center', color: 'white' }}>
            Own the business, Monitor & Measure the performance, efficiencies & Report KPIs Revenue, Growth and Cost
          </p>
        </div>
      </div>

      {/* [T]RANSFER */}
      <div style={{ position: 'relative', width: '250px', margin: '0 10px', flexShrink: 0 }}>
        <img 
          src="/Frame 46 (5).png" 
          alt="Transfer" 
          style={{ width: '100%', height: 'auto', borderRadius: '8px', opacity: '0.9' }} 
        />
        <div style={{
          position: 'absolute',
          top: '35%',
          left: '10%',
          color: 'white',
          textShadow: '1px 1px 3px rgba(0,0,0,0.8)'
        }}>
          <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 'bold', textAlign: 'center' }}>
            [T]RANSFER
          </h3>
          <p style={{ marginTop: '20px', fontSize: '13px', textAlign: 'center', color: 'white' }}>
            Start Transitioning the business and take feedback
          </p>
        </div>
      </div>

      {/* [D]EPLOY */}
      <div style={{ position: 'relative', width: '250px', margin: '0 10px', flexShrink: 0 }}>
        <img 
          src="/Frame 46 (3).png" 
          alt="Deploy" 
          style={{ width: '100%', height: 'auto', borderRadius: '8px', opacity: '0.9' }} 
        />
        <div style={{
          position: 'absolute',
          top: '25%',
          left: '10%',
          color: 'white',
          textShadow: '1px 1px 3px rgba(0,0,0,0.8)'
        }}>
          <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 'bold', textAlign: 'center' }}>
            [D]EPLOY
          </h3>
          <p style={{ marginTop: '20px', fontSize: '13px', textAlign: 'center', color: 'white' }}>
            Sign off and roll out the developed solution to the target users or organization, ensure adoption, and transition to ongoing operations and implement strategies
          </p>
        </div>
      </div>
    </div>
  );
}

export default Consulting;