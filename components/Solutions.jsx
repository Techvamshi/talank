'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function CircularMenu() {
  const router = useRouter();
  const [activeItem, setActiveItem] = useState('Strategic\nConsulting');
  const [currentImage, setCurrentImage] = useState('/center.png');
  const [isMobile, setIsMobile] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [isMediumScreen, setIsMediumScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsLargeScreen(width >= 1445);
      setIsMediumScreen(width >= 1024 && width < 1446);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const menuItems = [
    {
      id: 1,
      name: 'iQLIMS',
      image: '/Solut1.png',
      imagePosition: { 
        desktop: { top: '-20px', left: '60%' },
        medium: { top: '0px', left: '55%' },
        default: { top: '0px', left: '50%' }
      },
      textPosition: { 
        desktop: { top: '20px', left: '60%' },
        medium: { top: '34px', left: '55%' },
        default: { top: '40px', left: '50%' }
      },
      imageSize: { 
        desktop: { width: '450px', height: '120px' },
        medium: { width: '400px', height: '110px' },
        default: { width: '350px', height: '100px' }
      },
      mobileImagePosition: { top: '-20px', left: '75%' },
      mobileTextPosition: { top: '0px', left: '75%' },
      mobileImageSize: { width: '250px', height: '80px' },
      route: 'iQLIMS'
    },
    {
      id: 2,
      name: 'iQFORMS',
      image: '/Solut3.png',
      imagePosition: { 
        desktop: { top: '90px', left: '58%' },
        medium: { top: '100px', left: '55%' },
        default: { top: '100px', left: '50%' }
      },
      textPosition: { 
        desktop: { top: '130px', left: '58%' },
        medium: { top: '135px', left: '55%' },
        default: { top: '140px', left: '50%' }
      },
      imageSize: { 
        desktop: { width: '250px', height: '120px' },
        medium: { width: '220px', height: '110px' },
        default: { width: '200px', height: '100px' }
      },
      mobileImagePosition: { top: '70px', left: '75%' },
      mobileTextPosition: { top: '90px', left: '75%' },
      mobileImageSize: { width: '180px', height: '80px' },
      route: 'iQFORMS'
    },
    {
      id: 3,
      name: 'aiotroniX',
      image: '/Solut2.png',
      imagePosition: { 
        desktop: { top: '225px', left: '54%' },
        medium: { top: '230px', left: '55%' },
        default: { top: '230px', left: '50%' }
      },
      textPosition: { 
        desktop: { top: '250px', left: '54%' },
        medium: { top: '250px', left: '55%' },
        default: { top: '255px', left: '50%' }
      },
      imageSize: { 
        desktop: { width: '300px', height: '100px' },
        medium: { width: '280px', height: '90px' },
        default: { width: '250px', height: '80px' }
      },
      mobileImagePosition: { top: '160px', left: '70%' },
      mobileTextPosition: { top: '180px', left: '72%' },
      mobileImageSize: { width: '200px', height: '80px' },
      route: 'aiotroniX'
    },
    {
      id: 4,
      name: 'ideateX',
      image: '/Solut4.png',
      imagePosition: { 
        desktop: { top: '320px', left: '50%' },
        medium: { top: '330px', left: '55%' },
        default: { top: '330px', left: '50%' }
      },
      textPosition: { 
        desktop: { top: '373px', left: '50%' },
        medium: { top: '378px', left: '55%' },
        default: { top: '380px', left: '50%' }
      },
      imageSize: { 
        desktop: { width: '180px', height: '150px' },
        medium: { width: '160px', height: '140px' },
        default: { width: '140px', height: '130px' }
      },
      mobileImagePosition: { top: '230px', left: '70%' },
      mobileTextPosition: { top: '258px', left: '69%' },
      mobileImageSize: { width: '140px', height: '100px' },
      route: 'ideateX'
    },
    {
      id: 5,
      name: 'ioMediX',
      image: '/Solut5.png',
      imagePosition: { 
        desktop: { top: '410px', left: '50%' },
        medium: { top: '430px', left: '55%' },
        default: { top: '430px', left: '50%' }
      },
      textPosition: { 
        desktop: { top: '475px', left: '50%' },
        medium: { top: '487px', left: '55%' },
        default: { top: '495px', left: '50%' }
      },
      imageSize: { 
        desktop: { width: '220px', height: '180px' },
        medium: { width: '200px', height: '160px' },
        default: { width: '180px', height: '140px' }
      },
      mobileImagePosition: { top: '310px', left: '70%' },
      mobileTextPosition: { top: '348px', left: '69%' },
      mobileImageSize: { width: '160px', height: '120px' },
      route: 'ioMediX'
    },
    {
      id: 6,
      name: '',
      image: '/cirrr.png',
      imagePosition: { 
        desktop: { top: '0px', left: '-15%' },
        medium: { top: '0px', left: '-10%' },
        default: { top: '0px', left: '-5%' }
      },
      imageSize: { 
        desktop: { width: '420px', height: '650px' },
        medium: { width: '380px', height: '600px' },
        default: { width: '340px', height: '550px' }
      },
      mobileImagePosition: { top: '-10px', left: '-10%' },
      mobileImageSize: { width: '280px', height: '400px' }
    },
    {
      id: 7,
      name: '',
      image: '/Arroww.png',
      imagePosition: { 
        desktop: { top: '-155px', left: '14%' },
        medium: { top: '-120px', left: '12%' },
        default: { top: '-140px', left: '5%' }
      },
      imageSize: { 
        desktop: { width: '660px', height: '450px' },
        medium: { width: '420px', height: '400px' },
        default: { width: '370px', height: '350px' }
      },
      mobileImagePosition: { top: '-80px', left: '8%' },
      mobileImageSize: { width: '120px', height: '280px' },
      rotation: {
        desktop: '3deg',
        medium: '0deg',
        default: '-15deg'
      }
    },
    {
      id: 8,
      name: '',
      image: '/Arr1.png',
      imagePosition: { 
        desktop: { top: '-48px', left: '17%' },
        medium: { top: '-40px', left: '18%' },
        default: { top: '-40px', left: '8%' }
      },
      imageSize: { 
        desktop: { width: '560px', height: '450px' },
        medium: { width: '350px', height: '400px' },
        default: { width: '300px', height: '350px' }
      },
      mobileImagePosition: { top: '-28px', left: '20%' },
      mobileImageSize: { width: '80px', height: '300px' },
      rotation: {
        desktop: '0deg',
        medium: '2deg',
        default: '-10deg'
      }
    },
    {
      id: 9,
      name: '',
      image: '/Arr2.png',
      imagePosition: { 
        desktop: { top: '72px', left: '17%' },
        medium: { top: '72px', left: '19%' },
        default: { top: '72px', left: '10%' }
      },
      imageSize: { 
        desktop: { width: '500px', height: '450px' },
        medium: { width: '300px', height: '400px' },
        default: { width: '300px', height: '350px' }
      },
      mobileImagePosition: { top: '45px', left: '16%' },
      mobileImageSize: { width: '60px', height: '300px' },
      rotation: {
        desktop: '2deg',
        medium: '4deg',
        default: '0deg'
      }
    },
    {
      id: 10,
      name: '',
      image: '/Arr3.png',
      imagePosition: { 
        desktop: { top: '190px', left: '14%' },
        medium: { top: '200px', left: '18%' },
        default: { top: '200px', left: '12%' }
      },
      imageSize: { 
        desktop: { width: '500px', height: '450px' },
        medium: { width: '340px', height: '400px' },
        default: { width: '320px', height: '350px' }
      },
      mobileImagePosition: { top: '100px', left: '18%' },
      mobileImageSize: { width: '80px', height: '300px' },
      rotation: {
        desktop: '0deg',
        medium: '2deg',
        default: '10deg'
      }
    },
    {
      id: 11,
      name: '',
      image: '/Arr4.png',
      imagePosition: { 
        desktop: { top: '290px', left: '10%' },
        medium: { top: '300px', left: '13%' },
        default: { top: '300px', left: '8%' }
      },
      imageSize: { 
        desktop: { width: '550px', height: '450px' },
        medium: { width: '400px', height: '400px' },
        default: { width: '360px', height: '350px' }
      },
      mobileImagePosition: { top: '160px', left: '12%' },
      mobileImageSize: { width: '130px', height: '300px' },
      rotation: {
        desktop: '0deg',
        medium: '4deg',
        default: '20deg'
      }
    }
  ];

  const handleItemClick = (item) => {
    setActiveItem(item.name);
    setCurrentImage(item.image);
    if (item.id <= 5) {
      router.push(`/Digi#${item.route}`);
    }
  };

  const getPositioning = (item) => {
    if (isMobile) {
      return {
        imagePosition: item.mobileImagePosition,
        textPosition: item.mobileTextPosition || {},
        imageSize: item.mobileImageSize,
        rotation: typeof item.rotation === 'object' ? item.rotation.default : item.rotation || '0deg'
      };
    }
    
    if (isLargeScreen) {
      return {
        imagePosition: item.imagePosition.desktop,
        textPosition: item.textPosition?.desktop || {},
        imageSize: item.imageSize.desktop,
        rotation: typeof item.rotation === 'object' ? item.rotation.desktop : item.rotation || '0deg'
      };
    }
    
    if (isMediumScreen) {
      return {
        imagePosition: item.imagePosition.medium || item.imagePosition.desktop,
        textPosition: item.textPosition?.medium || item.textPosition?.desktop || {},
        imageSize: item.imageSize.medium || item.imageSize.desktop,
        rotation: typeof item.rotation === 'object' ? item.rotation.medium : item.rotation || '0deg'
      };
    }
    
    return {
      imagePosition: item.imagePosition.default || item.imagePosition.desktop,
      textPosition: item.textPosition?.default || item.textPosition?.desktop || {},
      imageSize: item.imageSize.default || item.imageSize.desktop,
      rotation: typeof item.rotation === 'object' ? item.rotation.default : item.rotation || '0deg'
    };
  };

  // Calculate responsive margins
  const leftContainerMargin = isMobile 
    ? '0' 
    : isLargeScreen 
      ? '210px' 
      : isMediumScreen 
        ? '20px' 
        : '-40px';

  const rightContainerMargin = isMobile 
    ? '0' 
    : isLargeScreen 
      ? '-170px' 
      : isMediumScreen 
        ? '-20px' 
        : '40px';

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
          marginLeft: leftContainerMargin,
          transition: 'margin 0.3s ease'
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
            marginTop: isMobile ? '-180px' : isLargeScreen ? '-180px' : isMediumScreen ? '' : '',
            marginLeft: isMobile 
              ? '0' 
              : isLargeScreen 
                ? '-300px'     // For screens ≥1440px
                : isMediumScreen 
                  ? '-50px'   // For Mac screens (1024px–1439px)
                  : '-450px', // For smaller desktop (768px–1023px)
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
          marginLeft: rightContainerMargin,
          transition: 'margin 0.3s ease',
          
        }}>
          {menuItems.map((item) => {
            const { imagePosition, textPosition, imageSize, rotation } = getPositioning(item);

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
                    cursor: item.name ? 'pointer' : 'default',
                    borderRadius: '8px',
                    padding: '5px',
                    transform: `translate(-50%, 0) rotate(${rotation})`,
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