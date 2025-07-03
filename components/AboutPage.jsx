'use client';
import React from 'react';

const AboutPage = () => {
  return (
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '40px 20px',
      fontFamily: 'Arial, sans-serif',
      color: '#333'
    }}>
      {/* Mission Section */}
      <section style={{ display: 'flex', alignItems: 'center', gap: '40px', marginBottom: '60px' }}>
  {/* Left Side - Vision and Mission */}
  <div style={{ flex: 1 }}>
    <h2 style={{
      fontSize: '35px',
      fontWeight: '700',
      color: '#2c3e50',
      marginBottom: '20px',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      textAlign: 'left'
    }}>
      <span style={{ fontSize: '40px' }}>🔭</span> Our Vision
    </h2>
    <div style={{
      backgroundColor: '#EFF6FF',
      padding: '30px',
      borderRadius: '10px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      textAlign: 'left',
      marginBottom: '40px'
    }}>
      <p style={{ fontSize: '20px', lineHeight: '1.6', marginBottom: '20px' }}>
        Empowering businesses to unlock their full potential and lead with excellence in a rapidly evolving world.
      </p>
      <p style={{ fontSize: '20px', lineHeight: '1.6', marginBottom: '20px' }}>
        We envision a future where organizations thrive through strategic technology adoption, enhanced customer connections, and adaptive business models that meet tomorrow's challenges.
      </p>
      <p style={{ fontSize: '20px', lineHeight: '1.6' }}>
        Our vision is to be the trusted partner that enables transformation across industries, driving positive change through intelligence, empathy, and innovation.
      </p>
    </div>

    <h2 style={{
      fontSize: '35px',
      fontWeight: '700',
      color: '#2c3e50',
      marginBottom: '20px',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      textAlign: 'left'
    }}>
      <span style={{ fontSize: '40px' }}>✨</span> Our Mission
    </h2>
    <div style={{
      backgroundColor: '#EFF6FF',
      padding: '30px',
      borderRadius: '10px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      textAlign: 'left'
    }}>
      <p style={{ fontSize: '20px', lineHeight: '1.6', marginBottom: '20px' }}>
        Provide next-generation, integrated technology solutions that create memorable customer experiences and drive consistent business impact.
      </p>
      <p style={{ fontSize: '20px', lineHeight: '1.6', marginBottom: '10px' }}>
        Empower clients by transforming operations through:
      </p>
      <ul style={{ listStyleType: 'none', paddingLeft: '20px' }}>
        <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'center' }}>
          <span style={{
            display: 'inline-block',
            width: '8px',
            height: '8px',
            backgroundColor: '#4e74ff',
            borderRadius: '50%',
            marginRight: '10px'
          }}></span>
          Cutting-edge digital tools
        </li>
        <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'center' }}>
          <span style={{
            display: 'inline-block',
            width: '8px',
            height: '8px',
            backgroundColor: '#4e74ff',
            borderRadius: '50%',
            marginRight: '10px'
          }}></span>
          Insightful data analytics
        </li>
        <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'center' }}>
          <span style={{
            display: 'inline-block',
            width: '8px',
            height: '8px',
            backgroundColor: '#4e74ff',
            borderRadius: '50%',
            marginRight: '10px'
          }}></span>
          Scalable technology platforms
        </li>
      </ul>
      <p style={{ fontSize: '20px', lineHeight: '1.6', marginTop: '20px' }}>
        Deliver excellence with agility and maintain high adaptability in a fast-changing market.
      </p>
    </div>
  </div>

  {/* Right Side - Image */}
  <div style={{ flex: 1, textAlign: 'center' }}>
    <img
      src="/About (1).png"
      alt="About"
      style={{ maxWidth: '100%', height: 'auto',marginTop:'-190px',marginLeft:'100px', }}
    />
  </div>
</section>



      {/* Values Section */}
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{
          fontSize: '32px',
          fontWeight: '700',
          color: '#2c3e50',
          marginBottom: '20px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}>
          <span style={{ fontSize: '40px' }}>💡</span>Company Values
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px'
        }}>
          {/* GTM Strategy */}
          <div style={{
            backgroundColor: '#ffffff',
            padding: '25px',
            borderRadius: '10px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            borderTop: '4px solid #4e74ff'
          }}>
            <h3 style={{
              fontSize: '22px',
              fontWeight: '600',
              marginBottom: '15px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              🚀 GTM Strategy
            </h3>
            <p style={{ fontSize: '16px', lineHeight: '1.5', color: '#555' }}>
              Custom go-to-market strategies to win the right market
            </p>
          </div>

          {/* Partnerships */}
          <div style={{
            backgroundColor: '#ffffff',
            padding: '25px',
            borderRadius: '10px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            borderTop: '4px solid #4e74ff'
          }}>
            <h3 style={{
              fontSize: '22px',
              fontWeight: '600',
              marginBottom: '15px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              🤝 Partnerships
            </h3>
            <p style={{ fontSize: '16px', lineHeight: '1.5', color: '#555' }}>
              Bridge the tech gap with strong collaborations.
            </p>
          </div>

          {/* Engagement */}
          <div style={{
            backgroundColor: '#ffffff',
            padding: '25px',
            borderRadius: '10px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            borderTop: '4px solid #4e74ff'
          }}>
            <h3 style={{
              fontSize: '22px',
              fontWeight: '600',
              marginBottom: '15px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              💬 Engagement
            </h3>
            <p style={{ fontSize: '16px', lineHeight: '1.5', color: '#555' }}>
              Build deeper, lasting customer relationships.
            </p>
          </div>

          {/* Adaptability */}
          <div style={{
            backgroundColor: '#ffffff',
            padding: '25px',
            borderRadius: '10px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            borderTop: '4px solid #4e74ff'
          }}>
            <h3 style={{
              fontSize: '22px',
              fontWeight: '600',
              marginBottom: '15px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              📈 Adaptability
            </h3>
            <p style={{ fontSize: '16px', lineHeight: '1.5', color: '#555' }}>
              Enable agile and competitive business models.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
  textAlign: 'center',
  padding: '40px 20px',
  backgroundColor: 'white', // Changed to white background
  borderRadius: '10px',
  color: '#333', // Changed text color to dark for better contrast on white
  boxShadow: '0 4px 6px rgba(0,0,0,0.1)', // Added subtle shadow for depth
  margin: '20px 0' // Added some margin
}}>
  <h2 style={{
    fontSize: '32px',
    fontWeight: '700',
    marginBottom: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    color: '#4e74ff' // Added color to match the button
  }}>
    <span style={{ fontSize: '40px' }}>🚀</span> Ready to Transform?
  </h2>
  <p style={{
    fontSize: '18px',
    lineHeight: '1.6',
    marginBottom: '30px',
    maxWidth: '700px',
    marginLeft: 'auto',
    marginRight: 'auto',
    color: '#555' // Slightly lighter than heading
  }}>
    Connect with us and discover how Talank Global can help drive innovation and growth in your business.
  </p>
  <button style={{
    backgroundColor: '#4e74ff', // Changed to blue
    color: 'white', // Changed text to white
    border: 'none',
    padding: '12px 30px',
    fontSize: '18px',
    fontWeight: '600',
    borderRadius: '30px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
    ':hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 6px 15px rgba(0,0,0,0.3)',
      backgroundColor: '#3a5bd9' // Darker blue on hover
    }
  }}>
    Get in Touch
  </button>
</section>
    </div>
  );
};

export default AboutPage;