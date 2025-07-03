import React from 'react';

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-heading">HOTLINE: 0375783563 - 0358681101</div>
        <div className="footer-content">
          
          {/* About Us */}
          <div className="FC-item">
            <ul className="FCi-list">
              <div className="FCi-name">About Us</div>
              <li className="FCi-topic">
                <a href="/#about">
                  <ion-icon name="chevron-forward-outline" />
                  Who We Are
                </a>
              </li>
              <li className="FCi-topic">
                <a href="/showroom">
                  <ion-icon name="chevron-forward-outline" />
                  Showroom
                </a>
              </li>
              <li className="FCi-topic">
                <a href="/news">
                  <ion-icon name="chevron-forward-outline" />
                  News
                </a>
              </li>
              <li className="FCi-topic">
                <a href="/Warranty">
                  <ion-icon name="chevron-forward-outline" />
                  Warranty
                </a>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div className="FC-item">
            <ul className="FCi-list">
              <div className="FCi-name">Policies</div>
              <li className="FCi-topic">
                <a href="/Policy">
                  <ion-icon name="chevron-forward-outline" />
                  Warranty Policy
                </a>
              </li>
              <li className="FCi-topic">
                <a href="/Shipping Policy">
                  <ion-icon name="chevron-forward-outline" />
                  Shipping Policy
                </a>
              </li>
              <li className="FCi-topic">
                <a href="/policy#payment">
                  <ion-icon name="chevron-forward-outline" />
                  Payment Policy
                </a>
              </li>
              <li className="FCi-topic">
                <a href="/policy#return">
                  <ion-icon name="chevron-forward-outline" />
                  Return & Exchange Policy
                </a>
              </li>
              <li className="FCi-topic">
                <a href="/policy#privacy">
                  <ion-icon name="chevron-forward-outline" />
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* News */}
          <div className="FC-item">
            <ul className="FCi-list">
              <div className="FCi-name">News</div>
              <li className="FCi-topic">
                <a href="/news#tech">
                  <ion-icon name="chevron-forward-outline" />
                  Fashion News
                </a>
              </li>
              <li className="FCi-topic">
                <a href="/news#customer">
                  <ion-icon name="chevron-forward-outline" />
                  Style Inspiration
                </a>
              </li>
              <li className="FCi-topic">
                <a href="/news#guide">
                  <ion-icon name="chevron-forward-outline" />
                  Guides & FAQs
                </a>
              </li>
        
          
                
            
            </ul>
          </div>

          {/* Connect */}
          <div className="FC-item">
            <ul className="FCi-list">
              <div className="FCi-name">Connect With Us</div>
              <li className="FCi-topic">
                <a
                  href="https://www.facebook.com/people/FIFTH-LABEL/61577936126207/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    color: "#307FE2",
                    textDecoration: "none"
                  }}
                >
                  <ion-icon name="logo-facebook" style={{ marginRight: "8px" }} />
                  THE FIFTH LABEL
                </a>
              </li>
              <li className="FCi-topic">
                <img src="/img/zalo-icon.png" style={{ width: "5%", marginRight: 8 }} alt="Zalo" />
                0375783563
              </li>
              <li className="FCi-topic">
                <img src="/img/gmail_icon.png" style={{ width: "5%", marginRight: 8 }} alt="Gmail" />
                <a href="mailto:Thefifthlabel@hsu.edu.vn" style={{ textDecoration: 'none', color: 'inherit' }}>
                  Thefifthlabel@hsu.edu.vn
                </a>
              </li>
              <img src="/img/footer_note.png" style={{ width: "100%", marginTop: 10 }} alt="Footer" />
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-end">
        Copyright © 2025 - THE FIFTH LABEL. All Rights Reserved.
      </div>
    </>
  );
}

export default Footer;

