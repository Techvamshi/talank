'use client';
import React, { useEffect, useState } from 'react';

const AboutPage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize(); // check on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: isMobile ? '20px 15px' : '40px 20px',
      fontFamily: 'Arial, sans-serif',
      color: '#333'
    }}>
      {/* Mission Section */}
      <section
        style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: 'center',
          gap: isMobile ? '30px' : '40px',
          marginBottom: isMobile ? '40px' : '60px'
        }}
      >
        {/* Left Side - Vision and Mission */}
        <div style={{ flex: 1, width: '100%' }}>
          {/* Our Vision */}
          <h2 style={{
            fontSize: isMobile ? '28px' : '35px',
            fontWeight: '700',
            color: '#2c3e50',
            marginBottom: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            textAlign: 'left'
          }}>
            <span style={{ fontSize: isMobile ? '32px' : '40px' }}>🔭</span> Our Vision
          </h2>
          <div style={{
            backgroundColor: '#EFF6FF',
            padding: isMobile ? '20px' : '30px',
            borderRadius: '10px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            textAlign: 'left',
            marginBottom: isMobile ? '30px' : '40px'
          }}>
            <p style={{ 
              fontSize: isMobile ? '16px' : '20px', 
              lineHeight: '1.6', 
              marginBottom: '15px' 
            }}>
              Empowering businesses to unlock their full potential and lead with excellence in a rapidly evolving world.
            </p>
            <p style={{ 
              fontSize: isMobile ? '16px' : '20px', 
              lineHeight: '1.6', 
              marginBottom: '15px' 
            }}>
              We envision a future where organizations thrive through strategic technology adoption, enhanced customer connections, and adaptive business models that meet tomorrow's challenges.
            </p>
            <p style={{ 
              fontSize: isMobile ? '16px' : '20px', 
              lineHeight: '1.6' 
            }}>
              Our vision is to be the trusted partner that enables transformation across industries, driving positive change through intelligence, empathy, and innovation.
            </p>
          </div>

          {/* Our Mission */}
          <h2 style={{
            fontSize: isMobile ? '28px' : '35px',
            fontWeight: '700',
            color: '#2c3e50',
            marginBottom: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            textAlign: 'left'
          }}>
            <span style={{ fontSize: isMobile ? '32px' : '40px' }}>✨</span> Our Mission
          </h2>
          <div style={{
            backgroundColor: '#EFF6FF',
            padding: isMobile ? '20px' : '30px',
            borderRadius: '10px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            textAlign: 'left'
          }}>
            <p style={{ 
              fontSize: isMobile ? '16px' : '20px', 
              lineHeight: '1.6', 
              marginBottom: '15px' 
            }}>
              Provide next-generation, integrated technology solutions that create memorable customer experiences and drive consistent business impact.
            </p>
            <p style={{ 
              fontSize: isMobile ? '16px' : '20px', 
              lineHeight: '1.6', 
              marginBottom: '10px' 
            }}>
              Empower clients by transforming operations through:
            </p>
            <ul style={{ 
              listStyleType: 'none', 
              paddingLeft: '20px',
              marginBottom: '15px'
            }}>
              {['Cutting-edge digital tools', 'Insightful data analytics', 'Scalable technology platforms'].map((item, index) => (
                <li key={index} style={{ 
                  marginBottom: '8px', 
                  display: 'flex', 
                  alignItems: 'center',
                  fontSize: isMobile ? '15px' : '16px'
                }}>
                  <span style={{
                    display: 'inline-block',
                    width: '8px',
                    height: '8px',
                    backgroundColor: '#4e74ff',
                    borderRadius: '50%',
                    marginRight: '10px'
                  }}></span>
                  {item}
                </li>
              ))}
            </ul>
            <p style={{ 
              fontSize: isMobile ? '16px' : '20px', 
              lineHeight: '1.6', 
              marginTop: '15px' 
            }}>
              Deliver excellence with agility and maintain high adaptability in a fast-changing market.
            </p>
          </div>
        </div>

        {/* Right Side - Image (only shown on desktop) */}
        {!isMobile && (
          <div style={{ 
            flex: 1, 
            textAlign: 'center', 
            marginTop: '-190px', 
            marginLeft: '100px' 
          }}>
            <img
              src="/About (1).png"
              alt="About"
              style={{ 
                maxWidth: '100%', 
                height: 'auto'
              }}
            />
          </div>
        )}
      </section>

      {/* Values Section */}
      <section style={{ marginBottom: isMobile ? '40px' : '60px' }}>
        <h2 style={{
          fontSize: isMobile ? '28px' : '32px',
          fontWeight: '700',
          color: '#2c3e50',
          marginBottom: '20px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          justifyContent: isMobile ? 'center' : 'flex-start'
        }}>
          <span style={{ fontSize: isMobile ? '32px' : '40px' }}>💡</span>
          {isMobile ? 'Our Values' : 'Company Values'}
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px'
        }}>
          {[
            { icon: '🚀', title: 'GTM Strategy', desc: 'Custom go-to-market strategies to win the right market' },
            { icon: '🤝', title: 'Partnerships', desc: 'Bridge the tech gap with strong collaborations.' },
            { icon: '💬', title: 'Engagement', desc: 'Build deeper, lasting customer relationships.' },
            { icon: '📈', title: 'Adaptability', desc: 'Enable agile and competitive business models.' }
          ].map((value, i) => (
            <div key={i} style={{
              backgroundColor: '#ffffff',
              padding: '20px',
              borderRadius: '10px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              borderTop: '4px solid #4e74ff'
            }}>
              <h3 style={{
                fontSize: isMobile ? '20px' : '22px',
                fontWeight: '600',
                marginBottom: '15px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                {value.icon} {value.title}
              </h3>
              <p style={{ 
                fontSize: isMobile ? '15px' : '16px', 
                lineHeight: '1.5', 
                color: '#555' 
              }}>
                {value.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        textAlign: 'center',
        padding: isMobile ? '30px 15px' : '40px 20px',
        backgroundColor: 'white',
        borderRadius: '10px',
        color: '#333',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        margin: isMobile ? '30px 0' : '20px 0'
      }}>
        <h2 style={{
          fontSize: isMobile ? '28px' : '32px',
          fontWeight: '700',
          marginBottom: '20px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '10px',
          color: '#4e74ff'
        }}>
          <span style={{ fontSize: isMobile ? '32px' : '40px' }}>🚀</span> 
          Ready to Transform?
        </h2>
        <p style={{
          fontSize: isMobile ? '16px' : '18px',
          lineHeight: '1.6',
          marginBottom: isMobile ? '20px' : '30px',
          maxWidth: '700px',
          marginLeft: 'auto',
          marginRight: 'auto',
          color: '#555'
        }}>
          Connect with us and discover how Talank Global can help drive innovation and growth in your business.
        </p>
        <button style={{
          backgroundColor: '#4e74ff',
          color: 'white',
          border: 'none',
          padding: isMobile ? '10px 25px' : '12px 30px',
          fontSize: isMobile ? '16px' : '18px',
          fontWeight: '600',
          borderRadius: '30px',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
        }}
          onMouseOver={(e) => {
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.backgroundColor = '#3a5bd9';
            e.target.style.boxShadow = '0 6px 15px rgba(0,0,0,0.3)';
          }}
          onMouseOut={(e) => {
            e.target.style.transform = 'translateY(0px)';
            e.target.style.backgroundColor = '#4e74ff';
            e.target.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)';
          }}
        >
          Get in Touch
        </button>
      </section>
    </div>
  );
};

export default AboutPage;