import ProductItem from './ProductItem'

const Product = (props) => {
  const {products, hoveredANum} = props;

  return (
    <div style={{ height: '100%' }}>
      {products.map((product, index) => (
        <ProductItem key={index + 1} product={product} isHovered={hoveredANum === index + 1} />
      ))}
    </div>
  );
};
  
export default Product;
