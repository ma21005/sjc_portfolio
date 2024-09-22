import "../style/ProductItem.css";

const ProductItem = (props) => {
  const {product, isHovered, isFirst, isLast} = props;

  return (
    <div className={`product-container ${isHovered ? 'product-container-hoverd' : ''}`}>
      <div className={`product nes-container is-rounded is-dark ${isHovered
          ? 'product-hovered'
          : ''}`}>
        {isHovered && (
          <div className='up-arrow-container'>
            {!isFirst && (
              <p className="up-arrow">▲</p>
            )}
          </div>
        )}
        {product.name}
        {product.description}
        {isHovered && (
          <div className='down-arrow-container'>
            {!isLast && (
              <p className="down-arrow">▲</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductItem;
