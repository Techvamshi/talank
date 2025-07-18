'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function CircularMenu() {
  const router = useRouter();
  const [activeItem, setActiveItem] = useState('Strategic\nConsulting');
  const [currentImage, setCurrentImage] = useState('/center.png');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const menuItems = [
    {
      id: 1,
      name: 'iQLIMS',
      image: '/Solut1.png',
      imagePosition: { top: '0px', left: '60%' },
      textPosition: { top: '40px', left: '60%' },
      imageSize: { width: '450px', height: '120px' },
      mobileImagePosition: { top: '-20px', left: '75%' },
      mobileTextPosition: { top: '0px', left: '75%' },
      mobileImageSize: { width: '250px', height: '80px' },
      route: 'iQLIMS'
    },
    {
      id: 2,
      name: 'iQFORMS',
      image: '/Solut3.png',
      imagePosition: { top: '100px', left: '60%' },
      textPosition: { top: '140px', left: '60%' },
      imageSize: { width: '250px', height: '120px' },
      mobileImagePosition: { top: '70px', left: '75%' },
      mobileTextPosition: { top: '90px', left: '75%' },
      mobileImageSize: { width: '180px', height: '80px' },
      route: 'iQFORMS'
    },
    {
      id: 3,
      name: 'aiotroniX',
      image: '/Solut2.png',
      imagePosition: { top: '230px', left: '60%' },
      textPosition: { top: '255px', left: '60%' },
      imageSize: { width: '300px', height: '100px' },
      mobileImagePosition: { top: '160px', left: '70%' },
      mobileTextPosition: { top: '180px', left: '72%' },
      mobileImageSize: { width: '200px', height: '80px' },
      route: 'aiotroniX'
    },
    {
      id: 4,
      name: 'ideateX',
      image: '/Solut4.png',
      imagePosition: { top: '330px', left: '60%' },
      textPosition: { top: '380px', left: '60%' },
      imageSize: { width: '180px', height: '150px' },
      mobileImagePosition: { top: '230px', left: '70%' },
      mobileTextPosition: { top: '258px', left: '69%' },
      mobileImageSize: { width: '140px', height: '100px' },
      route: 'ideateX'
    },
    {
      id: 5,
      name: 'ioMediX',
      image: '/Solut5.png',
      imagePosition: { top: '430px', left: '60%' },
      textPosition: { top: '495px', left: '60%' },
      imageSize: { width: '220px', height: '180px' },
      mobileImagePosition: { top: '310px', left: '70%' },
      mobileTextPosition: { top: '348px', left: '69%' },
      mobileImageSize: { width: '160px', height: '120px' },
      route: 'ioMediX'
    },
    {
      id: 6,
      name: '',
      image: '/cirrr.png',
      imagePosition: { top: '0px', left: '-15%' },
      imageSize: { width: '420px', height: '650px' },
      mobileImagePosition: { top: '-10px', left: '-10%' },
      mobileImageSize: { width: '280px', height: '400px' }
    },
    {
      id: 7,
      name: '',
      image: '/Arroww.png',
      imagePosition: { top: '-140px', left: '10%' },
      imageSize: { width: '470px', height: '450px' },
      mobileImagePosition: { top: '-80px', left: '8%' },
      mobileImageSize: { width: '120px', height: '280px' },
      rotation: '-22deg'
    },
    {
      id: 8,
      name: '',
      image: '/Arr1.png',
      imagePosition: { top: '-40px', left: '15%' },
      imageSize: { width: '380px', height: '450px' },
      mobileImagePosition: { top: '-28px', left: '20%' },
      mobileImageSize: { width: '80px', height: '300px' },
      rotation: '-15deg'
    },
    {
      id: 9,
      name: '',
      image: '/Arr2.png',
      imagePosition: { top: '72px', left: '20%' },
      imageSize: { width: '380px', height: '450px' },
      mobileImagePosition: { top: '45px', left: '16%' },
      mobileImageSize: { width: '60px', height: '300px' },
      rotation: '0deg'
    },
    {
      id: 10,
      name: '',
      image: '/Arr3.png',
      imagePosition: { top: '200px', left: '18%' },
      imageSize: { width: '400px', height: '450px' },
      mobileImagePosition: { top: '100px', left: '18%' },
      mobileImageSize: { width: '80px', height: '300px' },
      rotation: '15deg'
    },
    {
      id: 11,
      name: '',
      image: '/Arr4.png',
      imagePosition: { top: '300px', left: '12%' },
      imageSize: { width: '440px', height: '450px' },
      mobileImagePosition: { top: '160px', left: '12%' },
      mobileImageSize: { width: '130px', height: '300px' },
      rotation: '30deg'
    },
  ];

  const handleItemClick = (item) => {
    setActiveItem(item.name);
    setCurrentImage(item.image);
    if (item.id <= 5) {
      router.push(`/Digi#${item.route}`);
    }
  };

  return (
    <>
      <div style={{ marginTop: '60px' }}>
        <p style={{
          fontSize: isMobile ? '24px' : '35px',
          color: '#1447E6',
          fontWeight: 'bold',
          textAlign: 'center',
          textDecoration: 'underline',
        }}>
          Products and Solutions
        </p>
      </div>

      <div style={{
        display: 'flex',
        height: isMobile ? '600px' : '100vh',
        backgroundColor: '#fff',
        padding: isMobile ? '10px' : '20px',
        overflow: 'hidden',
        position: 'relative',
        flexDirection: 'row',
        marginBottom: isMobile ? '-50px' : '0'
      }}>
        {/* Left side - Center circle */}
        <div style={{
          width: isMobile ? '40%' : '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: isMobile ? '5px' : '20px',
        }}>
          <div style={{
            position: 'relative',
            width: isMobile ? '200px' : '500px',
            height: isMobile ? '200px' : '500px',
            borderRadius: '50%',
            backgroundColor: '#fff',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: isMobile ? '-180px' : '',

          }}>
            <img
              src={currentImage}
              alt={activeItem}
              style={{
                width: isMobile ? '120px' : '400px',
                height: isMobile ? '100px' : '300px',
                objectFit: 'contain',
                transition: 'all 0.3s ease'
              }}
            />
          </div>
        </div>

        {/* Right side - Floating images */}
        <div style={{ 
          width: isMobile ? '60%' : '50%', 
          position: 'relative', 
          height: isMobile ? '500px' : '100%',
        }}>
          {menuItems.map((item) => {
            const imagePosition = isMobile && item.mobileImagePosition ? item.mobileImagePosition : item.imagePosition;
            const imageSize = isMobile && item.mobileImageSize ? item.mobileImageSize : item.imageSize;
            const textPosition = isMobile && item.mobileTextPosition ? item.mobileTextPosition : item.textPosition;

            return (
              <div key={item.id}>
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  onClick={() => handleItemClick(item)}
                  style={{
                    position: 'absolute',
                    top: imagePosition.top,
                    left: imagePosition.left,
                    width: imageSize.width,
                    height: imageSize.height,
                    objectFit: 'contain',
                    cursor: 'pointer',
                    borderRadius: '8px',
                    padding: '5px',
                    transform: `translate(-50%, 0) ${item.rotation ? `rotate(${item.rotation})` : ''}`,
                    transition: 'all 0.3s ease',
                    zIndex: 2
                  }}
                />

                {/* Text */}
                {item.name && (
                  <div
                    onClick={() => handleItemClick(item)}
                    style={{
                      position: 'absolute',
                      top: textPosition.top,
                      left: textPosition.left,
                      padding: isMobile ? '5px 8px' : '12px 16px',
                      color: 'white',
                      fontWeight: 'bold',
                      fontSize: isMobile ? '10px' : '16px',
                      whiteSpace: 'pre-line',
                      cursor: 'pointer',
                      transform: 'translate(-50%, 0)',
                      backgroundColor: activeItem === item.name ? 'rgba(0,0,0,0.05)' : 'transparent',
                      zIndex: 3
                    }}
                  >
                    {item.name}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}