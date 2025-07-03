'use client';
import React, { useState } from 'react';

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field) => (e) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    setFormData({
      name: '',
      mobile: '',
      email: '',
      description: ''
    });
  };

  return (
    <div style={{ width: '100%', backgroundColor: 'white', display: 'flex', justifyContent: 'center' }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          width: '90%',
          maxWidth: '1200px',
          gap: '2rem'
        }}
      >
        {/* Left Section */}
        <div style={{ flex: '1', padding: '1.5rem' }}>
          <h1 style={{
            fontSize: '32px',
            fontWeight: 'bold',
            color: '#6b0000',
            marginBottom: '1rem'
          }}>Ready to Get Started?</h1>
          <h2 style={{
            fontSize: '22px',
            fontWeight: '600',
            color: '#000',
            marginBottom: '1.5rem'
          }}>Drop Us a Line</h2>
          <div style={{ marginBottom: '2rem' }}>
            <p style={{ fontSize: '16px', color: 'rgba(0,0,0,0.8)', lineHeight: '1.5' }}>
              Have questions or ready to get started? Our team is here to help.
              Contact us today to discuss your IT needs, request a consultation,
              or inquire about our services.
            </p>
          </div>

          {/* Address */}
          <div style={{ marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{
                padding: '6px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg,#00cecb 0%,#005b5a 100%)',
                width: '36px',
                height: '36px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}>📍</div>
              <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#000', marginLeft: '1rem' }}>
                Address
              </h3>
            </div>
            <p style={{ marginLeft: '3rem', fontSize: '15px', color: 'rgba(0,0,0,0.67)', lineHeight: '1.5' }}>
              #10, 3rd Main Road, SK Nagar, Nandini Layout (PO), Bengaluru - 560096 | Karnataka | INDIA
            </p>
          </div>

          {/* Call */}
          <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center' }}>
            <div style={{
              padding: '8px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg,#ffc145 0%,#b3872e 100%)'
            }}>📞</div>
            <div style={{ marginLeft: '1rem' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#000' }}>Call</h3>
              <p style={{ fontSize: '15px', color: 'rgba(0,0,0,0.67)' }}>
                +91 9741523915 | +91 9343371670
              </p>
            </div>
          </div>

          {/* Email */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{
              padding: '8px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg,#a05eb5 0%,#5e3b6a 100%)'
            }}>✉️</div>
            <div style={{ marginLeft: '1rem' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#000' }}>Email</h3>
              <p style={{ fontSize: '15px', color: 'rgba(0,0,0,0.67)' }}>
                talankadmin@talankglobal.com
              </p>
            </div>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div style={{ flex: '1', padding: '1.5rem' }}>
          <div style={{
            width: '100%',
            background: '#f9f9f9',
            border: '1px solid #ddd',
            borderRadius: '1rem',
            padding: '2rem',
            boxShadow: '0px 6px 18px rgba(0,0,0,0.1)'
          }}>
            <h2 style={{
              fontSize: '22px',
              fontWeight: '600',
              color: '#000',
              textAlign: 'center',
              marginBottom: '2rem'
            }}>Contact Us</h2>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {/* Name */}
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label style={{ fontSize: '14px', fontWeight: '500',color:'black', }}>Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange('name')}
                  required
                  style={{
                    padding: '10px',
                    borderRadius: '6px',
                    border: '1px solid #ccc',
                    fontSize: '14px',
                    color:'black',
                  }}
                />
              </div>

              {/* Mobile */}
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label style={{ fontSize: '14px', fontWeight: '500',color:'black',  }}>Mobile Number</label>
                <input
                  type="tel"
                  value={formData.mobile}
                  onChange={handleInputChange('mobile')}
                  required
                  style={{
                    padding: '10px',
                    borderRadius: '6px',
                    border: '1px solid #ccc',
                    fontSize: '14px',
                    color:'black',
                  }}
                />
              </div>

              {/* Email */}
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label style={{ fontSize: '14px', fontWeight: '500',color:'black',  }}>Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange('email')}
                  required
                  style={{
                    padding: '10px',
                    borderRadius: '6px',
                    border: '1px solid #ccc',
                    fontSize: '14px',
                    color:'black',
                  }}
                />
              </div>

              {/* Description */}
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label style={{ fontSize: '14px', fontWeight: '500',color:'black',  }}>Requirement</label>
                <textarea
                  value={formData.description}
                  onChange={handleInputChange('description')}
                  rows={3}
                  placeholder="Please describe your requirements..."
                  style={{
                    padding: '10px',
                    borderRadius: '6px',
                    border: '1px solid #ccc',
                    fontSize: '14px',
                    resize: 'vertical',
                    color:'black',
                  }}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  marginTop: '1.5rem',
                  padding: '6px',
                  background: 'linear-gradient(135deg,#adc1ff 0%,#0026ff 100%)',
                  color: '#fff',
                  fontSize: '18px',
                  fontWeight: '600',
                  borderRadius: '6px',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  transition: 'all 0.2s ease',
                  color:'black',
                }}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Now'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
