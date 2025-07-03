import React from 'react';

function ListShowroom() {
  return (
    <div className="content">
      <div className="map">
        <div className="chapter">
          <div className="chapter-line" />
          <div className="chapter-name">Store Locations</div>
        </div>
        <div className="map-container">
          <div className="map-container-item">
            <img src="./img/map/bd.png" alt="" className="map-image" />
            <div className="map-info">
              <div className="map-info-item">
                <div className="field">Di An Branch:</div>
                <div className="content">
                  1/1 National Route 1K, Dong Hoa Ward, Di An City, Binh Duong Province
                </div>
              </div>
              <div className="map-info-item">
                <div className="field">Business Hours:</div>
                <div className="content">Monday – Sunday: 8:30 AM – 6:00 PM</div>
              </div>
              <div className="map-info-item">
                <div className="field">Phone:</div>
                <div className="content" style={{ color: "red" }}>
                  0903765796
                </div>
              </div>
              <div className="map-info-item">
                <div className="field">Email:</div>
                <div className="content">THEFIFTHLABEL@tmdt.com</div>
              </div>
            </div>
          </div>

          <div className="map-container-item">
            <img src="./img/map/q9.png" alt="" className="map-image" />
            <div className="map-info">
              <div className="map-info-item">
                <div className="field">District 9 Store:</div>
                <div className="content">
                  125 Le Van Viet Street, Hiep Phu Ward, District 9, Ho Chi Minh City
                </div>
              </div>
              <div className="map-info-item">
                <div className="field">Business Hours:</div>
                <div className="content">Monday – Sunday: 8:30 AM – 6:00 PM</div>
              </div>
              <div className="map-info-item">
                <div className="field">Phone:</div>
                <div className="content" style={{ color: "red" }}>
                  0903765732
                </div>
              </div>
              <div className="map-info-item">
                <div className="field">Email:</div>
                <div className="content">THEFIFTHLABEL@tmdt.com</div>
              </div>
            </div>
          </div>

          <div className="map-container-item">
            <img src="./img/map/q10.png" alt="" className="map-image" />
            <div className="map-info">
              <div className="map-info-item">
                <div className="field">District 10 Store:</div>
                <div className="content">
                  18 Tran Thien Chanh Street, District 10, Ho Chi Minh City
                </div>
              </div>
              <div className="map-info-item">
                <div className="field">Business Hours:</div>
                <div className="content">
                  Mon – Fri: 8:30 AM – 6:00 PM, Sat – Sun: 9:00 AM – 4:00 PM
                </div>
              </div>
              <div className="map-info-item">
                <div className="field">Phone:</div>
                <div className="content" style={{ color: "red" }}>
                  0903765796
                </div>
              </div>
              <div className="map-info-item">
                <div className="field">Email:</div>
                <div className="content">THEFIFTHLABEL@tmdt.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListShowroom;
