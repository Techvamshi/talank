'use client'
import React, { useState, useEffect } from "react";
import first from "./StrategicConsulting";
import Consulting from "./Consulting";

function ConsultingSolution() {
  const [activeComponent, setActiveComponent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const cards = [
    {
      id: 1,
      title: "Strategic Consulting",
      description: "Providing expert advice to improve strategy",
      logo: "/Consulting1.png",
      bgColor: "linear-gradient(135deg, #F3F4F6 0%, #E5E7EB 100%)",
      iconColor: "#4F46E5",
      component: "StrategicConsulting"
    },
    {
      id: 2,
      title: "Hi Tech Solutions",
      description: "Offering advanced technological solutions for businesses",
      logo: "/Consulting2.png",
      bgColor: "linear-gradient(135deg, #E6F0FF 0%, #C7D9FF 100%)",
      iconColor: "#2563EB",
      component: "HiTechSolutions"
    },
    {
      id: 3,
      title: "Learning & Development",
      description: "Enhancing skills and knowledge through training programs",
      logo: "/Consulting3.png",
      bgColor: "linear-gradient(135deg, #FFF5E6 0%, #FFEDD5 100%)",
      iconColor: "#EA580C",
      component: "LearningDevelopment"
    },
    {
      id: 4,
      title: "ideateX",
      description: "Transforming ideas into a winning business",
      logo: "/Consulting4.png",
      bgColor: "linear-gradient(135deg, #FDE2E4 0%, #FECACA 100%)",
      iconColor: "#DC2626",
      component: "IdeateX"
    },
  ];

  const handleCardClick = (card) => {
    setActiveComponent(card.component);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setActiveComponent(null);
  };

  const renderComponent = () => {
    switch(activeComponent) {
      case "StrategicConsulting":
        return <StrategicConsulting onClose={closeModal} />;
      case "HiTechSolutions":
        return <HiTechSolutions onClose={closeModal} />;
      case "LearningDevelopment":
        return <LearningDevelopment onClose={closeModal} />;
      case "IdeateX":
        return <IdeateX onClose={closeModal} />;
      default:
        return null;
    }
  };

  useEffect(() => {
    const styles = `
      .consulting-solutions-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 60px 20px;
        font-family: 'Inter', 'Segoe UI', sans-serif;
      }
      .consulting-solutions-header {
        text-align: center;
        margin-bottom: 50px;
      }
      .consulting-solutions-header h2 {
        font-size: 2.5rem;
        font-weight: 700;
        color: #111827;
        margin-bottom: 12px;
      }
      .consulting-solutions-header p {
        font-size: 1.1rem;
        color: #6B7280;
        max-width: 600px;
        margin: 0 auto;
      }
      .cards-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 30px;
        justify-content: center;
      }
      .solution-card {
        border-radius: 20px;
        padding: 30px;
        text-align: center;
        transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        box-shadow: 0 10px 20px rgba(0,0,0,0.08);
        position: relative;
        overflow: hidden;
        z-index: 1;
        cursor: pointer;
      }
      .solution-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(255,255,255,0.1);
        z-index: -1;
        opacity: 0;
        transition: opacity 0.3s ease;
      }
      .solution-card:hover {
        transform: translateY(-10px) scale(1.02);
        box-shadow: 0 15px 30px rgba(0,0,0,0.12);
      }
      .solution-card:hover::before {
        opacity: 1;
      }
      .card-icon-container {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 25px;
        transition: transform 0.3s ease;
      }
      .solution-card:hover .card-icon-container {
        transform: rotate(10deg) scale(1.1);
      }
      .card-icon {
        width: 40px;
        height: 40px;
        object-fit: contain;
      }
      .solution-card h3 {
        font-size: 1.4rem;
        font-weight: 600;
        color: #111827;
        margin-bottom: 15px;
      }
      .solution-card p {
        font-size: 0.95rem;
        color: #4B5563;
        line-height: 1.6;
        margin-bottom: 25px;
      }
      .learn-more-btn {
        background: transparent;
        border: none;
        font-weight: 600;
        font-size: 0.95rem;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 5px;
        margin: 0 auto;
        padding: 8px 0;
        position: relative;
      }
      .learn-more-btn::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 2px;
        background: currentColor;
        transition: width 0.3s ease;
      }
      .solution-card:hover .learn-more-btn::after {
        width: 100%;
      }
      
      /* Modal Styles */
      .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
      }
      .modal-container {
        background: white;
        border-radius: 20px;
        width: 80%;
        max-width: 800px;
        max-height: 80vh;
        overflow-y: auto;
        padding: 30px;
        position: relative;
      }
      .close-button {
        position: absolute;
        top: 15px;
        right: 15px;
        background: none;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        color: #6B7280;
      }
      
      @media (max-width: 768px) {
        .cards-container {
          grid-template-columns: 1fr;
          max-width: 400px;
          margin: 0 auto;
        }
        .consulting-solutions-header h2 {
          font-size: 2rem;
        }
        .modal-container {
          width: 90%;
          padding: 20px;
        }
      }
    `;
    const styleTag = document.createElement("style");
    styleTag.innerHTML = styles;
    document.head.appendChild(styleTag);

    return () => {
      document.head.removeChild(styleTag);
    };
  }, []);

  return (
    <>
    
    <div className="consulting-solutions-container" style={{
      marginTop:'-11%',
    }}> 
      <div className="consulting-solutions-header">
        <h2>Our Consulting Solutions</h2>
        <p>Expert services to transform your business</p>
      </div>

      <div className="cards-container">
        {cards.map((card) => (
          <div
            key={card.id}
            className="solution-card"
            style={{ background: card.bgColor }}
            onClick={() => handleCardClick(card)}
          >
            <div
              className="card-icon-container"
              style={{ backgroundColor: card.iconColor + "20" }}
            >
              <img
                src={card.logo}
                alt={card.title}
                className="card-icon"
                style={{
                  filter: `drop-shadow(0 2px 4px ${card.iconColor + "80"})`,
                  transform: 'scale(1.3)',
                }}
              />
            </div>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <button
              className="learn-more-btn"
              style={{ color: card.iconColor }}
              onClick={(e) => {
                e.stopPropagation();
                handleCardClick(card);
              }}
            >
              Learn more →
            </button>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>×</button>
            {renderComponent()}
          </div>
        </div>
      )}
    </div>
    </>
  );
}

// Component templates (these should be in separate files)
function StrategicConsulting({ onClose }) {
  return (
    <div style={{
        justifyContent:'center',
      }}>
      <p style={{
        justifyContent:'center',
        marginLeft:'35%',
        color:'black',
        fontSize:'22px',
        fontWeight:'bold',
        textDecoration:'underline',
      }}>Strategic Consulting</p>
      <img src="/staregticconsulting.svg" alt="" />
      <button onClick={onClose}>Close</button>
    </div>
  );
}

function HiTechSolutions({ onClose }) {
  return (
    <div>
      <p style={{
        justifyContent:'center',
        marginLeft:'37.5%',
        color:'black',
        fontSize:'22px',
        fontWeight:'bold',
        textDecoration:'underline',
      }}>Hi-Tech Solutions</p>
      <img src="/HiTech solution.png" alt="" />
      <button onClick={onClose}>Close</button>
    </div>
  );
}

function LearningDevelopment({ onClose }) {
  return (
    <div>
      <p style={{
        justifyContent:'center',
        marginLeft:'35.5%',
        color:'black',
        fontSize:'22px',
        fontWeight:'bold',
        textDecoration:'underline',
      }}>Learning & Development</p>
      <img src="/Learning and.png" alt="" />
      <button onClick={onClose}>Close</button>
    </div>
  );
}

function IdeateX({ onClose }) {
  return (
    <div>
      <p style={{
        justifyContent:'center',
        marginLeft:'35.5%',
        color:'black',
        fontSize:'22px',
        fontWeight:'bold',
        textDecoration:'underline',
      }}>ideateX</p>
      <img src="/ideateX.png" style={{
        transform:'scale(0.8)',
        marginTop:'-8%',
        marginBottom:'-13%',
      }} alt="" />
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default ConsultingSolution;