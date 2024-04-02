import "../Hero/Hero.css";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import { useNavigate } from "react-router-dom";
import { Moon, Sun } from "../../assets/icons/icons";

const Hero = () => {
  const navigate = useNavigate();

  const handleRead = () => {
    console.log("boton read");

    navigate("read");
  };

  const handleCardOfDay = () => {
    console.log("boton read");

    navigate("card-of-the-day");
  };

  return (
    <header className="hero-header">
      <nav>
        <h1>Tarot</h1>
        <h2>APPtomancy</h2>
        <Logo />
        <ul>
          <li>
            <Button icon={Sun} text="Read" onClick={handleRead} />
          </li>
          <li>
            <Button
              icon={Moon}
              text="Card of the day"
              onClick={handleCardOfDay}
            />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Hero;
