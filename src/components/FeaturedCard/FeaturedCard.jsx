import "../FeaturedCard/FeaturedCard.css";
import tarot from "../../assets/cards/cards.js";
import { useState } from "react";
import { HomeIcon, AnotherOneIcon } from "../../assets/icons/icons.jsx";
import Button from "../Button/Button.jsx";
import { useNavigate } from "react-router-dom";

const FeaturedCard = () => {
  const cardsArray = tarot.cards;
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/");
  };

  const [currentCard, setCurrentCard] = useState(
    cardsArray[Math.floor(Math.random() * cardsArray.length)]
  );

  const handleNewCard = () => {
    const randomNumber = Math.floor(Math.random() * cardsArray.length);
    setCurrentCard(cardsArray[randomNumber]);
  };

  return (
    <article className="container">
      <figure>
        <img
          className="random-card-img"
          src={currentCard.img}
          alt={currentCard.name}
        />
      </figure>
      <section>
        <header className="featured-card-header">
          <h1>{currentCard.name}</h1>

          <p>{currentCard.fortune_telling.join(". ")}.</p>
        </header>

        <aside className="card-meanings">
          <h2>Meanings</h2>
          <fieldset>
            <h3>Light:</h3>
            <p>{currentCard.meanings.light.join(". ")}.</p>

            <h3>Shadow:</h3>
            <p>{currentCard.meanings.shadow.join(". ")}.</p>
          </fieldset>
        </aside>

        <ul className="featured-card-buttons">
          <li>
            <Button
              icon={AnotherOneIcon}
              text={"New one"}
              onClick={handleNewCard}
            />
          </li>
          <li>
            <Button icon={HomeIcon} text={"Home"} onClick={handleHome} />
          </li>
        </ul>
      </section>
    </article>
  );
};

export default FeaturedCard;
