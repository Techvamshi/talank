'use client';
import React from 'react';

const FoundingTeamSection = () => {
  const teamMembers = [
    {
      name: 'Deepak Gowda',
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
      name: 'Ravi Kumar L',
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

      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card">
            <img src={member.photo} alt={member.name} className="team-photo" />
            <h3 className="team-name">{member.name}</h3>
            <p className="team-title">{member.title}</p>
            <p className="team-bio">{member.bio}</p>
            <h4 className="expertise-heading">Key Expertise</h4>
            <ul className="expertise-list">
              {member.expertise.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <style jsx>{`
        .team-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 25px;
          max-width: 1200px;
          margin: 0 auto;
        }
        .team-card {
          background-color: #fff;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          width: 100%;
          max-width: 400px;
          padding: 25px 20px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center; /* ✅ Centers all content horizontally */
        }
        .team-photo {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          object-fit: cover;
          margin-bottom: 15px;
          border: 4px solid rgba(26, 35, 126, 0.1);
        }
        .team-name {
          margin-bottom: 6px;
          color: #0d47a1;
          font-size: 20px;
        }
        .team-title {
          font-weight: bold;
          color: #555;
          margin-bottom: 12px;
          font-size: 14px;
        }
        .team-bio {
          line-height: 1.5;
          color: #333;
          margin-bottom: 15px;
          font-size: 14px;
          text-align: center;
        }
        .expertise-heading {
          font-size: 16px;
          color: #1a237e;
          margin-bottom: 8px;
        }
        .expertise-list {
          padding-left: 20px;
          color: #444;
          line-height: 1.6;
          font-size: 14px;
          text-align: left;
          margin: 0 auto;
          max-width: 300px;
        }
        .expertise-list li {
          list-style-type: disc;
          margin-bottom: 4px;
        }

        /* ✅ For screens wider than 1024px (Mac & Desktop) */
        @media (min-width: 1024px) {
          .team-container {
            flex-direction: row; /* side by side */
            justify-content: center;
            align-items: flex-start;
            gap: 40px;
          }
        }
      `}</style>
    </section>
  );
};

export default FoundingTeamSection;
