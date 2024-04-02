const CardImage = ({ imageSource, alt }) => (
  <figure>
    <img className="random-card-img" src={imageSource} alt={alt} />
  </figure>
);

export default CardImage;
