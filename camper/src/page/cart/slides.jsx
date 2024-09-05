import ImageSlider from "./imageSlider";
import CartImg1 from '..//..//assets/img-11.webp'
import CartImg2 from '..//..//assets/carInSofa.png'
const CartSlides = () => {
  const slides = [
    { url: `${CartImg1}`, title: 'car' },
    { url: `${CartImg2}`, title: 'car' }
  ];
  const containerStyles = {
    margin: "0 auto",
  };
  return (
    <div>
      <div className="slideContainer" style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
};

export default CartSlides;