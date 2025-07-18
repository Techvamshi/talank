'use client';
import React from 'react';

const FoundingTeamSection = () => {
  const teamMembers = [
    {
      name: 'Ravi Kumar L',
      title: 'Director, Hi Tech Solution',
      bio: 'Ravi brings over 25 years of extensive experience in Technology Solutioning and consulting services within the Life Sciences and Health Care domain.',
      expertise: [
        'Management Consulting',
        'Operations Leadership and P&L',
        'Hi Tech Solutions Development',
        'Go-To-Market (GTM) Strategies',
      ],
      photo: '/ravikumar.png',
    },
    {
      name: 'Deepak Gowda',
      title: 'Co-founder, Hi Tech Solution',
      bio: 'Deepak brings over 30 years of extensive experience in Contract Research Organizations (CRO) and Business Process Outsourcing (BPO) within the Life Sciences and Health Care domain.',
      expertise: [
        'HiTech Solution Development',
        'AI/ML Solutions',
        'Business Transformation',
        'IaaS, PaaS & SaaS Systems',
      ],
      photo: '/deepak.png',
    },
  ];

  return (
    <section
      style={{
        padding: '40px 15px',
        backgroundColor: '#f4f8ff',
        fontFamily: 'Segoe UI, sans-serif',
        
      }}
    >
      <h2
        style={{
          textAlign: 'center',
          fontSize: '28px',
          marginBottom: '30px',
          color: '#1a237e',
        }}
      >
        Founding Team
      </h2>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '25px',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {teamMembers.map((member, index) => (
          <div
            key={index}
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '12px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
              width: '100%',
              maxWidth: '400px',
              padding: '25px 20px',
              transition: 'transform 0.3s ease',
              textAlign: 'center',
            }}
          >
            {/* ─── Profile Photo ─────────────────────── */}
            <img
              src={member.photo}
              alt={member.name}
              style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                objectFit: 'cover',
                marginBottom: '15px',
                border: '4px solid rgba(26, 35, 126, 0.1)',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            />

            {/* ─── Name & Title ───────────────────────── */}
            <h3 style={{ 
                marginBottom: '6px', 
                color: '#0d47a1',
                fontSize: '20px'
              }}>
              {member.name}
            </h3>
            <p style={{ 
                fontWeight: 'bold', 
                color: '#555', 
                marginBottom: '12px',
                fontSize: '14px'
              }}>
              {member.title}
            </p>

            {/* ─── Bio ────────────────────────────────── */}
            <p style={{ 
                lineHeight: '1.5', 
                color: '#333', 
                marginBottom: '15px',
                fontSize: '14px'
              }}>
              {member.bio}
            </p>

            {/* ─── Expertise List ─────────────────────── */}
            <h4
              style={{
                fontSize: '16px',
                color: '#1a237e',
                marginBottom: '8px',
              }}
            >
              Key Expertise
            </h4>
            <ul
              style={{
                paddingLeft: '20px',
                color: '#444',
                lineHeight: '1.6',
                fontSize: '14px',
                textAlign: 'left',
                margin: '0 auto',
                maxWidth: '300px'
              }}
            >
              {member.expertise.map((item, idx) => (
                <li key={idx} style={{ listStyleType: 'disc', marginBottom: '4px' }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FoundingTeamSection;