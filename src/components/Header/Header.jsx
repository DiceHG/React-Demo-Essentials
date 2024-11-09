import reactImg from "../../assets/react-core-concepts.png";
import "./Header.css";

const reactDescription = ["Fundamental", "Crucial", "Core", "Basics", "Vital"];

function genRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export default function Header() {
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {reactDescription[genRandomInt(reactDescription.length)]} React concepts
        you will need for almost any app you are going to build!
      </p>
    </header>
  );
}
