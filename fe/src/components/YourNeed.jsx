import React from 'react';

function YourNeed() {
  return (
    <div className="YourNeed" style={{ padding: '40px 20px' }}>
      {/* PHẦN CHƯƠNG MỤC */}
      <div className="chapter" style={{ position: 'relative', marginBottom: '40px' }}>
        <div
          className="chapter-line"
          style={{
            position: 'absolute',
            borderTop: '1px solid #bbb',
            width: '100%',
            top: '20px',
            zIndex: 0,
          }}
        ></div>
        <div
          className="chapter-name"
          style={{
            position: 'relative',
            zIndex: 1,
            backgroundColor: '#fff',
            display: 'inline-block',
            padding: '8px 20px',
            fontSize: '24px',
            fontWeight: 'bold',
            margin: '0 auto',
            textAlign: 'center',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          About The Fifth Label
        </div>
      </div>

      {/* PHẦN LOGO & GIỚI THIỆU */}
      <div
        className="YN-logo-block"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '30px',
          marginBottom: '50px',
        }}
      >
        <img
          src={require('../img/thefifth_logo.jpg')}
          alt="The Fifth Label Logo"
          style={{
            maxWidth: '180px',
            borderRadius: '12px',
            boxShadow: '0 0 6px rgba(0,0,0,0.1)',
          }}
        />
        <div style={{ maxWidth: '600px', textAlign: 'left' }}>
          <p style={{ fontSize: '16px', lineHeight: '1.6' }}>
            <strong>The Fifth Label</strong> is a vibrant fashion brand designed for young trendsetters who embrace energy and individuality. With sleek designs, premium materials, and fair pricing, The Fifth Label is the perfect daily choice for your wardrobe.
          </p>
          <p style={{ fontSize: '16px', lineHeight: '1.6' }}>
            From bold crop tops and flowy maxi dresses to chic skirts and streetwear essentials, every piece helps you express your unique personality with confidence and style.
          </p>
        </div>
      </div>
    </div>
  );
}

export default YourNeed;

