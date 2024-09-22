import "../style/ProductItem.css";

const ProductItem = (props) => {
  const {product, isHovered} = props;

  return (
    <div className={`product-container ${isHovered ? 'product-container-hoverd' : ''}`}>
      <div className={`product ${isHovered
          ? 'product-hovered'
          : ''}`}>
          {product.name}
          {product.description}
      </div>
    </div>
  );
};

export default ProductItem;
