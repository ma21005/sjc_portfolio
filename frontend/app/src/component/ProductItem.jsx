import "../style/ProductItem.css";

const ProductItem = (props) => {
  const {product, isHovered} = props;

  return (
    <div className={`product-container ${isHovered ? 'product-container-hoverd' : ''}`}>
      <div className={`product ${isHovered
          ? 'product-hovered'
          : ''}`}>
          {product.name}
      </div>
    </div>
  );
};

export default ProductItem;
