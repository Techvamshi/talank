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
      photo: '/ravikumar.png', // ❗️ Update path as per your assets
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
      photo: '/deepak.png', // ❗️ Update path as per your assets
    },
  ];

  return (
    <section
      style={{
        padding: '60px 20px',
        backgroundColor: '#f4f8ff',
        fontFamily: 'Segoe UI, sans-serif',
      }}
    >
      <h2
        style={{
          textAlign: 'center',
          fontSize: '36px',
          marginBottom: '40px',
          color: '#1a237e',
        }}
      >
        Founding Team
      </h2>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '30px',
        }}
      >
        {teamMembers.map((member, index) => (
          <div
            key={index}
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '12px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
              maxWidth: '400px',
              padding: '30px',
              transition: 'transform 0.3s ease',
              flex: '1 1 300px',
              textAlign: 'center',
            }}
          >
            {/* ─── Profile Photo ─────────────────────── */}
            <img
              src={member.photo}
              alt={member.name}
              style={{
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                objectFit: 'cover',
                marginBottom: '20px',
                border: '4px solid rgba(26, 35, 126, 0.1)',
                marginLeft:'100px',
              }}
            />

            {/* ─── Name & Title ───────────────────────── */}
            <h3 style={{ marginBottom: '8px', color: '#0d47a1' }}>
              {member.name}
            </h3>
            <p style={{ fontWeight: 'bold', color: '#555', marginBottom: '15px' }}>
              {member.title}
            </p>

            {/* ─── Bio ────────────────────────────────── */}
            <p style={{ lineHeight: '1.6', color: '#333', marginBottom: '20px' }}>
              {member.bio}
            </p>

            {/* ─── Expertise List ─────────────────────── */}
            <h4
              style={{
                fontSize: '18px',
                color: '#1a237e',
                marginBottom: '10px',
              }}
            >
              Key Expertise
            </h4>
            <ul
              style={{
                paddingLeft: '20px',
                color: '#444',
                lineHeight: '1.8',
                fontSize: '15.5px',
                textAlign: 'left',
              }}
            >
              {member.expertise.map((item, idx) => (
                <li key={idx} style={{ listStyleType: 'disc' }}>
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
