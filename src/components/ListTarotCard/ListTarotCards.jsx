import { CardTarot } from "../CardTarot/CardTarot.jsx";

export const ListTarotCards = ({ cards = [], cardSize, setCardDetails }) => {
  const onDescription = (card) => {
    if (setCardDetails) {
      setCardDetails(card);
    }
  };

  return (
    <section className="card-draw-form-list">
      <ul>
        {cards.map((card, index) => (
          <li key={index}>
            <CardTarot
              img={card.img}
              title={card.name}
              size={cardSize}
              onClick={() => onDescription(card)}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};
