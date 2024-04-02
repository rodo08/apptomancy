export const CardTarot = ({ img, title, size, onClick }) => {
  const sizeImage = {
    small: "card-tarot-small",
    medium: "",
    large: "",
  };

  return (
    <>
      <figure onClick={onClick}>
        <img className={sizeImage[size]} src={img} alt={title} />
      </figure>
      <figcaption
        style={{ position: "relative", display: "flex", alignItems: "center" }}
      >
        {title && (
          <span
            style={{
              color: "grey",
              position: "absolute",
              fontSize: "0.8rem",
              fontWeight: "inherit",
              width: "100%",
            }}
          >
            {title}
          </span>
        )}
      </figcaption>{" "}
    </>
  );
};
