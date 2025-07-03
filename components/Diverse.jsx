import React from 'react';

function Diverse() {
  /**
   * Each item now has its own `logoStyle` object.  
   * Edit width, height, margin, etc. per logo as needed.
   */
  const items = [
    {
      src: '/Rectangle 32.png',
      mt: '0px',
      ml: '30px',
      title: 'Medi/Health Tech',
      desc: 'Focuses on technological advancements in medicine',
      logoStyle: {
        width: '80px',
        height: '120px',
        margin: '2px auto', // centered
        borderRadius: '8px',
      },
    },
    {
      src: '/Rectangle 34.png',
      mt: '210px',
      ml: '-50px',
      title: 'Pharma',
      desc: 'Concerned with the research, development, and manufacture of drugs',
      logoStyle: {
        width: '60px',
        height: '80px',
        marginBottom: '8px', // left‑aligned (default flow)
        borderRadius: '8px',
        marginLeft:'30px',
      },
    },
    {
      src: '/Rectangle 33.png',
      mt: '0px',
      ml: '-60px',
      title: 'Clinical Trials',
      desc: 'Research studies to evaluate new medical interventions',
      logoStyle: {
        width: '90px',
        height: '120px',
        margin: '8px auto', // centered
        borderRadius: '8px',
      },
    },
    {
      src: '/Rectangle 35.png',
      mt: '210px',
      ml: '-50px',
      title: 'Lifesciences',
      desc: 'Encompasses the study of living organisms and life processes',
      logoStyle: {
        width: '80px',
        height: '80px',
        margin: '0 0 8px 0', // default left
        borderRadius: '8px',
        marginLeft:'30px',
      },
    },
    {
      src: '/Rectangle 36.png',
      mt: '0px',
      ml: '-60px',
      title: 'EdTech',
      desc: 'Focuses on growth and training in healthcare',
      logoStyle: {
        width: '90px',
        height: '120px',
        marginBottom: '8px',
        borderRadius: '8px',
        marginLeft:'30px',
        marginTop:'15px',
      },
    },
    {
      src: '/Rectangle 38.png',
      mt: '210px',
      ml: '-50px',
      title: 'Medical Diagnostics',
      desc: 'Deals with identifying diseases and medical conditions',
      logoStyle: {
        width: '90px',
        height: '100px',
        margin: '8px auto',
        borderRadius: '8px',
      },
    },
    {
      src: '/Rectangle 37.png',
      mt: '0px',
      ml: '-60px',
      title: 'FMCG',
      desc: 'Fast-moving consumer goods related to health and wellness',
      logoStyle: {
        width: '90px',
        height: '120px',
        marginBottom: '8px',
        borderRadius: '8px',
        marginLeft:'20px',
      },
    },
    {
      src: '/Rectangle 39.png',
      mt: '210px',
      ml: '-50px',
      title: 'Manufacturing',
      desc: 'Production of medical devices and healthcare equipment',
      logoStyle: {
        width: '60px',
        height: '80px',
        margin: '8px auto',
        borderRadius: '8px',
      },
    },
    {
      src: '/Rectangle 40.png',
      mt: '0px',
      ml: '-60px',
      title: 'Logistics',
      desc: 'Management of the flow of medical supplies',
      logoStyle: {
        width: '90px',
        height: '120px',
        marginBottom: '8px',
        borderRadius: '8px',
        marginLeft:'24px',
      },
    },
    {
      src: '/Rectangle 42.png',
      mt: '210px',
      ml: '-50px',
      title: 'Real Estate',
      desc: 'Properties used for healthcare facilities',
      logoStyle: {
        width: '60px',
        height: '80px',
        margin: '8px auto',
        borderRadius: '8px',
      },
    },
  ];

  return (
    <>
      {/* ────────────────── Heading ────────────────── */}
      <div>
        <p
          style={{
            fontSize: '30px',
            fontWeight: 'bold',
            color: '#A10000',
            textAlign: 'center',
            marginTop: '45px',
          }}
        >
          Serving Diverse Industries with Custom Solutions
        </p>
      </div>

      {/* ──────────────── Card Grid ──────────────── */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '0px',
          justifyContent: 'center',
          marginTop: '35px',
          flexWrap: 'wrap',
        }}
      >
        {items.map((item, index) => {
          const headerStyle = {
            margin: '0',
            fontSize: '13px',
            fontWeight: 'bold',
            color: '#ffffff',
            lineHeight: '1.4',
            textAlign: 'center',
          };

          const descStyle = {
            margin: '4px 0 0',
            fontSize: '11px',
            color: '#dddddd',
            lineHeight: '1.3',
            textAlign: 'center',
          };

          const logoSrc = `/Talank Business ${index + 1}.png`;

          return (
            <div
              key={index}
              style={{
                position: 'relative',
                width: '165.29px',
                height: '239.32px',
                marginLeft: item.ml,
                marginTop: item.mt,
                overflow: 'hidden',
                borderRadius: '8px',
              }}
            >
              {/* Background image */}
              <img
                src={item.src}
                alt=""
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />

              {/* Overlay content */}
              <div
                style={{
                  position: 'absolute',
                  top: '10px',
                  left: '10px',
                  right: '10px',
                  padding: '8px',
                  borderRadius: '6px',
                }}
              >
                {index % 2 === 0 ? (
                  <>
                    <h4 style={headerStyle}>{item.title}</h4>
                    <p style={descStyle}>{item.desc}</p>
                    <img src={logoSrc} alt={`Logo ${index + 1}`} style={item.logoStyle} />
                  </>
                ) : (
                  <>
                    <img src={logoSrc} alt={`Logo ${index + 1}`} style={item.logoStyle} />
                    <h4 style={headerStyle}>{item.title}</h4>
                    <p style={descStyle}>{item.desc}</p>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Diverse;
