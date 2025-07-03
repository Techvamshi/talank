'use client';

import React from 'react';

function Footer() {
  return (
    <div style={{
      position: 'relative',
      backgroundColor: '#ADC1FF',
      paddingTop: '120px',
      marginTop: '100px',
      fontFamily: 'Arial, sans-serif',
      color: '#1a1a1a',
    }}>
      
      {/* Embedded Map - floating on top */}
      <div style={{
        position: 'absolute',
        top: '-100px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '90%',
        maxWidth: '1000px',
        height: '220px',
        borderRadius: '20px',
        overflow: 'hidden',
        boxShadow: '0 12px 30px rgba(0, 0, 0, 0.25)',
        border: '4px solid white',
        zIndex: 10,
      }}>
        <iframe
          title="TalankGlobal Office Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.347548152326!2d77.54168007476241!3d13.013525987305743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d742edfba93%3A0xac581489842927cf!2sShree%20Software%20Consultants!5e0!3m2!1sen!2sin!4v1751473379489!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        />
      </div>

      {/* Footer Content */}
      <div style={{
        paddingTop: '150px',
        paddingBottom: '60px',
        textAlign: 'center',
      }}>
        <h2 style={{ fontSize: '30px', fontWeight: 'bold', marginBottom: '10px',marginTop:'-100px', }}>
          TalankGlobal™
        </h2>
        <p style={{
          fontSize: '16px',
          color: '#333',
          maxWidth: '650px',
          margin: '0 auto 40px'
        }}>
          Empowering businesses to unlock their full potential and lead with excellence in a rapidly evolving market.
        </p>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '60px',
          flexWrap: 'wrap',
          marginBottom: '50px'
        }}>
          {/* Quick Links */}
          <div style={{ minWidth: '180px', textAlign: 'left' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px' }}>Quick Links</h3>
            {['Home', 'About', 'Services', 'Solutions', 'Team', 'Contact'].map((link, i) => (
              <p key={i} style={{ margin: '6px 0' }}>
                <a href="#" style={{ color: '#444', textDecoration: 'none' }}>{link}</a>
              </p>
            ))}
          </div>

          {/* Services */}
          <div style={{ minWidth: '180px', textAlign: 'left' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px' }}>Our Services</h3>
            {['Strategic Consulting', 'Hi Tech Solutions', 'Learning & Development', 'ideate X'].map((service, i) => (
              <p key={i} style={{ margin: '6px 0' }}>
                <a href="#" style={{ color: '#444', textDecoration: 'none' }}>{service}</a>
              </p>
            ))}
          </div>

          {/* Newsletter */}
          <div style={{ minWidth: '280px', textAlign: 'left' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px' }}>Newsletter</h3>
            <p style={{ color: '#444', fontSize: '14px', marginBottom: '10px' }}>
              Enter your email to get updates and news.
            </p>
            <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', marginTop: '10px' }}>
              <input
                type="email"
                placeholder="Your email"
                required
                style={{
                  padding: '10px',
                  border: 'none',
                  borderRadius: '6px 0 0 6px',
                  width: '60%',
                  outline: 'none',
                  fontSize: '14px',
                }}
              />
              <button type="submit" style={{
                padding: '10px 16px',
                backgroundColor: '#1A2F78',
                color: 'white',
                border: 'none',
                borderRadius: '0 6px 6px 0',
                cursor: 'pointer',
                fontWeight: '500',
              }}>
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Social Icons */}
        <div style={{ marginBottom: '30px', display: 'flex', justifyContent: 'center', gap: '5px', flexWrap: 'wrap' }}>
          {/* Facebook */}
          <a href="https://www.facebook.com/hibengaluruinfo" target="_blank" rel="noopener noreferrer">
            <img src="/facebook.png" alt="Facebook" style={{ width: '65px', height: '48px' }} />
          </a>

          {/* Linkedin */}
          <a href="https://www.linkedin.com/in/hi-bengaluru-09a34393/" target="_blank" rel="noopener noreferrer">
            <img src="/linkedin.png" alt="Linkedin" style={{ width: '60px', height: '65px',marginTop:'-7px', }} />
          </a>

          {/* WhatsApp */}
          <a href="https://wa.me/919343371670" target="_blank" rel="noopener noreferrer">
            <img src="/whatsapp.png" alt="WhatsApp" style={{ width: '80px', height: '60px',marginTop:'-5px', }} />
          </a>

          {/* Gmail */}
          <a href="mailto:ravikumar@shreesoft.com">
            <img src="/gmail.png" alt="Gmail" style={{ width: '65px', height: '72px',marginTop:'-8px', }} />
          </a>
        </div>

        <p style={{ fontSize: '14px', color: '#555' }}>
          © {new Date().getFullYear()} TalankGlobal™. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
