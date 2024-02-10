import "./chooseProduct.scss";
import beatImage from "../../../../assets/images/BeatImage.png";
export const ProductCard = ({ productTitle, productImage, releaseDate }) => {
  return (
    <div className="productCard">
      <img src={productImage} alt="Artwork" className="productCardArtwork" />
      <div className="productCardInfo">
        <h3>{productTitle}</h3>
        <span>{releaseDate}</span>
      </div>
    </div>
  );
};
const ChooseProduct = () => {
  const productData = [
    {
      productImage: beatImage,
      productTitle: "Love Scars",
      releaseDate: "16 May, 2023",
    },
    {
      productImage: beatImage,
      productTitle: "Love Scars",
      releaseDate: "19 Jan, 2023",
    },
    {
      productImage: beatImage,
      productTitle: "Love Scars",
      releaseDate: "22 Feb, 2023",
    },
    {
      productImage: beatImage,
      productTitle: "Love Scars",
      releaseDate: "13 May, 2023",
    },
    {
      productImage: beatImage,
      productTitle: "Love Scars",
      releaseDate: "27 May, 2023",
    },
  ];
  return (
    <div className="chooseProduct">
      <h1 className="chooseTitle">Choose track</h1>
      <div className="productCardsContainer">
        {productData.map((product) => (
          <ProductCard
            productImage={product.productImage}
            productTitle={product.productTitle}
            releaseDate={product.releaseDate}
          />
        ))}
      </div>
    </div>
  );
};

export default ChooseProduct;
