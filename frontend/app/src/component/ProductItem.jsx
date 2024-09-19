import "../style/ProductItem.css";

const ProductItem = ({ product }) => {
  // const skillExperience = Math.floor(skill.experience * 10) / 10;
  // const fullStars = Math.floor(skillExperience);
  // const partialStar = skillExperience - fullStars;
  // const imagePath = `/img/skill_icons/${skill.skill_type}.png`;

  return (
    <div className="nes-container is-rounded is-dark">
      <p>{product.name}</p>
    </div>
  );
};

export default ProductItem;
