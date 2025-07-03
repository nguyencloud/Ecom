import React from 'react';
import labeldata from '../labeldata';
import ProductCard from './ProductCard'; // Component hiển thị từng sản phẩm

function Demoproduct() {
  // Lấy 4 sản phẩm đầu tiên trong danh sách
  const featured = labeldata.thefifth.slice(0, 4);

  return (
    <div className="featured-products">
      <h2 className="featured-title">Top sản phẩm nổi bật</h2>
      <div className="content-container">
        {featured.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Demoproduct;


