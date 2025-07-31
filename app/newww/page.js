'use client'
import React from 'react';
import styled, { keyframes } from 'styled-components';

// Animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const gradientFlow = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const floatAnimation = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
  100% { transform: translateY(0px); }
`;

const pulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(100, 255, 255, 0.4); }
  70% { box-shadow: 0 0 0 15px rgba(100, 255, 255, 0); }
  100% { box-shadow: 0 0 0 0 rgba(100, 255, 255, 0); }
`;

// Styled Components
const Container = styled.div`
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
`;

const HeroSection = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  animation: ${fadeIn} 0.8s ease-out;
`;

const MainTitle = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;
  background: linear-gradient(90deg, #00dbde, #fc00ff, #00dbde);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${gradientFlow} 6s linear infinite;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #a1a1aa;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const Card = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border-radius: 20px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
  animation: ${fadeIn} 0.8s ease-out;
  animation-fill-mode: both;
  animation-delay: ${props => props.delay * 0.1}s;

  &:hover {
    transform: translateY(-10px);
    border-color: ${props => props.color};
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
    animation: ${floatAnimation} 3s ease infinite;
    
    &::before {
      opacity: 1;
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      45deg,
      transparent 0%,
      ${props => props.color}20 50%,
      transparent 100%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const CardBadge = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${props => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  font-weight: 700;
  color: white;
  margin-right: 1rem;
  animation: ${pulse} 2s infinite;
`;

const CardTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  color: white;
  margin: 0;
`;

const CardBody = styled.p`
  color: #a1a1aa;
  line-height: 1.7;
  font-size: 1rem;
  margin-bottom: 1.5rem;
`;

const CardButton = styled.button`
  background: transparent;
  color: ${props => props.color};
  border: 1px solid ${props => props.color};
  padding: 0.5rem 1.25rem;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  
  &:hover {
    background: ${props => props.color};
    color: #111;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px ${props => `${props.color}80`};
  }
`;

const PillContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`;

const Pill = styled.div`
  background: linear-gradient(90deg, #00dbde, #fc00ff);
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  box-shadow: 0 4px 15px rgba(0, 219, 222, 0.3);
`;

const Page = () => {
  const cardsData = [
    {
      letter: "D",
      title: "Discover",
      content: 'Discuss current state, identify core problems, opportunities, and design specific objectives framework.',
      color: '#00dbde',
      action: 'Begin Discovery',
      delay: 0
    },
    {
      letter: "D",
      title: "Develop",
      content: 'Configure solutions, develop COE plans, next-gen technology adaptation plans, and create tech stacks.',
      color: '#fc00ff',
      action: 'Start Developing',
      delay: 1
    },
    {
      letter: "D",
      title: "Digitize",
      content: 'Design, digitize, analyze data, re-engineer processes, and blueprint future state solutions.',
      color: '#00ff87',
      action: 'Initiate Digitization',
      delay: 2
    },
    {
      letter: "D",
      title: "Deploy",
      content: 'Roll out solutions to target users, ensure adoption, and transition to ongoing operations.',
      color: '#ff00d4',
      action: 'Launch Deployment',
      delay: 3
    },
    {
      letter: "O",
      title: "Own",
      content: 'Monitor & measure performance, efficiencies, and report KPIs for revenue, growth and cost.',
      color: '#ff8a00',
      action: 'Take Ownership',
      delay: 4
    },
    {
      letter: "T",
      title: "Transfer",
      content: 'Transition the business while collecting and implementing feedback loops.',
      color: '#9600ff',
      action: 'Begin Transfer',
      delay: 5
    }
  ];

  return (
    <Container>
    

      <CardsGrid>
        {cardsData.map((card, index) => (
          <Card key={index} color={card.color} delay={index}>
            <CardHeader>
              <CardBadge color={card.color}>
                {card.letter}
              </CardBadge>
              <CardTitle>{card.title}</CardTitle>
            </CardHeader>
            <CardBody>{card.content}</CardBody>
            <CardButton color={card.color}>
              {card.action} →
            </CardButton>
          </Card>
        ))}
      </CardsGrid>
    </Container>
  );
};

export default Page;