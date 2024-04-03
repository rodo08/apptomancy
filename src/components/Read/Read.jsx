import { useState } from "react";
import "./Read.css";
import Button from "../Button/Button";
import { AnotherOneIcon, HomeIcon, MagicWound } from "../../assets/icons/icons";
import tarotCards from "../../assets/cards/cards.js";
import { CardTarotDetails } from "../CardTarotDetails/CardTarotDetails.jsx";
import { Question } from "../Question/Question.jsx";
import { ListTarotCards } from "../ListTarotCard/ListTarotCards.jsx";
import { useNavigate } from "react-router-dom";

const defaultImage =
  "https://live.staticflickr.com/65535/53614566090_fd3126fe6f_z.jpg";

const Read = () => {
  const navigate = useNavigate();
  const cardsDefault = Array.from({ length: 3 }, () => ({
    img: defaultImage,
  }));
  const [inputValue, setInputValue] = useState("");
  const [storedQuestions, setStoredQuestions] = useState([]);
  const [cards, setCards] = useState(cardsDefault);
  const [inputError, setInputError] = useState("");
  const [historyCards, setHistoryCards] = useState(
    Array.from({ length: 3 }, () => ({
      question: "",
      cards: cardsDefault,
    }))
  );
  const [cardDetails, setCardDetails] = useState({});
  const [isSubmit, setIsSubmit] = useState("submit");

  const handleHome = () => {
    navigate("/");
  };

  const randomCard = () => {
    const randomNumbers = new Set();

    while (randomNumbers.size < 3) {
      const randomNumber = Math.floor(Math.random() * 78);
      randomNumbers.add(randomNumber);
    }

    const randomNumbersArray = Array.from(randomNumbers);

    const filterCards = tarotCards.cards.filter((card, index) =>
      randomNumbersArray.includes(index)
    );

    return filterCards;
  };

  const onChangeInput = (event) => {
    setInputError("");
    setInputValue(event.target.value);
  };

  const onSubmitDealCards = (e) => {
    e.preventDefault();
    if (!inputValue) {
      setInputError("Make an inquiry before pressing the button!");
      return;
    }
    setInputValue("");

    const newRandomCards = randomCard();
    setCards(newRandomCards);

    const questionToUpdate = historyCards.find((item) =>
      item.cards.some((card) => card.img === defaultImage)
    );

    if (questionToUpdate) {
      const updatedHistoryCards = historyCards.map((item) =>
        item === questionToUpdate
          ? { ...item, question: inputValue, cards: newRandomCards }
          : item
      );

      setHistoryCards(updatedHistoryCards);
      console.log(updatedHistoryCards);

      if (updatedHistoryCards[2].question === "") {
        setStoredQuestions([...storedQuestions, inputValue]);
        return;
      }
      setIsSubmit("button");
      console.log(isSubmit);
      return;
    }
  };

  const handleQuestion = (event) => {
    event.preventDefault();
    setInputValue("");
    setCardDetails({});
    setHistoryCards(
      Array.from({ length: 3 }, () => ({
        question: "",
        cards: cardsDefault,
      }))
    );
    setCards(Array.from({ length: 3 }, () => ({ img: defaultImage })));
    setIsSubmit("submit");
  };

  return (
    <>
      <main className="main">
        <div className="card-draw">
          <section className="card-draw-form">
            <h1>Question the cards</h1>
            <form onSubmit={onSubmitDealCards}>
              <input
                type="text"
                maxLength="100"
                placeholder="Write your question"
                value={inputValue}
                onChange={onChangeInput}
                style={{ position: "relative" }}
              />
              <p
                style={{
                  color: "violet",
                  position: "absolute",
                  fontSize: "14px",
                  fontWeight: "inherit",
                  top: "6.5rem",
                  padding: "0 0 0 0.5rem",
                }}
              >
                {inputError}
              </p>
              <Button type={isSubmit} icon={MagicWound} text={"Draw cards"} />
            </form>
          </section>

          <ListTarotCards
            cards={cards}
            cardSize={""}
            setCardDetails={setCardDetails}
          />
          {Object.values(cardDetails).length > 0 ? (
            <section className="card-draw-form-list-details">
              <article>
                <CardTarotDetails
                  className={"card-details"}
                  title={cardDetails?.name}
                  description={cardDetails?.fortune_telling}
                  keywords={cardDetails?.keywords}
                  light={cardDetails?.meanings?.light}
                  shadow={cardDetails?.meanings?.shadow}
                />
              </article>
            </section>
          ) : (
            <section className="card-draw-form-list-details">
              <article>
                <CardTarotDetails
                  className={"card-details"}
                  title={"Select a drawn card"}
                  description={[
                    "Here you'll see card's fortune telling features..",
                  ]}
                  keywords={["Here you'll see drawn card keywords.."]}
                  light={["Here you'll see drawn card light meanings.."]}
                  shadow={["Here you'll see drawn card shadow meanings.."]}
                />
              </article>
            </section>
          )}
        </div>
        <div className="read-separator"></div>
        <div className="previous-cards">
          <h1>Previous cards</h1>
          {historyCards.map((item, index) => (
            <aside key={index} className="previous-cards-history">
              <fieldset className="inquiry">
                <p>
                  Inquiry: <Question question={item.question} />
                </p>
              </fieldset>
              <ListTarotCards
                cards={item.cards}
                setCardDetails={setCardDetails}
              />
            </aside>
          ))}
          <div className="list-buttons">
            <Button icon={HomeIcon} text={"Home"} onClick={handleHome} />
            <Button
              icon={AnotherOneIcon}
              text={"Clear & Restart"}
              onClick={handleQuestion}
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Read;
