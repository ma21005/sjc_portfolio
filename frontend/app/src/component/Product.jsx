import { useState, useEffect } from 'react';
import axios from 'axios';

import ProductItem from './ProductItem'

const Product = (props) => {
  const {hoveredANum} = props;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div style={{ height: '100%' }}>
      {products.map((product, index) => (
        <ProductItem key={index + 1} product={product} isHovered={hoveredANum === index + 1} />
      ))}
    </div>
  );
};
  
export default Product;
