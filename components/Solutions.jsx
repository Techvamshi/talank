'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import the router

export default function CircularMenu() {
  const router = useRouter(); // Initialize the router
  const [activeItem, setActiveItem] = useState('Strategic\nConsulting');
  const [currentImage, setCurrentImage] = useState('/center.png');

  // Menu items with individual positioning and custom image sizes
  const menuItems = [
    { id: 1, name: 'iQLIMS',    image: '/Solut1.png', imagePosition: { top: '0px',   left: '60%' }, textPosition: { top: '40px',  left: '60%' }, imageSize: { width: '450px', height: '120px' }, route: 'iQLIMS'  },
    { id: 2, name: 'iQFORMS',   image: '/Solut3.png', imagePosition: { top: '100px', left: '60%' }, textPosition: { top: '140px', left: '60%' }, imageSize: { width: '250px', height: '120px' }, route: 'iQFORMS' },
    { id: 3, name: 'aiotroniX', image: '/Solut2.png', imagePosition: { top: '230px', left: '60%' }, textPosition: { top: '255px', left: '60%' }, imageSize: { width: '300px', height: '100px' }, route: 'aiotroniX' },
    { id: 4, name: 'ideateX',   image: '/Solut4.png', imagePosition: { top: '330px', left: '60%' }, textPosition: { top: '380px', left: '60%' }, imageSize: { width: '180px', height: '150px' }, route: 'ideateX'  },
    { id: 5, name: 'ioMediX',   image: '/Solut5.png', imagePosition: { top: '430px', left: '60%' }, textPosition: { top: '495px', left: '60%' }, imageSize: { width: '220px', height: '180px' }, route: 'ioMediX'  },
    { id: 6, name: '', image: '/cirrr.png',  imagePosition: { top: '0px',   left: '-15%' }, imageSize: { width: '420px', height: '650px' } },
    { id: 7, name: '', image: '/Arroww.png', imagePosition: { top: '-140px', left: '10%' }, imageSize: { width: '470px', height: '450px' } },
    { id: 8, name: '', image: '/Arr1.png',   imagePosition: { top: '-40px', left: '15%' }, imageSize: { width: '380px', height: '450px' } },
    { id: 9, name: '', image: '/Arr2.png',   imagePosition: { top: '72px',  left: '20%' }, imageSize: { width: '380px', height: '450px' } },
    { id:10, name: '', image: '/Arr3.png',   imagePosition: { top: '200px', left: '18%' }, imageSize: { width: '400px', height: '450px' } },
    { id:11, name: '', image: '/Arr4.png',   imagePosition: { top: '300px', left: '12%' }, imageSize: { width: '440px', height: '450px' } },
  ];

  /* ---------- ONLY LOGIC CHANGED HERE ---------- */
  const handleItemClick = (item) => {
    setActiveItem(item.name);
    setCurrentImage(item.image);

    // For the five labelled items, jump to /Digi and the matching section
    if (item.id <= 5) {
      router.push(`/Digi#${item.route}`);   // ← key line
    }
  };
  /* --------------------------------------------- */

  return (
    <>
      <div style={{ marginTop: '60px' }}>
        <p style={{
          fontSize: '35px',
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
        height: '100vh',
        backgroundColor: '#ffff',
        padding: '20px',
        overflow: 'auto',
        position: 'relative',
        overflow: 'hidden',
      }}>

        {/* Left side - Circle with center image */}
        <div style={{
          width: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '20px'
        }}>
          <div style={{
            position: 'relative',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            backgroundColor: '#fff',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <img
              src={currentImage}
              alt={activeItem}
              style={{
                width: '400px',
                height: '300px',
                objectFit: 'contain',
                transition: 'all 0.3s ease'
              }}
            />
          </div>
        </div>

        {/* Right side - Absolutely positioned images and text */}
        <div style={{ width: '50%', position: 'relative', height: '100%' }}>
          {menuItems.map((item) => (
            <div key={item.id}>
              {/* Image */}
              <img
                src={item.image}
                alt={item.name}
                onClick={() => handleItemClick(item)}
                style={{
                  position: 'absolute',
                  top: item.imagePosition.top,
                  left: item.imagePosition.left,
                  width: item.imageSize.width,
                  height: item.imageSize.height,
                  objectFit: 'contain',
                  cursor: 'pointer',
                  borderRadius: '8px',
                  padding: '5px',
                  transform: 'translate(-50%, 0)',
                  transition: 'all 0.3s ease'
                }}
              />

              {/* Text */}
              {item.name && (
                <div
                  onClick={() => handleItemClick(item)}
                  style={{
                    position: 'absolute',
                    top: item.textPosition.top,
                    left: item.textPosition.left,
                    padding: '12px 16px',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '16px',
                    whiteSpace: 'pre-line',
                    cursor: 'pointer',
                    transform: 'translate(-50%, 0)',
                    backgroundColor: activeItem === item.name ? 'rgba(0,0,0,0.05)' : 'transparent'
                  }}
                >
                  {item.name}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
